import React from "react";

import "./linklist.css";

const LinkList = ({ header, links }) => {
  return (
    <div className="drone__linklist">
      <h5>{header}</h5>

      {links.map((link) => (
        <li>
          <a href="http://">{link}</a>
        </li>
      ))}
    </div>
  );
};

export default LinkList;
