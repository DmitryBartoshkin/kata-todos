import { Component } from 'react'
import './task.css'
import PropTypes from 'prop-types'

export default class Task extends Component {
  static defaulProps = {
    description: 'Default Task',
    onDone: () => {},
    deleted: () => {},
    timeFromAdded: 'some seconds',
  }

  render() {
    const { description, onDone, deleted, timeFromAdded, onEdit } = this.props

    return (
      <div className="view">
        <input className="toggle" type="checkbox" name="checkDone" onClick={onDone} />
        <label htmlFor="checkDone">
          <span className="description">{description}</span>
          <span className="created">created ≈ {timeFromAdded} ago</span>
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
