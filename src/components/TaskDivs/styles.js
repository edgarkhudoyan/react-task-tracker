import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tasks: {
    width: "300px",
    backgroundColor: "#ebecf0",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "1em",
  },
  task: {
    backgroundColor: "#fff",
    cursor: "pointer",
    margin: "0.75em 0",
    padding: "1em 0",
    textAlign: "center",
    borderRadius: "10px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  priorityLow: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.7rem",
    backgroundColor: "green",
    color: "#fff",
    padding: "0.2rem",
    borderRadius: "5px",
  },

  priorityMedium: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.7rem",
    backgroundColor: "orange",
    color: "#fff",
    padding: "0.2rem",
    borderRadius: "5px",
  },

  priorityHigh: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.7rem",
    backgroundColor: "red",
    color: "#fff",
    padding: "0.2rem",
    borderRadius: "5px",
  },

  doing: {
    border: "1px solid #333",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  },

  done: {
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
  },

  delete: {
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#333",
    color: "white",
    cursor: "pointer",
  },
});
