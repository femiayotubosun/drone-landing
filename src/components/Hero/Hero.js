import React from "react";
import TagText from "../TagText/TagText";

import "./hero.css";

import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="drone__hero">
      <div className="drone__hero-text">
        <TagText text="Get 25% Discount" />
        <h5 className="drone__hero-text__heading">Representing Drone Light</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure
          rerum quia nihil suscipit quos, similique praesentium mollitia.
        </p>
        <button>Get Now</button>
      </div>

      <div className="drone__hero-image-container">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
