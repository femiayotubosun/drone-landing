import React from "react";
import Spec from "../Spec/Spec";

import "./why.css";
const Why = () => {
  return (
    <div className="drone__why">
      <h2>Why Drone Light?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        voluptates necessitatibus deleniti sed sequi eius!
      </p>

      <div className="drone__why__specs-container">
        <Spec spec="4K" description="Camera Resolution" />
        <Spec spec="2TB" description="storage Capacity" />
        <Spec spec="60 m/s" description="Super Max Speed" />
        <Spec spec="30 mins" description="Long Flight Time" />
      </div>
    </div>
  );
};

export default Why;
