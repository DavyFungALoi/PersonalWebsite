import React from "react";
import GitHubIcon from "../Images/GitHubIcon.png";
import LinkedinIcon from "../Images/LinkedinIcon.png";
import MouseWheelIconDownwards from "../Images/MouseWheelIconDownwards.png";
import Expertise from "../Images/Expertise.png";
import ProfilePic from "../Images/ProfilePicture.jpg";
import BarbershopPic from "../Images/Projects/BarberShop.png";
import KeyboardShopPic from "../Images/Projects/KeyboardShop.png";
import PassPortPic from "../Images/Projects/Passport.png";
import PersonalWebsitePic from "../Images/Projects/PersonalWebsite.png";
import Project from "../Components/Project";
import TechStack from "../Components/TechStack";

const HomeScreen = () => {
  const Projects = [
    {
      name: "Barbershop",
      description:
        "A fullstack application where you can make a barber's appointment",
      stack: "Redux, React, Mongoose, Node,",
      img: BarbershopPic,
      concepts: "MERN, encryption, One Page Checkout, CRUD, MVC",
      link: "https://github.com/DavyFungALoi/barbershop",
      id: 1,
    },
    {
      name: "Personal website",
      description: "A personal website to showcase who I am",
      stack: "React, HTML, CSS, Javascript",
      img: PersonalWebsitePic,
      concepts: "Routing, Components, Figma",
      link: "https://github.com/DavyFungALoi/PersonalWebsite",
      id: 2,
    },

    {
      name: "Members Only",
      description:
        "An application build around logging in and member priveleges and tiers",
      stack: "Express, Node, Mongoose, Node, EJS",
      img: PassPortPic,
      concepts: "encryption, data validation, CRUD, MVC, EJS",
      link: "https://github.com/DavyFungALoi/members-only",
      id: 4,
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
        <div>
          Tech Stack
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
      <div className="About__Me__Container">
        <h2>More About me</h2>
        <div className="About__Me__Container__Info">
          <div className="About__Me__Container__Info__Text">
            <div className="About__Me__Container__Info__Text__Paragraph">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </div>
            <div className="About__Me__Container__Info__Text__Paragraph">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </div>
            <div className="About__Me__Container__Info__Text__Paragraph">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>
          </div>
          <img
            className="Profile__Pic"
            src={ProfilePic}
            alt="Profile Pic"
          ></img>
        </div>
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
