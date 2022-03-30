import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  parentDiv: {
    width: "20%",
    height: "auto",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "2rem",
  },
  info: {
    padding: "2em 0.3em",
  },

  img: {
    height: "150px",
    maxWidth: "100%",
  },
  subject: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#777",
  },
  title: {
    display: "inline-block",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0.5em 0",
    textDecoration: "none",
    color: "black",
  },
  description: {
    fontSize: "14px",
  },
});
