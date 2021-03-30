import React from "react";
import ReactIcon from "../Images/TechStack/ReactIcon.png";
import ExpressIcon from "../Images/TechStack/Express-Icon.png";
import MongoDBIcon from "../Images/TechStack/MongoDB-Icon.jpg";
import NodeJSIcon from "../Images/TechStack/NodeJS-Icon.webp";
import GoogleOptimizeIcon from "../Images/TechStack/Google-Optimize-Icon.png";
import GoogleTagManagerIcon from "../Images/TechStack/Google-Tag-Manager-Icon.svg";
const TechStack = () => {
  const TechStackArray = [
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 1,
    },
    {
      name: "Express",
      icon: ExpressIcon,
      alt: "Express Icon",
      id: 2,
    },
    {
      name: "MongoDB",
      icon: MongoDBIcon,
      alt: "MongoDB Icon",
      id: 3,
    },
    {
      name: "NodeJS",
      icon: NodeJSIcon,
      alt: "Node JS Icon",
      id: 4,
    },
    {
      name: "Google Optimize",
      icon: GoogleOptimizeIcon,
      alt: "Google Optimize Icon",
      id: 5,
    },
    {
      name: "Google Tag Manager",
      icon: GoogleTagManagerIcon,
      alt: "Google Tag Manager Icon",
      id: 6,
    },
  ];
  return (
    <div className="TechStack__Container">
      {TechStackArray.map((stack) => (
        <div className="TechStack__Container__Stack">
          <div className="stackName">{stack.name}</div>
          <img className="Project_Screenshot" src={stack.icon} alt={`$`}></img>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
