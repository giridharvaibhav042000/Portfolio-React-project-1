import React from "react";
// import { Person, Mail } from '@mui/icons-material';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import "./topbar.css";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#introduction" className="logo">
            Vaibhav.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 1234567890</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>developer@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
