import React, { useState } from "react";
import "./works.css";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "assets/works/works.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/works/works2.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handlerClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" srcset="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" srcset="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        srcset=""
        onClick={() => handlerClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        srcset=""
        onClick={() => handlerClick()}
      />
    </div>
  );
}
