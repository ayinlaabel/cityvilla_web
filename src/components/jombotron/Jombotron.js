import React from "react";
import "./jombotron.scss";

function Jombotron({ data }) {
  return (
    <div
      className="j__container"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
      url(${data.pageImage})`,
        backgroundSize: "cover",
        backgroundPositionY: -400,
      }}
    >
      <div className="j__content">
        <h2 className="title">
          {data.pageTitle} <span> {data.pageSubTitle}</span>
        </h2>
      </div>
    </div>
  );
}

export default Jombotron;
