import React, { useContext, useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { animation } from "./NavFunction";
import { AuthContext } from "../React-Hooks/context/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div className="navbar-brand navbar-logo " to="/" exact>
        Web Solutions
      </div>
      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div
        className="collapse navbar-collapse display"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ms-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-tachometer-alt"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i className="far fa-address-book"></i>About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/f1" exact>
              <i className="far fa-address-book"></i>F1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={authCtx.isLoggedIn ? "/homepage" : "/auth"}
              exact
            >
              <i className="far fa-address-book"></i>Authentication
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
