import React from "react";

const Project = (props) => {
  const { name, img, description, stack, concepts } = props;
  return (
    <div className="Project__Card__Container">
      <h3>{name}</h3>
      <img className='Project_Screenshot' src={img} alt="Expertise"></img>
      <div>{description}</div>
      <div>{stack}</div>
      <div>{concepts}</div>
    </div>
  );
};

export default Project;
