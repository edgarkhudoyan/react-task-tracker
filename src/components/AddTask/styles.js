import { hover } from "@testing-library/user-event/dist/hover";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  addTask: {
    padding: "0.75em 0.5em",
    background: "transparent",
    border: "1px solid #333",
    cursor: "pointer",
    borderRadius: "3px",
    "&:hover": {
      background: "#333",
      color: "white",
    },
  },

  addTodo: {
    padding: "0.75em 0.5em",
    background: "transparent",
    border: "1px solid #333",
    cursor: "pointer",
    borderRadius: "3px",
    "&:hover": {
      background: "green",
      border: "none",
      color: "white",
    },
  },

  form: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    border: "1px solid #333",
    borderRadius: "5px",
    margin: "1em 0.5em",
    padding: "1em 3em",
    background: "transparent",
    "&:focus": {
      outline: "none",
    },
  },
});
