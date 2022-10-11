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
            title="mapg"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1660.6463425143004!2d4.23595721884296!3d8.131488555918233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAjilete%20Estate%20Ogbomoso%2C%20Iresa-Apa%20Road%2C%20Ogbomoso%2C%20Oyo%20State!5e0!3m2!1sen!2sng!4v1664895593934!5m2!1sen!2sng"
          ></iframe>
        </div>
        <div className="location">
          <div className="contact">
            <div className="address">
              <div className="header">Location</div>
              <div className="content">
                Ajilete Estate Ogbomoso, Iresa-Apa Road, Ogbomoso, Oyo State.
              </div>
            </div>
            <div className="email">
              <div className="header">Email</div>
              <div className="content">info@cityvilla.com.ng</div>
            </div>
            <div className="phone">
              <div className="header">Phone</div>
              <div className="content">+234 701 111 1463</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
