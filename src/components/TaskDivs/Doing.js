import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Doing = () => {
  const styles = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);

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
      <h2>Doing</h2>
      {tasks.map((task) =>
        task.status === "doing" ? (
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

export default Doing;
