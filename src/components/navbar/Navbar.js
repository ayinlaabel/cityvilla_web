import React, { useRef } from "react";
import "./navbar.scss";
import logo from "../images/logo/cityvilla__logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const ref = useRef(null);
  let menuOpen = false;

  const handleMenu = () => {
    const btnLine = document.querySelectorAll(".btn__line");
    if (menuOpen === false) {
      console.log(ref.current);
      document.querySelector(".menu_m").classList.add("show");
      document.querySelector(".menu__btn").classList.add("show");
      document.querySelector(".mobile__menu").classList.add("show");
      btnLine.forEach((item) => {
        item.classList.add("show");
      });
      menuOpen = true;
    } else {
      console.log(ref.current);
      document.querySelector(".menu_m").classList.remove("show");
      document.querySelector(".menu__btn").classList.remove("show");
      document.querySelector(".mobile__menu").classList.remove("show");
      btnLine.forEach((item) => {
        item.classList.remove("show");
      });

      menuOpen = false;
    }
  };
  return (
    <div className="container">
      <div className="desktop__menu">
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
      <div ref={ref} className="mobile__menu">
        <div className="logo">
          <img src={logo} alt="City Villa Logo" />
        </div>
        <div ref={ref} className="menu__btn" onClick={handleMenu}>
          <div ref={ref} className="btn__line"></div>
          <div ref={ref} className="btn__line"></div>
          <div ref={ref} className="btn__line"></div>
        </div>
        <div ref={ref} className="menu_m">
          <a href="/" className="menu__item active">
            Home
          </a>
          <a href="/about-us" className="menu__item">
            About us
          </a>
          <a href="/" className="menu__item">
            Projects
          </a>
          <a href="/" className="menu__item">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
