import React from "react";
import "./details.scss";
function Details() {
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__content">
          <div className="content__header">
            <h2>City Villa homes</h2>
          </div>
          <div className="sub__body">
            <div className="abc">
              <h5>NEIGHBOR(s)</h5>
              <div className="abc__content">
                <div>
                  <span></span> 132/33kv Substation Ogbomosho Oyo State Nigeria
                </div>
                <div>
                  <span></span> Oyo State School Of Science
                </div>
                <div>
                  <span></span> Ogbomosho INEC Center
                </div>
                <div>
                  <span></span> Ayede Federal Polytechnic
                </div>
                <div>
                  <span></span> Ogbomosho Grammar School
                </div>
              </div>
            </div>
            <div className="xyz">
              <h5>Price</h5>
              <div className="xyz__content">
                <div>
                  <span></span> 40M Carcass{" "}
                </div>
                <div>
                  <span></span> 5M Initial Payment{" "}
                </div>
                <div>
                  <span></span> <b>Duration &nbsp;</b> 24 Months{" "}
                </div>
                <div>
                  <span></span> Payment at once 35M with time and condition
                </div>
              </div>
            </div>
          </div>

          <div className="mno">
            <h5>Benefits</h5>
            <div className="mno__content">
              <div>
                <span></span> 5 Bedroom Luxury Duplex with 2 Room Self-Contain
                Boy's Quarters with Gate House{" "}
              </div>
              <div>
                <span></span> Gate Estate with Security Post.{" "}
              </div>
              <div>
                <span></span> CCTV Camera Surveillance.
              </div>
              <div>
                <span></span> Solar Power System
              </div>
              <div>
                <span></span> Functional Drainage Systems
              </div>
              <div>
                <span></span> 500KVA Transformer for the estate
              </div>
              <div>
                <span></span>The building is build on over 1000 sqm
              </div>
            </div>
          </div>
        </div>
        <div className="details__gallery">
          <div className="img">
            <div className="img__container">
              <img
                src="https://thumbs.dreamstime.com/b/excavator-performs-excavation-work-contraction-site-beach-bulldozer-removes-debris-demolition-old-derelict-248371440.jpg"
                alt=""
              />
            </div>
            <div className="img__container">
              <img
                src="https://thumbs.dreamstime.com/b/excavator-performs-excavation-work-contraction-site-beach-bulldozer-removes-debris-demolition-old-derelict-248371440.jpg"
                alt=""
              />
            </div>
            <div className="img__container">
              <img
                src="https://thumbs.dreamstime.com/b/excavator-performs-excavation-work-contraction-site-beach-bulldozer-removes-debris-demolition-old-derelict-248371440.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
