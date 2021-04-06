import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  const AboutJumpHandler = () => {
    const AboutContainer = document.querySelector(".About__Me__Container");
    if (!AboutContainer) {
      history.push("/");
    } else {
      AboutContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openHamburgerHandler = () => {
    const list = document.querySelector(".Header");
    list.classList.toggle("HamburgerOverlay");
  };
  return (
    <div className="Header">
      <div
        onClick={() => {
          openHamburgerHandler();
        }}
        className="Hamburger__menu"
      >
        <div className="Hamburger__Menu__Line"></div>
        <div className="Hamburger__Menu__Line"></div>
        <div className="Hamburger__Menu__Line"></div>
      </div>
      <ul className="Header__Menu">
        <a href="/">Welcome</a>
        <a href="/projects">My Projects</a>
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

export default Header;
