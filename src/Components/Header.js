import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";

const Header = () => {
  return (
    <div className="Header">
      <a class="active" href="/">
        Welcome
      </a>
      <a href="portfolio">Projects</a>
      <a href="blog">Blog</a>
      <a href="about">About me</a>
      <a class="Header__Contact" href="contact">
        Contact
      </a>
      <div class="Header__IconContainer">
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
