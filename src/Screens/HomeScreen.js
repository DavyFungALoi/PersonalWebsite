import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";
import MouseWheelIconDownwards from "../Images/MouseWheelIconDownwards.png";
import Expertise from "../Images/Expertise.png";

const HomeScreen = () => {
  return (
    <>
      <div className="Introduction__Container">
        <h1>Davy Fung-A-Loi</h1>
        <h2>Fullstack Developer</h2>
        <div className="Introduction__Container__Intro">
          Hi! I’m a fullstack developer doing cool things. Small intro about me
          that briefly summarises what it is that I do and just generally adds a
          bit more content here.
        </div>
        <div className="Introduction__Container__Button__Container">
          <a href="portfolio">
            <button>My Projects ></button>
          </a>
          <a href="contact">
            <button>Contact Me ></button>
          </a>
        </div>
        <div className="Social__Links__Container">
          <a href="https://www.linkedin.com/in/davyfungaloi/">
            <img src={LinkedinIcon} alt="LinkedinIcon"></img>
          </a>
          <a href="https://github.com/DavyFungALoi">
            <img src={GitHubIcon} alt="GithubIcon"></img>
          </a>
        </div>
      </div>
      <div className="Scroll__Downwards__Container">
        <img src={MouseWheelIconDownwards} alt="MouseWheelIconDownwards"></img>
        <div>Scroll for more about me</div>
      </div>
      <div className="Expertise__Container">
        <div className="Expertise__Container__Area__Container">
          <div>
            <img src={Expertise} alt="Expertise"></img>
            <h2>HTML & CSS</h2>
            <h3>
              Short sum here of what you’re focussed on. Small, short thingy
              here yes.
            </h3>
          </div>
          <div>
            <img src={Expertise} alt="Expertise"></img>
            <h2>Javascript</h2>
            <h3>
              Short sum here of what you’re focussed on. Small, short thingy
              here yes.
            </h3>
          </div>
          <div>
            <img src={Expertise} alt="Expertise"></img>
            <h2>Growth Mentality</h2>
            <h3>
              Short sum here of what you’re focussed on. Small, short thingy
              here yes.
            </h3>
          </div>
        </div>
        <div>My Languages</div>
        <div>My Tools</div>
      </div>
      <div className="Project_Container">
        <div className="Project_Container_Header"></div>
      </div>
    </>
  );
};

export default HomeScreen;
