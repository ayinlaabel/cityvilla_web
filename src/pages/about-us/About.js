import React from "react";
import "./about.scss";
import Jombotron from "../../components/jombotron/Jombotron";
import Card from "../../components/card/Card.js";

function About() {

  return (
    <div>
      <Jombotron />
      <div className="a">
        <div className="header">
          <div className="divider">
            <div className="empty__divider"></div>
            <div className="divider__content">what we do</div>
            <div className="empty__divider"></div>
          </div>
        </div>
        <div className="xcontent">
          <div className="w">
            <div className="content__header">Property Development</div>
            <div className="content__body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore a consequatur maiores placeat quas veritatis corrupti
              laboriosam natus mollitia itaque?
            </div>
          </div>
          <div className="w">
            <div className="content__header">Land/Property Sale</div>
            <div className="content__body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore a consequatur maiores placeat quas veritatis corrupti
              laboriosam natus mollitia itaque?
            </div>
          </div>
        </div>
      </div>
      <div className="plan">
        <div className="mission">
          <div className="mission__header">Mission</div>
          <div className="mission__body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            voluptate laudantium! Hic consequuntur, quidem est nesciunt unde
            quisquam! Voluptatem, veritatis!
          </div>
        </div>
        <div className="vision">
          <div className="vision__header">Vision</div>
          <div className="vision__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            distinctio iusto cupiditate inventore consectetur praesentium animi
            error dolor dicta possimus.
          </div>
        </div>
      </div>
      <div className="a">
        <div className="header">
          <div className="divider">
            <div className="empty__divider"></div>
            <div className="divider__content">Our Team</div>
            <div className="empty__divider"></div>
          </div>
        </div>
        <div className="content">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default About;
