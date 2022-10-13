import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactUs.png" alt="" srcset="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSumit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
