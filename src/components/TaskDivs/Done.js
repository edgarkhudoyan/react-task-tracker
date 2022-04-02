import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Done = () => {
  const styles = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);

  const deleteTask = (e) => {
    setTasks(tasks.filter((task) => task.id !== e.target.id));
  };

  return (
    <div className={styles.tasks}>
      <h2>Done</h2>
      {tasks.map((task) =>
        task.status === "done" ? (
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
                onClick={deleteTask}
                className={styles.delete}
              >
                Delete
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

export default Done;
