import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Done = ({ status }) => {
  const styles = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);
  return (
    <div className={styles.tasks}>
      <h2>Done</h2>
      {tasks.map((task) =>
        task.status === status ? (
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
              <button className={styles.delete}>
                <FontAwesomeIcon icon={faTrash} />
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
