import React, { useEffect } from "react";
import "./home.scss";
import aboutImage from "../../components/images/j__bg.jpg";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";
import Newsletter from "../../components/newsletter/Newsletter";
const reload = () => {
  window.location.reload();
};

function Home() {
 

  return (
    <div>
      <Hero />
      <div className="about">
        <div className="about__image">
          <img src={aboutImage} alt="" />
        </div>
        <div className="content">
          <div className="content__title">
            About <span>Us</span>
          </div>
          <div className="content__body">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              suscipit repudiandae quos natus, quo quibusdam asperiores dolore
              aspernatur doloribus, maxime necessitatibus quas minus! Sapiente
              similique quas nam quo nemo. Sunt voluptatum ipsam blanditiis?
              Eius temporibus distinctio officia quisquam aliquid nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              veritatis ipsum esse, autem reprehenderit illo odio suscipit
              cumque deleniti animi quasi aliquid nisi fugit quod vel voluptatem
              labore soluta velit cupiditate harum officiis quidem sapiente
              quos. Itaque, natus, officia accusamus magni fuga eius doloribus
              repellendus dolor ut a perferendis suscipit, cum explicabo nam.
              Tenetur ipsum vitae, animi voluptates quod quaerat.
            </p>
            <div className="btn btn__primary">Read more</div>
          </div>
        </div>
      </div>
      <div className="nowselling">
        <div className="content">
          <div className="content__title">
            Now <span> Selling</span>
          </div>
          <div className="content__body">
            <Card />
          </div>
        </div>
      </div>
      <div className="newsletter">
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
