import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import JSImage from "../../images/JSImage.jpeg";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const JSBoard = () => {
  const styles = useStyles();

  const [tasks, setTasks] = useContext(TaskContext);

  return (
    <div className={styles.parentDiv}>
      <div>
        <Link to="/boards/js">
          <img className={styles.img} src={JSImage} alt="" />
        </Link>
      </div>
      <div className={styles.info}>
        <div>
          <span className={styles.subject}>PROJECT MANAGEMENT</span>
        </div>
        <div>
          <Link to="/boards/js" className={styles.title}>
            JavaScript and React
          </Link>
        </div>
        <div>
          <p className={styles.description}>
            This element contains problems to improve programming skills, you
            can add, edit or delete tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default JSBoard;
