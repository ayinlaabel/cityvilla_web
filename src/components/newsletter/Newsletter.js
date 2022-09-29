import React from "react";
import "./newsletter.scss";

function Newsletter() {
  return (
    <div className="newsletter__container">
      <div className="title">
        Subscribe to <span>Our Newsletter</span>
      </div>
      <div className="sub__title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti
        id ducimus ipsa officia aspernatur fuga laudantium debitis rerum saepe.
      </div>
      <div className="group__input">
        <div className="input__field">
          <input type="text" name="" id="" placeholder="SUBSCRIBE WITH YOUR EMAIL"/>
        </div>
        <button className="btn__subscribe">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
