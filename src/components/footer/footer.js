import { Component } from "react";
import TaskFilter from "../task-filter";
import "./footer.css";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static defaultProps = {
    numItemsLeft: 0,
    onClearDone: () => {},
  };

  static propTypes = {
    numItemsLeft: PropTypes.number.isRequired,
    onClearDone: PropTypes.func.isRequired,
  };

  render() {
    const { onClearDone, numItemsLeft, onToggleFilter } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{numItemsLeft} items left</span>
        <TaskFilter onToggleFilter={onToggleFilter} />
        <button className="clear-completed" onClick={() => onClearDone()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
