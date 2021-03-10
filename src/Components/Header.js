import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="Header">
        <ul>
          <a class="active" href="/">
            Welcome
          </a>
          <a href="portfolio">Projects</a>
          <a href="blog">Blog</a>
          <a href="about">About</a>
            
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
    </div>
  );
};

export default Header;
