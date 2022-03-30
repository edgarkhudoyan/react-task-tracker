import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  home: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boards: {
    textDecoration: "none",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
});

const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <h1>Welcome to TaskCentre!</h1>
      <Link to="/boards" className={styles.boards}>
        Go To Boards
      </Link>
    </div>
  );
};

export default Home;
