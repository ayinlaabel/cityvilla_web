import React from "react";
import Typewriter from "typewriter-effect";
import "./hero.scss";

function Hero() {
  
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="content">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 75
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('We build the <span>imagination.</span>')
              .pauseFor(1000)
              .deleteAll()
              .typeString('<span>you live</span> in it.')
              .pauseFor(1000)
              .start();
          }}
        />
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
