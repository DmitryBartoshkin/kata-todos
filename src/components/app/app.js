import NewTaskForm from "../new-task-form";
import Footer from "../footer";
import TaskList from "../task-list";
import "./app.css";

function App() {
  const data = [
    { id: 1, classItem: "completed", description: "Completed task" },
    { id: 2, classItem: "editing", description: "Editing task" },
    { id: 3, classItem: "", description: "Active task" },
  ];

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList dataTodo={data} />
      </section>
      <Footer />
    </>
  );
}

export default App;
