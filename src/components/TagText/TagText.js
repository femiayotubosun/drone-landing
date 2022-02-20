import React from "react";
import { FiTag } from "react-icons/fi";
import "./tagtext.css";

const TagText = ({ text }) => {
  return (
    <div className="drone__tag-text">
      <FiTag />

      {text}
    </div>
  );
};

export default TagText;
