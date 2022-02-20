import React from "react";
import "./shot.css";
import drone from "../../assets/images/drone-trans.png";

const Shot = () => {
  return (
    <div className="drone__shot">
      <div className="drone__shot-blue"></div>
      <div className="drone__shot-white">
        <h2>4K video shot on our Drone Light</h2>
      </div>

      <div className="drone__shot-img">
        <img src={drone} alt="drone" />
      </div>
    </div>
  );
};

export default Shot;
