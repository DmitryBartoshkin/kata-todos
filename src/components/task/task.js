import { Component } from "react";
import "./task.css";
import PropTypes from "prop-types";

export default class Task extends Component {
  static defaulProps = {
    description: "Default Task",
    onDone: () => {},
    deleted: () => {},
    timeFromAdded: "some seconds",
  };

  static propTypes = {
    description: PropTypes.string,
    onDone: PropTypes.func,
    delete: PropTypes.func,
    timeFromAdded: PropTypes.string,
  };

  render() {
    const { description, onDone, deleted, timeFromAdded } = this.props;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onDone} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created ≈ {timeFromAdded} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={deleted}></button>
      </div>
    );
  }
}
