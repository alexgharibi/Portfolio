import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { useHistory } from "react-router-dom";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.push("/");
  };

  return (
    <header className={classes.header}>
      <Link to="/homepage">
        <div className={classes.logo}>Auth.test</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/homepage">Ingredients</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
