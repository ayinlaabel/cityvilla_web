import React from "react";
import "./card.scss";

function Card({ data, noBtn }) {
  console.log(data);
  return (
    <div className="card__container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div
            className="card__image"
            style={{
              background: `url(${item.image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="card__content">
            <div className="card__title">{item.title}</div>
            <div className="card__title-sub">{item.location}</div>
            {!noBtn && <button className="btn btn__primary">Check out</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
