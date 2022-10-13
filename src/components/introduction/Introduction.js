import React from "react";
import "./introduction.css";

import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Introduction() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Designer"],
    });
  }, []);

  return (
    <div className="introduction" id="introduction">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper-1">
          <h2>Hi There, I'm</h2>
          <h1>Vaibhav Giridhar</h1>
          <h3>
            Full Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" srcset="" />
        </a>
      </div>
    </div>
  );
}



