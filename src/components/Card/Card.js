import React from "react";

import "./card.css";

const Card = ({ image, name, price, description }) => {
  return (
    <div className="drone__card">
      <div className="drone__card-img">
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
