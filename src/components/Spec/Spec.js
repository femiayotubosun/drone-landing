import React from "react";
import "./spec.css";

const Spec = ({ spec, description }) => {
  return (
    <div className="drone__spec">
      <h3>{spec}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Spec;
