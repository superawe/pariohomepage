import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const InViewVideo = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "200px"
  });

  return (
    <div ref={ref}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="assets/img/catiphoneposter.jpg"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          //position: "fixed",
          left: 0,
          top: 0
        }}
      >
        {inView && (
          <source
            src="https://parioweb.z6.web.core.windows.net/assets/img/catiphone3.mp4"
            type="video/mp4"
          />
        )}
      </video>
    </div>
  );
};

export default InViewVideo;
