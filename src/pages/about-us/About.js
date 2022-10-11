import React, { useEffect } from "react";
import "./about.scss";
import Jombotron from "../../components/jombotron/Jombotron";
import Card from "../../components/card/Card.js";
import { Helmet } from "react-helmet";
import { teams } from "../../data/teams";
import img from "../../components/images/j__bg.jpg";
import { useDispatch } from "react-redux";
import { active } from "../../redux/navbarSlice";

function About() {
  const dispatch = useDispatch();

  const data = {
    pageTitle: "About",
    pageSubTitle: "Us",
    pageImage: img,
  };
  const navbar = {
    home: "",
    about: "active",
    project: "",
    contact: "",
  };

  useEffect(() => {
    dispatch(active(navbar));
  });

  return (
    <div>
      <Helmet>
        <title>About - City Villa Real Estate</title>
      </Helmet>
      <div>
        <Jombotron data={data} />
        <div className="a">
          <div className="header">
            <div className="divider">
              <div className="empty__divider"></div>
              <div className="divider__content">what we do</div>
              <div className="empty__divider"></div>
            </div>
          </div>
          <div className="xcontent">
            <div className="w">
              <div className="content__header">Property Development</div>
              <div className="content__body">
                Real estate development (RE) is the process of renovating and
                rebuilding properties in order to sell them for a profit. Many
                people make their living from real estate development. Real
                estate development activities require that the owner has capital
                in order to accumulate enough credit to purchase their land and
                property.
              </div>
            </div>
            <div className="w">
              <div className="content__header">Land/Property Sale</div>
              <div className="content__body">
                This site is the simplest way to find the perfect property in
                any city, at the best price. Simply choose the cities you're
                interested in and Boom! will show you all the real estate in
                those cities.
              </div>
            </div>
          </div>
        </div>
        <div className="plan">
          <div className="mission">
            <div className="mission__header">Mission</div>
            <div className="mission__body">
              <p>
                We thrive to provide an efficient and enjoyable real estate
                experience to our customers and clients.
              </p>
            </div>
          </div>
          <div className="vision">
            <div className="vision__header">Vision</div>
            <div className="vision__body">
              <p>Innovative, trustworthy, simple, elegant</p>
            </div>
          </div>
        </div>
        <div className="a">
          <div className="header">
            <div className="divider">
              <div className="empty__divider"></div>
              <div className="divider__content">Our Team</div>
              <div className="empty__divider"></div>
            </div>
          </div>
          <div className="content">
            <Card data={teams} noBtn={"noBtn"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
