import React from "react";
import F1MainPic from "../../../../assets/F1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const homePage = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div>
          <button className={classes.button} onClick={homePage}>
            Home
          </button>
          <button className={classes.button} onClick={props.onHideInfo}>
            Info
          </button>
        </div>
        <HeaderCartButton showCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={F1MainPic} alt="F1 Body" />
      </div>
      <div className={classes.text}>
        <h2>
          <em>F1</em> Fake Tickets
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Header;
