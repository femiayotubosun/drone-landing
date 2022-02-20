import React from "react";
import "./video.css";

import century from "../../assets/videos/century.webm";

const Video = () => {
  return (
    <div className="drone__video">
      <video src={century} controls></video>
    </div>
  );
};

export default Video;
