import { Component } from "react";
import "./task-filter.css";

export default class TaskFilter extends Component {
  state = {
    items: [
      { item: "All", className: "selected" },
      { item: "Active", className: "" },
      { item: "Completed", className: "" },
    ],
  };

  onToggle = (e) => {
    const btnLabel = e.target.textContent;
    const newArr = this.state.items.map((el) => {
      el.item === btnLabel ? (el.className = "selected") : (el.className = "");
      return el;
    });

    this.setState({
      items: newArr,
    });

    this.props.onToggleFilter(btnLabel);
  };

  render() {
    const allItems = {
      all: this.state.items.find((el) => el.item === "All"),
      active: this.state.items.find((el) => el.item === "Active"),
      completed: this.state.items.find((el) => el.item === "Completed"),
    };

    return (
      <ul className="filters">
        <li>
          <button className={allItems.all.className} onClick={this.onToggle}>
            All
          </button>
        </li>
        <li>
          <button className={allItems.active.className} onClick={this.onToggle}>
            Active
          </button>
        </li>
        <li>
          <button
            className={allItems.completed.className}
            onClick={this.onToggle}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
