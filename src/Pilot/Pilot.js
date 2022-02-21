import React from "react";
import "./pilot.css";

const Pilot = ({ comment, image, name, job }) => {
  return (
    <div className="drone__pilot">
      <p>{`${comment}`}</p>
      <div className="drone__pilot-bottom">
        <img src={image} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Pilot;
