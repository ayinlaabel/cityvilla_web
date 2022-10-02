import React from "react";
import "./project.scss";
function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__header">
          <h2 className="project__header--h2">City Villa Real Estate</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quidem est enim dolores accusantium nemo nostrum. Quod perferendis
            assumenda voluptatibus, consectetur ratione corrupti facere eveniet
            aliquid deleniti repellat voluptates harum.
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
