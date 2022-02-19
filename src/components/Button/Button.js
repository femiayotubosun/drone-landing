import React from "react";

import "./button.css";

const Button = ({ background, color, content }) => {
  return (
    <button
      className="drone__button"
      style={{
        backgroundColor: `${background}`,
        color: `${color}`,
      }}
    >
      {content}
    </button>
  );
};

export default Button;
