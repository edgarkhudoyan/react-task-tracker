import JSBoard from "../components/Boards/JSBoard";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  boards: {
    height: "90vh",
  },
});

const Boards = () => {
  const styles = useStyles();

  return (
    <div className={styles.boards}>
      <JSBoard />
    </div>
  );
};

export default Boards;
