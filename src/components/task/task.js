import { Component } from "react";
import "./task.css";

export default class Task extends Component {
  render() {
    const { description, onDone, deleted } = this.props;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onDone} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={deleted}></button>
      </div>
    );
  }
}
