import { Component } from "react";
import "./new-task-form.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  onLabel = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabel}
          value={this.state.label}
        />
      </form>
    );
  }
}
