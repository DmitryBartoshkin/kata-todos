import { Component } from 'react'
import PropTypes from 'prop-types'
import { minutesToMilliseconds, secondsToMilliseconds, millisecondsToSeconds } from 'date-fns'
import './task.css'

export default class Task extends Component {
  static defaulProps = {
    description: 'Default Task',
    onDone: () => {},
    deleted: () => {},
    timeFromAdded: 'some seconds',
  }

  constructor(props) {
    super(props)
    this.state = {
      timeTick: '',
      isTick: false,
      isChecked: false,
    }
    this.timerId = null
    this.newTime = null
  }

  onPlayTimer = (e) => {
    const currentTimeTimerArr = e.target.parentElement.innerText.split(':')
    const currentTimeTimerMs =
      minutesToMilliseconds(currentTimeTimerArr[0]) + secondsToMilliseconds(currentTimeTimerArr[1])
    this.newTime = currentTimeTimerMs
    if (this.newTime > 0 && this.timerId === null) {
      this.timerId = setInterval(() => this.updateTimer(), 1000)
    }
  }

  updateTimer = () => {
    this.newTime -= 1000
    const totalSec = millisecondsToSeconds(this.newTime)
    let min = Math.floor(totalSec / 60)
    let sec = totalSec - min * 60
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    this.setState((state) => {
      const timeTick = `${min}:${sec}`
      const isTick = state.isTisk
      return {
        timeTick,
        isTick: !isTick,
      }
    })

    if (this.newTime <= 0) {
      this.dieTimer()
    }
  }

  onPauseTimer = () => {
    clearInterval(this.timerId)
    this.timerId = null
  }

  dieTimer = () => {
    const { onDone } = this.props
    clearInterval(this.timerId)

    if (this.newTime <= 0) {
      this.setState({ isChecked: true })
      onDone()
    }
  }

  onToggleDone = () => {
    const { onDone } = this.props
    const { isChecked } = this.state
    this.setState({ isChecked: !isChecked })
    onDone()
  }

  render() {
    const { description, deleted, timeFromAdded, onEdit, timeTimer } = this.props
    const { timeTick, isTick, isChecked } = this.state
    const showTimer = isTick ? timeTick : timeTimer
    const checked = isChecked ? 'checked' : null

    return (
      <div className="view">
        <input className="toggle" type="checkbox" name="checkDone" onClick={this.onToggleDone} checked={checked} />
        <label htmlFor="checkDone">
          <span className="title">{description}</span>
          <span className="description">
            <button type="button" className="icon icon-play" onClick={this.onPlayTimer} />
            <button type="button" className="icon icon-pause" onClick={this.onPauseTimer} />
            {showTimer}
          </span>
          <span className="description">created {timeFromAdded} ago</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onEdit} />
        <button type="button" className="icon icon-destroy" onClick={deleted} />
      </div>
    )
  }
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  onDone: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
  timeFromAdded: PropTypes.string.isRequired,
}
