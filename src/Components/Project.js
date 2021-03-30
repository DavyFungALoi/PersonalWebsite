import React from "react";

const Project = (props) => {
  const { name, img, description, stack, concepts } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img className='Project_Screenshot' src={img} alt="Expertise"></img>
      <div>{description}</div>
      <div>{stack}</div>
      <div>{concepts}</div>
    </div>
  );
};

export default Project;
