import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import Jombotron from "../../components/jombotron/Jombotron";
import coverImage from "../../components/images/bg_contact.jpg";
import { active } from "../../redux/navbarSlice";
import image from "../../components/images/AbujaHouse.jpeg";
import "./gallery.scss";

function Gallery() {
  const dispatch = useDispatch();

  const navbar = {
    home: "",
    about: "",
    project: "",
    contact: "",
    gallery: "active",
    blog: "",
  };

  useEffect(() => {
    dispatch(active(navbar));
  });

  const data = {
    pageTitle: "Gallery",
    pageSubTitle: "",
    pageImage: coverImage,
  };
  return (
    <div>
      <Helmet>
        <title>Gallery - City Villa Real Estate</title>
      </Helmet>
      <Jombotron data={data} />
      <div className="gallery">
        <div className="gallery__card">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
