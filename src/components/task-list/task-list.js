import { Component } from "react";
import Task from "../task";
import "./task-list.css";

export default class TaskList extends Component {
  render() {
    const { dataTodo, onDone, deleted } = this.props;
    const listItems = dataTodo.map((el) => {
      return (
        <li className={el.classItem} key={el.id}>
          <Task
            description={el.description}
            onDone={() => onDone(el.id)}
            deleted={() => deleted(el.id)}
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
