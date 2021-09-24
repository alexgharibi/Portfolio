import React from "react";
import logo from "../../image/bbbb.jpeg";
import Navbar from "../NavBar/NavBar";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.background}>
        <div>hellooo</div>
        <footer>Helloo</footer>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
