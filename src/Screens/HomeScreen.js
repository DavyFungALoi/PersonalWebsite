import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";
import MouseWheelIconDownwards from "../Images/MouseWheelIconDownwards.png";
import Expertise from "../Images/Expertise.png";
import ProfilePic from "../Images/ProfilePicture.jpg";
import Project from "../Components/Project";
import TechStack from "../Components/TechStack";

const HomeScreen = () => {
    const Projects = [
    {
      name: "KeyboardShop",
      description: "Hello",
      stack: "Redux, React, Mongoose, Node",
      img: LinkedinIcon,
      concepts: "MERN, encyrption, secure routing, CRUD, MVC",
      link: "https://github.com/DavyFungALoi/keyboardshop",
      id: 1,
    },
    {
      name: "Barbershop",
      description: "Hello",
      stack: "Redux, React, Mongoose, Node,",
      img: LinkedinIcon,
      concepts: "MERN, encyrption, One Page Checkout, CRUD, MVC",
      link: "https://github.com/DavyFungALoi/barbershop",
      id: 2,
    },
    {
      name: "Personal website",
      description: "The code from this website",
      stack: "React, HTML, CSS, Javascript",
      img: LinkedinIcon,
      concepts: "Routing, Components, Figma",
      link: "https://github.com/DavyFungALoi/PersonalWebsite",
      id: 3,
    },
  ];


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
        <h2>My Skills</h2>
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
        <div>Tech Stack
          <TechStack></TechStack>
        </div>

      </div>
      <div className="ProjectOverview__Container">
        <h2 className="Project__Container__Header">My Projects</h2>
        <div className="Projects_Container">
          {Projects.map((project) => (
            <Project
              name={project.name}
              description={project.description}
              id={project.id}
              img={project.img}
              stack={project.stack}
              concepts={project.concepts}
            ></Project>
          ))}
        </div>
        <a href="https://github.com/DavyFungALoi">
          See all Projects on Github
          <img
            src={GitHubIcon}
            className="Projects_Social_Icon"
            alt="GithubIcon"
          ></img>
        </a>
      </div>
      <div className="AboutMe__Container">
        <h2>More About me</h2>
        <div>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
        <img className="Profile__Pic" src={ProfilePic} alt="Profile Pic"></img>
      </div>
      <div className="Quote__Container"></div>
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
