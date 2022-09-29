import React from 'react';
import './hero.scss';

function Hero() {
  return (
    <div className="hero">
        <div className="hero__container">
            <div className="content">
                <h2 className="title">We are on a mission</h2>
                <h4 className="sub__title">Changing the way people <span>finds home.</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Hero;