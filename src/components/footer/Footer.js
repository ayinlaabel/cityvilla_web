import React from "react";
import "./footer.scss";
// import logo from "../images/logo/cityvilla__logo.png";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__container">
      {/* <div className="footer__logo">
        <img src={logo} alt="" />
      </div> */}
      {/* <div className="footer__menu">
        <div className="menu">
          <Link to="/" className="menu__item">
            Home
          </Link>
          <Link to="/about-us" className="menu__item">
            About us
          </Link>
          <Link to="/" className="menu__item">
            Project
          </Link>
          <Link to="/" className="menu__item">
            Contact us
          </Link>
        </div>
      </div> */}
      <div className="copyright">
        &copy;copyright 2022 Cityvilla Real estate. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
