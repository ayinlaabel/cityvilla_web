import React, { useRef } from "react";
import "./navbar.scss";
import logo from "../images/logo/cityvilla__logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  const isActive = useSelector((state) => state.navbar);

  console.log(isActive);

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
    <nav className="container">
      <div className="desktop__menu">
        <div className="logo">
          <img src={logo} alt="City Villa Logo" />
        </div>
        <ul className="menu">
          <li className="menu__item">
            <a href="/" className={"menu__link " + isActive.home}>
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="/about-us" className={"menu__link " + isActive.about}>
              About us
            </a>
          </li>
          <li className="menu__item">
            <a href="/projects" className={"menu__link " + isActive.project}>
              Projects
            </a>
          </li>
          <li className="menu__item">
            <a href="/contact-us" className={"menu__link " + isActive.contact}>
              Contact us
            </a>
          </li>
          <li className="menu__item">
            <a href="/gallery" className={"menu__link " + isActive.gallery}>
              Gallery
            </a>
          </li>
          <li className="menu__item">
            <a href="/contact-us" className={"menu__link " + isActive.blog}>
              Blog
            </a>
          </li>
        </ul>
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
          <a href="/" className={"menu__item " + isActive.home}>
            Home
          </a>
          <a href="/about-us" className={"menu__item " + isActive.about}>
            About us
          </a>
          <a href="/projects" className={"menu__item " + isActive.project}>
            Projects
          </a>
          <a href="/contact-us" className={"menu__item " + isActive.contact}>
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
