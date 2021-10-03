import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/homepage">
        <div className={classes.logo}>React Auth</div>
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
