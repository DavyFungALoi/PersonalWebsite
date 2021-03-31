import React from "react";

const Project = (props) => {
  const { name, img, description, stack, concepts } = props;

  return (
    <div className="Project__Card__Container">
      <h3>{name}</h3>
      <img className="Project_Screenshot" src={img} alt="Expertise"></img>
      <div className="Project__Card__Container__Description">{description}</div>
      <h4>Tech Stack used</h4>
      <div className="Project__Card__Container__Stack">
        {stack.map((icon) => (
          <div className="Project__Card__Container__Stack__Img">
            <img src={icon}></img>
          </div>
        ))}
      </div>
      <h3>Concepts used</h3>
      <div className="Project__Card__Container__Concept">{concepts}</div>
    </div>
  );
};

export default Project;

///img className="TechStack__Container__Stack__Image" src={stack.icon} alt={`$`}></img>

/*



<div className="Project__Card__Container__Stack">{concepts}</div>



  {TechStackArray.map((stack) => (
        <div className="TechStack__Container__Stack">
          <div className="TechStack__Container__Stack__Name">{stack.name}</div>
          <img className="TechStack__Container__Stack__Image" src={stack.icon} alt={`$`}></img>
        </div>
      ))}



         <div className="Project__Card__Container__Concepts">{concepts.map(concept => (<img src={concept}></img>))}</div>
*/
