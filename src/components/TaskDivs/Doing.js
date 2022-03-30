import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";

const Doing = () => {
  const styles = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);
  return (
    <div className={styles.tasks}>
      <h2>Doing</h2>
      {tasks.map((task) =>
        task.status === "doing" ? (
          <div className={styles.task}>
            <h3> {task.title}</h3>
            <p> {task.description}</p>
            <div>
              <button>Set as Todo</button>
              <button>Delete</button>
              <button>Set as Done</button>
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
