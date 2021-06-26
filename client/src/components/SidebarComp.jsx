import React from "react";
import "./css/sidebar.css";
const SidebarComp = () => {
  return (
    <div className="sidebar">
      <img
        className="profile-pic"
        src="https://i1.sndcdn.com/avatars-ip1NTdLxVHEz58hH-jJccsA-t500x500.jpg"
      ></img>
      <h2 className="title">Front End Engineer</h2>
      <div className="links">
        <a className="link" href="#">
          My Portfolio
        </a>
        <a className="link" href="#">
          About Me
        </a>
        <a className="link" href="#">
          Get in Contact
        </a>
      </div>
      <div className="soc-div">
        <p className="soc">Stalk me on Social Media</p>
        <div className="soc-links">
          <a href="">
            <img
              className="soc-btn"
              src="https://image.flaticon.com/icons/png/512/174/174855.png"
            ></img>
            <img
              className="soc-btn"
              src="https://image.flaticon.com/icons/png/512/2111/2111425.png"
            ></img>
            <img
              className="soc-btn"
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;
