import { useContext } from "react";
import { TaskContext } from "../TaskContext";
import Todo from "../components/TaskDivs/Todo";
import Doing from "../components/TaskDivs/Doing";
import Done from "../components/TaskDivs/Done";
import AddTask from "../components/AddTask/AddTask";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tasksContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "3em",
  },

  tasks: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "3em",
  },
});

const TaskLists = () => {
  const [tasks, setTasks] = useContext(TaskContext);

  const styles = useStyles();

  return (
    <div className={styles.tasksContainer}>
      <div>
        <AddTask />
      </div>
      <div className={styles.tasks}>
        <Todo />
        <Doing />
        <Done />
      </div>
    </div>
  );
};

export default TaskLists;
