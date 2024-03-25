import { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

export default class TaskList extends Component {
  static defaulProps = {
    dataTodo: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      label: '',
    }

    this.onEditEnd = (e) => {
      e.preventDefault()
      const { onEditDone } = this.props
      const { label } = this.state
      const idItem = e.target.lastChild.id
      onEditDone(label, idItem)
    }

    this.onValue = (e) => {
      this.setState({
        label: e.target.value,
      })
    }
  }

  render() {
    const { dataTodo, onDone, deleted, onEdit } = this.props
    const { label } = this.props
    const listItems = dataTodo.map((el) => (
      <li className={el.classItem} key={el.id} hidden={el.hidden}>
        <Task
          description={el.description}
          onDone={() => onDone(el.id)}
          deleted={() => deleted(el.id)}
          onEdit={() => onEdit(el.id)}
          timeFromAdded={el.timeFromAdded}
          timeTimer={el.timeTimer}
        />
        {el.classItem === 'editing' ? (
          <form onSubmit={this.onEditEnd}>
            <input
              type="text"
              className="edit"
              onChange={this.onValue}
              value={label}
              defaultValue={el.description}
              id={el.id}
            />
          </form>
        ) : (
          ''
        )}
      </li>
    ))

    return <ul className="todo-list">{listItems}</ul>
  }
}

TaskList.propTypes = {
  dataTodo: PropTypes.instanceOf(Array).isRequired,
}
