import BarbershopPic from "../src/Images/Projects/BarberShop.png";
import PassPortPic from "../src/Images/Projects/Passport.png";
import PersonalWebsitePic from "../src/Images//Projects/PersonalWebsite.png";
import ExpressIcon from "../src/Images/TechStack/Express-Icon.png";
import MongoDBIcon from "../src/Images/TechStack/MongoDB-Icon.jpg";
import ReduxIcon from "../src/Images/TechStack/Redux-Icon.png";
import NodeJSIcon from "../src/Images/TechStack/NodeJS-Icon.webp";
import ReactIcon from "../src/Images/TechStack/ReactIcon.png";
import HTMLIcon from "../src/Images/TechStack/HTML-Icon.png";
import CSSIcon from "../src/Images/TechStack/CSS-Icon.png";
import JavascriptIcon from "../src/Images/TechStack/JavaScript-Icon.png";
import EJSIcon from "../src/Images/TechStack/EJS-Icon.png";

const Projects = [
  {
    name: "Barbershop",
    description:
      "A fullstack application where you can make a barber's appointment.",
    stack: [MongoDBIcon, ExpressIcon, ReactIcon, ReduxIcon, NodeJSIcon],
    img: BarbershopPic,
    concepts: "MERN, Redux, One Page Checkout, REST API, MVC",
    link: "https://github.com/DavyFungALoi/barbershop",
    id: 1,
  },
  {
    name: "Personal website",
    description: "A personal website to showcase who I am and what I can do.",
    stack: [ReactIcon, HTMLIcon, CSSIcon, JavascriptIcon],
    img: PersonalWebsitePic,
    concepts: "Routing, Components, Figma",
    link: "https://github.com/DavyFungALoi/PersonalWebsite",
    id: 2,
  },

  {
    name: "Members Only",
    description:
      "An application build around logging in and member priveleges and tiers.",
    stack: [ExpressIcon, NodeJSIcon, MongoDBIcon, EJSIcon],
    img: PassPortPic,
    concepts: "Encryption, Data validation, CRUD, MVC, EJS",
    link: "https://github.com/DavyFungALoi/members-only",
    id: 3,
  },
];

export default Projects;
