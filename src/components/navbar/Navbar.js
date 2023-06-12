import React, { useRef } from "react";
import logo from "../images/logo/cityvilla__logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  const isActive = useSelector((state) => state.navbar);

  console.log(isActive);

  const ref = useRef(null);
  let menuOpen = false;

// eslint-disable-next-line
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
    <nav className="">
      <div className="w-full md:h-[10rem] h-[5rem] bg-[#010e00] md:bg-gradient-to-r from-[#fff] from-[20rem] to-[20rem] to-[#010e00] flex">
        <div className="md:w-[20rem] w-[15rem] flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex ">
          <div className="p-4 flex items-center h-full">
            <div className="w-[60px] h-[60px] text-[#fff]  rounded-full border-[#fff] border-2 flex items-center justify-center mr-4">
              <i className="fa-solid fa-phone text-[20px]"></i>
            </div>
            <div className="text-[#fff]">
              <div>+234 801 234 5678</div>
              <div>+234 801 234 5678</div>
            </div>
          </div>
          <div className="p-4 flex items-center h-full">
            <div className="w-[60px] h-[60px] text-[#fff]  rounded-full border-[#fff] border-2 flex items-center justify-center mr-4">
              <i className="fa-solid fa-location-dot text-[20px]"></i>
            </div>
            <div className="text-[#fff]">
              <div>+234 801 234 5678</div>
              <div>+234 801 234 5678</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex bg-[#fbb000] w-full md:h-[80px] h-[0px] transition-all ease-in-out">
        <ul className="flex items-center h-full text-[20px] px-9 text-[#fff]">
          <li className="px-4 hover:cursor-pointer">Home</li>
          <li className="px-4">Projects</li>
          <li className="px-4">About Us</li>
          <li className="px-4">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
