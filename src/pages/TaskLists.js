import Todo from "../components/TaskDivs/Todo";
import Doing from "../components/TaskDivs/Doing";
import Done from "../components/TaskDivs/Done";
import AddTask from "../components/AddTask/AddTask";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tasks: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "3em",
  },
});

const TaskLists = () => {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.tasks}>
        <Todo />
        <Doing />
        <Done />
        <AddTask />
      </div>
    </div>
  );
};

export default TaskLists;
