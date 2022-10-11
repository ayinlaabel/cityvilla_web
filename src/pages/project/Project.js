import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { active } from "../../redux/navbarSlice";
import "./project.scss";
function Project() {
  const dispatch = useDispatch();

  const navbar = {
    home: "",
    about: "",
    project: "active",
    contact: "",
  };

  useEffect(() => {
    dispatch(active(navbar));
  });

  return (
    <div>
      <div className="project">
        <div className="project__header">
          <h2 className="project__header--h2">City Villa Real Estate</h2>
          <p>
            Browse through our various projects we have completed over a number
            of years and find inspiration to create your own dream home.
          </p>
        </div>
        <div className="project__service">
          <div className="service__card card-1">
            <div className="service__card-title">Serviced Plot</div>
          </div>
          <div className="service__card card-2">
            <div className="service__card-title">Houses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
