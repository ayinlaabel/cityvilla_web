import React from "react";
import "./navbar.scss";
import logo from "../images/logo/cityvilla__logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="City Villa Logo" />
      </div>
      <div className="menu">
        <Link to="/" className="menu__item active">
          Home
        </Link>
        <Link to="/about-us" className="menu__item">
          About us
        </Link>
        <Link to="/" className="menu__item">
          Projects
        </Link>
        <Link to="/" className="menu__item">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;