import React from "react";
import "./testimonials.css";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "John Fernandes",
      title: "Senior Developer",
      img: "assets/testimonial/person1.png",
      icon: "assets/twitter.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Rosemary R",
      title: "UI/UX Designer",
      img: "assets/testimonial/person2.png",
      icon: "assets/youtube.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Jones ",
      title: "Managing Director",
      img: "assets/testimonial/person3.png",
      icon: "assets/linkedin.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                src="assets/right-arrow.png"
                className="left"
              
              />
              <img src={d.img} alt="" srcset="" className="user" />
              <img src={d.icon} className="right" />
            </div>
            <div className="center">
              <p>{d.description}</p>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
