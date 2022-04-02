import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  formGroup: {
    height: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
  },

  input: {
    padding: "0.3em 0",
    width: "200px",
    margin: "0.5em 0",
    textAlign: "start",
    "&:focus": {
      outline: "none",
    },
  },

  button: {
    display: "inline-block",
    background: "transparent",
    border: "2px solid #23d972",
    padding: "0.5em 1em",
    cursor: "pointer",
    textDecoration: "none",
    color: "#333",
    "&:hover": {
      backgroundColor: "#23d972",
      color: "#fff",
    },
  },
});

const Login = () => {
  const styles = useStyles();

  return (
    <div className={styles.formGroup}>
      <h2>Log In</h2>
      <form className={styles.formGroup}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Email or username"
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <Link to="/" className={styles.button} type="submit">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
