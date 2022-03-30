import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";

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
            <div>
              <button>Set as Doing</button>
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

export default Todo;
