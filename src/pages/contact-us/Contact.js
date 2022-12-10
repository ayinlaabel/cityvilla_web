import React, { useEffect } from "react";
import "./contact.scss";
import { Helmet } from "react-helmet";
import Jombotron from "../../components/jombotron/Jombotron";
import coverImage from "../../components/images/bg_contact.jpg";
import { useDispatch } from "react-redux";
import { active } from "../../redux/navbarSlice";

function Contact() {
  const dispatch = useDispatch();

  const navbar = {
    home: "",
    about: "",
    project: "",
    contact: "active",
  };

  useEffect(() => {
    dispatch(active(navbar));
  });

  const data = {
    pageTitle: "Contact",
    pageSubTitle: "Us",
    pageImage: coverImage,
  };
  return (
    <div>
      <Helmet>
        <title>Contact - City Villa Real Estate</title>
      </Helmet>
      <Jombotron data={data} />
      <div className="map">
        <div className="header">
          <div className="divider">
            <div className="empty__divider"></div>
            <div className="divider__content">Find us</div>
            <div className="empty__divider"></div>
          </div>
        </div>
        <div className="contact-us">
        Thank you for your interest in working with <strong>CITY VILLA</strong>. We look forward to receiving your information.
        </div>
        <div className="map__content">
        <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252793.4706045241!2d3.9883897328125!3d8.111869899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d7ee27da055%3A0xc7bf746136ffe628!2sCity%20Villa%20Homes!5e0!3m2!1sen!2sng!4v1670711497858!5m2!1sen!2sng"></iframe>
        </div>
        <div className="location">
          <div className="contact">
            <div className="address">
              <div className="header">Location</div>
              <div className="content">
                City Villa Homes
              </div>
            </div>
            <div className="email">
              <div className="header">Email</div>
              <div className="content"> cityvillainfo@gmail.com</div>
            </div>
            <div className="phone">
              <div className="header">Phone</div>
              <div className="content">+234 701 111 1463</div>
              <div className="content">+234 701 111 1493</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
