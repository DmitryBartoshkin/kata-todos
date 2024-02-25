import NewTaskForm from "../new-task-form";
import Footer from "../footer";
import TaskList from "../task-list";
import "./app.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    data: [
      { id: 1, classItem: "", description: "Completed task" },
      { id: 2, classItem: "", description: "Editing task" },
      { id: 3, classItem: "", description: "Active task" },
    ],
  };

  onDone = (id) => {
    const doneEl = this.state.data.map((obj) => {
      if (obj.id === id) {
        obj.classItem = "completed";
      }
      return obj;
    });

    this.setState({
      data: doneEl,
    });
  };

  onDeleted = (id) => {
    const newArr = this.state.data.filter((el) => el.id !== id);

    this.setState({
      data: newArr,
    });
  };

  render() {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            dataTodo={this.state.data}
            onDone={this.onDone}
            deleted={this.onDeleted}
          />
        </section>
        <Footer />
      </>
    );
  }
}
