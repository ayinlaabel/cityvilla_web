import React, { useEffect } from "react";
import "./home.scss";
import aboutImage from "../../components/images/j__bg.jpg";
import Newsletter from "../../components/newsletter/Newsletter";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { active } from "../../redux/navbarSlice";
import cityvillaVideo from "../../components/videos/cityvilla_video.mp4";
import abujaHouse from "./../../components/images/AbujaHouse.jpeg";
import oyoHouse from "./../../components/images/OyoHouse.jpeg";

function Home() {
  const dispatch = useDispatch();

  const navbar = {
    home: "active",
    about: "",
    project: "",
    contact: "",
  };

  useEffect(() => {
    dispatch(active(navbar));
  });
  return (
    <div>
      <Helmet>
        <title>Real Estate in Nigeria || City Villa Real Estate</title>
      </Helmet>
      <div className="w-full md:h-[80vh] overflow-hidden">
        <video loop autoPlay={true} muted className="w-full">
          <source src={cityvillaVideo} type="video/mp4" className="" />
        </video>
      </div>
      <div className="flex md:flex-row-reverse flex-col-reverse w-full md:h-[30rem] md:px-[7rem] py-[3rem]">
        <div className="flex-auto md:w-[8rem] m-4 rounded-lg h-full flex justify-center items-center">
          <img src={aboutImage} alt="" className="rounded-lg h-full" />
        </div>
        <div className="flex-auto md:w-[20rem] md:p-7 px-4 h-fit">
          <div className="text-[40px] uppercase font-bold">
            About <span className="text-[40px] ">Us</span>
          </div>
          <div className="text-[14px]">
            <p className="text-[14px] text-[#74757f]">
              <span className="uppercase font-medium">
                City Villa Real Estate
              </span>{" "}
              is a Nigerian real estate development firm We offer extraordinary
              high-quality projects that add value to our clients, and we do it
              while adhering to a corporate culture of excellence and trust
              founded on the idea of respect for human values and a commitment
              to quality delivery We recognize that the concept of luxury is
              developing, and that the definition of luxury is changing at a
              rapid pace. The new luxury isn't about putting on a show. As a
              result, we've been able to preserve the fundamental qualities of
              premium brands: design, style, quality, and outstanding
              infrastructure. Despite this, we have been able to provide our
              clients both high-end and low-cost luxury.
            </p>
            <p className="text-[14px] text-[#74757f]">
              We consider ourselves to be industry leaders since we provide our
              clients with homes that are both competitive and reasonable.
            </p>
          </div>
        </div>
      </div>
      <div className="md:h-[15rem] w-full bg-[#010e00] md:px-[3rem] py-3">
        <div className="flex md:flex-row flex-col w-full h-full md:items-center md:justify-center ">
          <div className="group text-[#fff] flex items-center md:justify-center flex-1  hover:cursor-pointer">
            <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center group-hover:border-2 group-hover:rounded-full">
              <i className="fa-solid fa-home text-[1.5rem] md:text-[2rem]"></i>
            </div>
            <div className="px-4 hover:cursor-pointer">
              <p className="text-[18px] md:text-[25px] group-hover:text-[#fbb000] group-hover:font-medium">
                Real Estate
              </p>
            </div>
          </div>
          <div className="group text-[#fff] flex items-center md:justify-center flex-1  hover:cursor-pointer">
            <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center group-hover:border-2 group-hover:rounded-full">
              <i className="fa-solid fa-briefcase text-[2rem]"></i>
            </div>
            <div className="px-4 hover:cursor-pointer">
              <p className="text-[18px] md:text-[25px] group-hover:text-[#fbb000] group-hover:font-medium">
                Investment
              </p>
            </div>
          </div>
          <div className="group text-[#fff] flex items-center md:justify-center flex-1  hover:cursor-pointer">
            <div className="flex-none w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] flex items-center justify-center group-hover:border-2 group-hover:rounded-full">
              <i className="fa-solid fa-tools text-[2rem]"></i>
            </div>
            <div className="px-4 hover:cursor-pointer">
              <p className="text-[18px] md:text-[25px] group-hover:text-[#fbb000] group-hover:font-medium">
                Renovation, Remodeling and Restoration Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center justify-center">
        <div className="flex md:flex-row flex-col">
          <div className="p-5 ">
            <div className="md:w-[30rem] md:h-[20rem] w-full h-[20rem] overflow-hidden">
              <img src={abujaHouse} alt="" />
            </div>
            <div className="py-2">
              <h2 className="px-4 text-[20px] font-medium">
                House for Sale in Abuja
              </h2>

              <div className="flex divide-x divide-solid py-2">
                <p className="px-2 md:px-4 font-medium">300 Sq. Mt.</p>
                <p className="px-2 md:px-4 font-medium">3 Bedrooms</p>
                <p className="px-2 md:px-4 font-medium">Car Park Available</p>
              </div>
            </div>
          </div>
          <div className="p-5 ">
            <div className="md:w-[30rem] md:h-[20rem] w-full h-[20rem] overflow-hidden">
              <img
                src={oyoHouse}
                alt=""
                resizeMode="cover"
                className="w-full h-full"
              />
            </div>
            <div className="py-2">
              <h2 className="px-4 text-[20px] font-medium">
                House for Sale in Oyo
              </h2>

              <div className="flex divide-x divide-solid py-2">
                <p className="px-4 font-medium">300 Sq. Mt.</p>
                <p className="px-4 font-medium">3 Bedrooms</p>
                <p className="px-4 font-medium">Car Park Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
