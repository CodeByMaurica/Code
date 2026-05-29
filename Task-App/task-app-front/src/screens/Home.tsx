import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/ltm-logo.png";

type Status = "todo" | "doing" | "done";
type Filter = "all" | Status;

interface Task {
  id: number;
  title: string;
  status: Status;
}

interface HomeProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ setIsLoggedIn }: HomeProps) {
  const navigate = useNavigate();

  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Build Login Page", status: "todo" },
    { id: 2, title: "Design Home Dashboard", status: "doing" },
    { id: 3, title: "Finish Task App", status: "done" },
  ]);

  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: taskInput,
      status: "todo",
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task;

        const nextStatus =
          task.status === "todo"
            ? "doing"
            : task.status === "doing"
            ? "done"
            : "todo";

        return { ...task, status: nextStatus };
      })
    );
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div className="home">
      <div className="home-container">
        <header className="home-header">
  <div className="logo-section">
    <img
      src={logo}
      alt="LTM Task Manager Logo"
      className="logo"
    />
  </div>
 
  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>
</header>

        <section className="task-input-section">
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </section>

        <section className="filters">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active" : ""}
          >
            [ALL]
          </button>

          <button
            onClick={() => setFilter("todo")}
            className={filter === "todo" ? "active" : ""}
          >
            [TODO]
          </button>

          <button
            onClick={() => setFilter("doing")}
            className={filter === "doing" ? "active" : ""}
          >
            [DOING]
          </button>

          <button
            onClick={() => setFilter("done")}
            className={filter === "done" ? "active" : ""}
          >
            [DONE]
          </button>
        </section>

        <section className="task-list">
          {filteredTasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div className="task-left">
                <button
                  className={`task-icon ${task.status}`}
                  onClick={() => changeStatus(task.id)}
                />

                <div>
                  <h3>{task.title}</h3>
                  <p>Click circle to change status</p>
                </div>
              </div>

              <div className="task-right">
                <span className={`status-badge ${task.status}`}>
                  {task.status.toUpperCase()}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;