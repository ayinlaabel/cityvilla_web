import React from "react";
import "./card.scss";
import image from "../images/House-1.jpg";

function Card() {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      ></div>
      <div className="card__content">
        <div className="card__title">Lorem, ipsum dolor.</div>
        <div className="card__title-sub">Lagos, Nigeria</div>
        <button className="btn btn__primary">Check out</button>
      </div>
    </div>
  );
}

export default Card;
