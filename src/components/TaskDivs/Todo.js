import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";

const Todo = () => {
  const styles = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);

  const setDoingHandler = (e) => {
    tasks.map((task) => {
      if (task.id === e.target.id) {
        return setTasks([...tasks, (task.status = "doing")]);
      }
    });
  };

  const setDoneHandler = (e) => {
    tasks.map((task) => {
      if (task.id === e.target.id) {
        return setTasks([...tasks, (task.status = "done")]);
      }
    });
  };

  const deleteTask = (e) => {
    setTasks(tasks.filter((task) => task.id !== e.target.id));
  };

  return (
    <div className={styles.tasks}>
      <h2>To Do</h2>
      {tasks.map((task) =>
        task.status === "todo" ? (
          <div key={task.id} className={styles.task}>
            <span
              className={
                task.priority === "low"
                  ? styles.priorityLow
                  : task.priority === "medium"
                  ? styles.priorityMedium
                  : task.priority === "high"
                  ? styles.priorityHigh
                  : ""
              }
            >
              {task.priority}
            </span>
            <div>
              <h3> {task.title}</h3>
              <p> {task.description}</p>
            </div>
            <div className={styles.buttons}>
              <button
                id={task.id}
                onClick={setDoingHandler}
                className={styles.doing}
              >
                Doing
              </button>
              <button
                id={task.id}
                className={styles.delete}
                onClick={deleteTask}
              >
                Delete
              </button>
              <button
                id={task.id}
                className={styles.done}
                onClick={setDoneHandler}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Todo;
