import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const styles = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);

  return (
    <div className={styles.tasks}>
      <h2>To Do</h2>
      {tasks.map((task) =>
        task.status === "todo" ? (
          <div key={task.id} className={styles.task}>
            <h3> {task.title}</h3>
            <p> {task.description}</p>
            <div className={styles.buttons}>
              <button className={styles.doing}>
                <FontAwesomeIcon icon={faBarsProgress} />
              </button>
              <button className={styles.delete}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className={styles.done}>
                <FontAwesomeIcon icon={faCheck} />
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
