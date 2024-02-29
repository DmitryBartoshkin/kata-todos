import { Component } from "react";
import TaskFilter from "../task-filter";
import "./footer.css";

export default class Footer extends Component {
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
