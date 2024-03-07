import { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
  }

  onSubmit = (e) => {
    const { label } = this.state
    const { onAdded } = this.props
    e.preventDefault()
    onAdded(label)
    this.setState({
      label: '',
    })
  }

  onLabel = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  render() {
    const { label } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onLabel} value={label} />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
}
