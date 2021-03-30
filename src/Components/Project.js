import React from "react";

const Project = (props) => {
  const { name, img, description, stack, concepts } = props;
  return (
    <div className="Project__Card__Container">
      <h3>{name}</h3>
      <img className="Project_Screenshot" src={img} alt="Expertise"></img>
      <div className="Project__Card__Container__Description">{description}</div>
      <h4>Tech Stack used</h4>
      <div className="Project__Card__Container__Stack">{stack}</div>
      <h3>Concepts used</h3>
      <div className="Project__Card__Container__Concepts">{concepts}</div>
    </div>
  );
};

export default Project;
