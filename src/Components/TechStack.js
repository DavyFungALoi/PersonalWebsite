import React from "react";
import ReactIcon from "../Images/TechStack/ReactIcon.png";

const TechStack = () => {
  const TechStackArray = [
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 1,
    },
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 2,
    },
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 3,
    },
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 4,
    },
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 5,
    },
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 6,
    },
    {
      name: "React",
      icon: ReactIcon,
      alt: "ReactIcon",
      id: 7,
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
