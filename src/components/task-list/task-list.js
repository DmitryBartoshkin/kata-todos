import Task from "../task";
import "./task-list.css";

function TaskList({ dataTodo }) {
  const listItems = dataTodo.map((el) => {
    return (
      <li className={el.classItem} key={el.id}>
        <Task description={el.description} />
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

export default TaskList;
