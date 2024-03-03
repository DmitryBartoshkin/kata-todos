import { Component } from "react";
import "./new-task-form.css";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  static defaultProps = {
    onAdded: () => {},
  };

  static propTypes = {
    onAdded: PropTypes.func.isRequired,
  };

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
