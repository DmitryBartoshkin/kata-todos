import { Component } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      minLabel: '',
      secLabel: '',
    }
  }

  onSubmit = (e) => {
    let { minLabel, secLabel } = this.state
    const { label } = this.state
    const { onAdded } = this.props
    minLabel = minLabel < 10 ? `0${minLabel.slice(-1)}` : minLabel.slice(-2)
    secLabel = secLabel < 10 ? `0${secLabel.slice(-1)}` : secLabel.slice(-2)
    e.preventDefault()
    onAdded(label, minLabel, secLabel)
    this.setState({
      label: '',
      minLabel: '',
      secLabel: '',
    })
  }

  onLabel = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onMin = (e) => {
    this.setState({
      minLabel: e.target.value,
    })
  }

  onSec = (e) => {
    this.setState({
      secLabel: e.target.value,
    })
  }

  render() {
    const { label, minLabel, secLabel } = this.state
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="Task" onChange={this.onLabel} value={label} required />
        <input
          className="new-todo-form__timer"
          type="number"
          min={0}
          max={59}
          placeholder="Min"
          onChange={this.onMin}
          value={minLabel}
          required
        />
        <input
          className="new-todo-form__timer"
          type="number"
          min={0}
          max={59}
          placeholder="Sec"
          onChange={this.onSec}
          value={secLabel}
          required
        />
        <button type="submit" tabIndex={-1} />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
}
