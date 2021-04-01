import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";

const Header = () => {
  const projectJumpHandler = () => {
    const Projectcontainer = document.querySelector(
      ".ProjectOverview__Container"
    );

    Projectcontainer.scrollIntoView({ behavior: "smooth" });
  };

  const AboutJumpHandler = () => {
    const AboutContainer = document.querySelector(".About__Me__Container");
    if (!AboutContainer) {
      console.log("hello");
    }
  };
  return (
    <div className="Header">
      <ul>
        <a className="active" href="/">
          Welcome
        </a>
        <a onClick={() => projectJumpHandler()}>My Projects</a>
        <a href="blog">Blog</a>
        <a onClick={() => AboutJumpHandler()}>About</a>

        <a className="Header__Contact" href="contact">
          Contact Me
        </a>
      </ul>

      <div className="Header__IconContainer">
        <a href="https://www.linkedin.com/in/davyfungaloi/">
          <img src={LinkedinIcon} alt="LinkedinIcon"></img>
        </a>
        <a href="https://github.com/DavyFungALoi">
          <img src={GitHubIcon} alt="GithubIcon"></img>
        </a>
      </div>
    </div>
  );
};

/// <button onClick={() => projectJumpHandler()}>My Projects ></button>

export default Header;
