import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const Nav = () => {
  const styles = useStyles();
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <Link to="/" className={styles.logo}>
          TaskCentre
        </Link>
        <Link to="/login" className={styles.login}>
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
