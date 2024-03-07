import { Component } from 'react'
import './task-filter.css'
import PropTypes from 'prop-types'

export default class TaskFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { item: 'All', className: 'selected' },
        { item: 'Active', className: '' },
        { item: 'Completed', className: '' },
      ],
    }
  }

  onToggle = (e) => {
    const btnLabel = e.target.textContent
    const { items } = this.state
    const newArr = items.map((el) => {
      const element = el
      if (element.item === btnLabel) {
        element.className = 'selected'
      } else {
        element.className = ''
      }
      return element
    })

    this.setState({
      items: newArr,
    })

    const { onToggleFilter } = this.props
    onToggleFilter(btnLabel)
  }

  render() {
    const { items } = this.state
    const allItems = {
      all: items.find((el) => el.item === 'All'),
      active: items.find((el) => el.item === 'Active'),
      completed: items.find((el) => el.item === 'Completed'),
    }

    return (
      <ul className="filters">
        <li>
          <button type="button" className={allItems.all.className} onClick={this.onToggle}>
            All
          </button>
        </li>
        <li>
          <button type="button" className={allItems.active.className} onClick={this.onToggle}>
            Active
          </button>
        </li>
        <li>
          <button type="button" className={allItems.completed.className} onClick={this.onToggle}>
            Completed
          </button>
        </li>
      </ul>
    )
  }
}

TaskFilter.defaultProps = {
  onToggleFilter: () => {},
}

TaskFilter.propTypes = {
  onToggleFilter: PropTypes.func,
}
