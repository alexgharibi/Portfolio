import React from "react";
import F1MainPic from "../../../../assets/F1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>
          <em>F1</em> Fake Tickets
        </h2>
        <HeaderCartButton showCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={F1MainPic} alt="F1 Body" />
      </div>
    </React.Fragment>
  );
};

export default Header;
