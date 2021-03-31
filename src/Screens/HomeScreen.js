import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";
import MouseWheelIconDownwards from "../Images/MouseWheelIconDownwards.png";
import Expertise from "../Images/Expertise.png";
import ProfilePic from "../Images/ProfilePicture.jpg";
import BarbershopPic from "../Images/Projects/BarberShop.png";
import PassPortPic from "../Images/Projects/Passport.png";
import PersonalWebsitePic from "../Images/Projects/PersonalWebsite.png";
import Project from "../Components/Project";
import TechStack from "../Components/TechStack";
import Projects from "../data.js";

const HomeScreen = () => {
  return (
    <>
      <div className="Introduction__Container">
        <h1>Davy Fung-A-Loi</h1>
        <h2>Fullstack Developer</h2>
        <div className="Introduction__Container__Intro">
          Hi! I’m a fullstack developer doing cool things. I like to solve
          problems and try to get better at everything I do a little bit
          everyday.
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
        <h2>Skills</h2>
        <div className="Expertise__Container__Area__Container">
          <div>
            <img src={Expertise} alt="Expertise"></img>
            <h2>HTML & CSS</h2>
            <h3>
              HTML & CSS, the backbone of web development, templating languages
              such as EJS and JSX.
            </h3>
          </div>
          <div>
            <img src={Expertise} alt="Expertise"></img>
            <h2>Javascript</h2>
            <h3>
              Javascript, React & Redux for the frontend and Node & Express for
              the backend.
            </h3>
          </div>
          <div>
            <img src={Expertise} alt="Expertise"></img>
            <h2>Growth Mentality</h2>
            <h3>
              I try to get better everyday at what I do and try to learn &
              reflect on everything that I do.
            </h3>
          </div>
        </div>
        <div>
          <h2>Tech Stack</h2>
          <TechStack></TechStack>
        </div>
      </div>
      <div className="ProjectOverview__Container">
        <h2 className="Project__Container__Header">Projects</h2>
        <div className="Projects_Container">
          {Projects.map((project) => (
            <Project
              name={project.name}
              description={project.description}
              id={project.id}
              img={project.img}
              stack={project.stack}
              concepts={project.concepts}
              link={project.link}
            ></Project>
          ))}
        </div>
        <div className="ProjectOverview__Container__GithubCTA">
          <a href="https://github.com/DavyFungALoi">
            <button>See all projects on Github ></button>
          </a>
        </div>
      </div>
      <div className="About__Me__Container">
        <h2>Who am I?</h2>
        <div className="About__Me__Container__Info">
          <div className="About__Me__Container__Info__Text">
            <div className="About__Me__Container__Info__Text__Paragraph">
              <h3>The drive to code</h3>
              When working as a Growth Hacker (first at a startup then at an
              agency) I came across the world of coding. Tracking, AB Testing,
              automation & data were all involved.I found out that at some point
              I was counting down the hours doing online marketing. It was then
              that I decided to make the switch. I loved the solving problems
              aspect, the creativity and quickly found out that I would lose
              track of time while doing programming. I would get into flow, that
              was a really strong sign for me to dive in even deeper and for the
              past 1.5 years I taught myself to code, almost every day, little
              by little.
            </div>
            <div className="About__Me__Container__Info__Text__Paragraph">
              <h3>What I believe in</h3>I believe that virtually anyone can
              learn any skill, as long as they put in the effort & the
              discipline. The question is whether you like it or not. If you
              want something done, then you should just do it. One of the most
              valuable lessons was from an ex-collegue of mine. He had this huge
              undertaking he had to do, his advise on how to start? "Just
              Start". Build, Measure, Learn. Learn from everything, priortize
              what is important to you (both in life and in work) and get it
              done.
            </div>
            <div className="About__Me__Container__Info__Text__Paragraph">
              <h3>What I like in daily life</h3>
              Apart from coding amongst others I like debating
              <u>
                <li>Gaming</li>
                <li>Forumula 1</li>
                <li>Fun Facts!</li>
              </u>
            </div>
          </div>
          <img
            className="Profile__Pic"
            src={ProfilePic}
            alt="Profile Pic"
          ></img>
        </div>
      </div>
      <div className="Quote__Container">
        Build, Measure, Learn. Learn from everything, priortize what is
        important to you and get it done.
      </div>
      <div className="Timeline__Container">
        <div className="TimeLine__Container__Step">
          <h3>Job Title Thingy</h3>
          <div>2018</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Job Title Thingy</h3>
          <div>2018</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Job Title Thingy</h3>
          <div>2018</div>
        </div>
        <div className="TimeLine__Container__Step">
          <h3>Job Title Thingy</h3>
          <div>2018</div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

/*
<img className="Profile__Pic" src={ProfilePic} alt="Profile Pic"></img>
 {Projects.map((project) => (
          
          ))}
*/
