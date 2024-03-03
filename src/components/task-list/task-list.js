import { Component } from "react";
import Task from "../task";
import "./task-list.css";
import PropTypes from "prop-types";

export default class TaskList extends Component {
  static defaulProps = {
    dataTodo: [],
  };

  static propTypes = {
    dataTodo: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { dataTodo, onDone, deleted } = this.props;
    const listItems = dataTodo.map((el) => {
      return (
        <li className={el.classItem} key={el.id} hidden={el.hidden}>
          <Task
            description={el.description}
            onDone={() => onDone(el.id)}
            deleted={() => deleted(el.id)}
            timeFromAdded={el.timeFromAdded}
          />
          {el.classItem === "editing" ? (
            <input type="text" className="edit" defaultValue="Editing task" />
          ) : (
            ""
          )}
        </li>
      );
    });

    return <ul className="todo-list">{listItems}</ul>;
  }
}
