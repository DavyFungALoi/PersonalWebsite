import React from "react";
import Github from "../Images/GitHub-Mark.png";
import Linkedin from "../Images/Linkedin.svg";

const HomeScreen = () => {
  return (
    <div className="HomeScreenContainer">
      <h2>I'm Davy, a Junior Fullstack Developer</h2>
      <h3>I love solving problems and creating applications</h3>
      <div className="CTAContainer">
        <a>
          <img src={Github} alt="Github"></img>
        </a>
        <a>
          {" "}
          <img src={Linkedin} alt="Linkedin"></img>
        </a>
      </div>
      <h3>Tech stack</h3>
      <div className="TechStackContainer"></div>
      <div className="ProjectContainer">
        <div>Project 01</div>
        <div>Project 02</div>
        <div>Project 03</div>
      </div>
    </div>
  );
};

export default HomeScreen;
