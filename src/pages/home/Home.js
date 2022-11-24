import React, { useEffect } from "react";
import "./home.scss";
import aboutImage from "../../components/images/j__bg.jpg";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";
import Newsletter from "../../components/newsletter/Newsletter";
import { Helmet } from "react-helmet";
import { data } from "../../data/nowselling";
import { useDispatch } from "react-redux";
import { active } from "../../redux/navbarSlice";

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
        <title> Home - City Villa Real Estate</title>
      </Helmet>
      <Hero />
      <div className="about">
        <div className="about__image">
          <img src={aboutImage} alt="" />
        </div>
        <div className="content">
          <div className="content__title">
            About <span>Us</span>
          </div>
          <div className="content__body">
            <p>
              City Villa Real Estate is a Nigerian real estate development firm
              We offer extraordinary high-quality projects that add value to our
              clients, and we do it while adhering to a corporate culture of
              excellence and trust founded on the idea of respect for human
              values and a commitment to quality delivery We recognize that the
              concept of luxury is developing, and that the definition of luxury
              is changing at a rapid pace. The new luxury isn't about putting on
              a show. As a result, we've been able to preserve the fundamental
              qualities of premium brands: design, style, quality, and
              outstanding infrastructure. Despite this, we have been able to
              provide our clients both high-end and low-cost luxury.
            </p>
            <p>
              We consider ourselves to be industry leaders since we provide our
              clients with homes that are both competitive and reasonable.
            </p>
            <div className="btn btn__primary">
              <a href="/about-us" className="link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nowselling">
        <div className="content">
          <div className="content__title">
            Now <span> Selling</span>
          </div>
          <div className="content__body">
            <Card data={data} />
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
