import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  nav: {
    borderBottom: "1px solid #ccc",
  },

  navItems: {
    width: "80%",
    height: "10vh",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    textDecoration: "none",
    color: "#222",
    fontSize: "2rem",
    fontWeight: "bold",
    background: "transparent",
    padding: "0.5rem",
    cursor: "pointer",
  },

  login: {
    textDecoration: "none",
    fontWeight: "bold",
  },
});
