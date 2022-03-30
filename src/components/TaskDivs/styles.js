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
});
