import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import Jombotron from "../../components/jombotron/Jombotron";
import coverImage from "../../components/images/bg_contact.jpg";
import { active } from "../../redux/navbarSlice";
// import image from "../../components/images/AbujaHouse.jpeg";
import "./gallery.scss";
import { galleryImage } from "../../data/images";
import { useState } from "react";

function Gallery() {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState("");

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
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={isActive === "" ? "tabs-item active" : "tabs-item"}
            onClick={() => setIsActive("")}
          >
            All
          </div>
          <div
            className={
              isActive === "ongoing" ? "tabs-item active" : "tabs-item"
            }
            onClick={() => setIsActive("ongoing")}
          >
            Ongoing
          </div>
          <div
            className={
              isActive === "prototype" ? "tabs-item active" : "tabs-item"
            }
            onClick={() => setIsActive("prototype")}
          >
            Prototype
          </div>
          <div
            className={
              isActive === "complete" ? "tabs-item active" : "tabs-item"
            }
            onClick={() => setIsActive("complete")}
          >
            Complete
          </div>
        </div>
      </div>
      <div className="gallery">
        {galleryImage
          .filter((x) => x.tag.toLowerCase().includes(isActive.toLowerCase()))
          .map((image) => {
            return (
              <div className="gallery__card" key={image.id}>
                <img src={process.env.PUBLIC_URL + image.url} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Gallery;
