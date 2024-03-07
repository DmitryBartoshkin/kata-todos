import { Component } from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../task-filter'
import './footer.css'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { onClearDone, numItemsLeft, onToggleFilter } = this.props

    return (
      <footer className="footer">
        <span className="todo-count">{numItemsLeft} items left</span>
        <TaskFilter onToggleFilter={onToggleFilter} />
        <button type="button" className="clear-completed" onClick={() => onClearDone()}>
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.defaultProps = {
  numItemsLeft: 0,
}

Footer.propTypes = {
  numItemsLeft: PropTypes.number,
  onClearDone: PropTypes.func.isRequired,
}
