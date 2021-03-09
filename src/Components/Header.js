import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <a class="active" href="/">
        Welcome
      </a>
      <a href="portfolio">Projects</a>
      <a href="blog">Blog</a>
      <a href="about">About me</a>
      <a class = "Header__Contact"href="contact">Contact</a>
      <a href="https://github.com/DavyFungALoi">Linkedin</a>
      <a href="https://www.linkedin.com/in/davyfungaloi/">Github</a>
    </div>
  );
};

export default Header;
