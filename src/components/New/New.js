import React from "react";
import Card from "../Card/Card";
import "./new.css";

import drone from "../../assets/images/drone.jpg";

const New = () => {
  return (
    <div className="drone__new-section">
      <h2>New Products</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
        adipisci vero vel nihil recusandae!
      </p>
      <div className="drone__new__cards-container">
        <Card
          image={drone}
          name="Mini Drone"
          price="$5000"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis ea ut neque?"
        />
        <Card
          image={drone}
          name="Mini Drone"
          price="$5000"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis ea ut neque?"
        />
        <Card
          image={drone}
          name="Mini Drone"
          price="$5000"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis ea ut neque?"
        />
      </div>
    </div>
  );
};

export default New;
