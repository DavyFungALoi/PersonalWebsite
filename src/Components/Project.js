import React from "react";

const Project = (props) => {
  const { name, img, description, stack, concepts, link } = props;

  return (
    <div className="Project__Card__Container">
      <h3>{name}</h3>
      <img className="Project_Screenshot" src={img} alt="Expertise"></img>
      <div className="Project__Card__Container__Description">{description}</div>
      <h4>Tech Stack</h4>
      <div className="Project__Card__Container__Stack">
        {stack.map((icon) => (
          <div className="Project__Card__Container__Stack__Img">
            <img src={icon}></img>
          </div>
        ))}
      </div>
      <h3>Concepts</h3>
      <div className="Project__Card__Container__Concept">{concepts}</div>
      <a href={`${link}`}>
        <button className="Project__Card__Container__Button">
          Find it on Github >
        </button>
      </a>
    </div>
  );
};

export default Project;
