import React from "react";
import "./feature.css";

const Feature = ({ background, header, text }) => {
  return (
    <div
      className="drone__feature"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h5>{header}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
