import NewTaskForm from "../new-task-form";
import Footer from "../footer";
import TaskList from "../task-list";
import "./app.css";
import { Component } from "react";
import { formatDistanceToNow } from "date-fns";

export default class App extends Component {
  state = {
    data: [],
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

  onClearDone = () => {
    const activeItems = this.state.data.filter(
      (el) => el.classItem !== "completed"
    );

    this.setState({
      data: activeItems,
    });
  };

  onDeleted = (id) => {
    const newArr = this.state.data.filter((el) => el.id !== id);

    this.setState({
      data: newArr,
    });
  };

  onAdded = (description) => {
    const randomNum = Math.floor(Math.random() * 10000);

    const newItem = {
      id: randomNum,
      classItem: "",
      description: description,
      hidden: "",
      timeAdded: new Date(),
      timeFromAdded: "",
    };

    const newArr = this.state.data.concat(newItem);
    newArr.forEach(
      (el) =>
        (el.timeFromAdded = formatDistanceToNow(el.timeAdded, {
          includeSeconds: true,
        }))
    );

    this.setState({
      data: newArr,
    });
  };

  onToggleFilter = (status) => {
    let newArr = this.state.data.map((el) => {
      el.hidden = "";
      return el;
    });

    if (status === "Active") {
      newArr = this.state.data.map((el) => {
        if (el.classItem === "completed") {
          el.hidden = "hidden";
        }
        return el;
      });
    } else if (status === "Completed") {
      newArr = this.state.data.map((el) => {
        if (el.classItem !== "completed") {
          el.hidden = "hidden";
        }
        return el;
      });
    }

    this.setState({
      data: newArr,
    });
  };

  render() {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAdded={this.onAdded} />
        </header>
        <section className="main">
          <TaskList
            dataTodo={this.state.data}
            onDone={this.onDone}
            deleted={this.onDeleted}
          />
        </section>
        <Footer
          onClearDone={this.onClearDone}
          numItemsLeft={
            this.state.data.filter((el) => el.classItem !== "completed").length
          }
          onToggleFilter={this.onToggleFilter}
        />
      </>
    );
  }
}
