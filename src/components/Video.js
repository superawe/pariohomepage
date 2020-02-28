import React from "react";

function Video(props) {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        width: "100%",
        //position: "fixed",
        left: 0,
        top: 0
      }}
    >
      <source src="/img/catiphone3.mp4" type="video/mp4" />
    </video>
  );
}

export default Video;
