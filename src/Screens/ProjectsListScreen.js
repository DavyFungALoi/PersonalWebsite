import React from "react";
import Project from "../Components/Project";
import Projects from "../data.js";

const ProjectsListScreen = () => {
  return (
    <div>
      <div className="ProjectOverview__Container">
        <h2 className="Project__Container__Header">Projects</h2>
        <div className="Projects_Container">
          {Projects.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              id={project.id}
              img={project.img}
              stack={project.stack}
              concepts={project.concepts}
              link={project.link}
            ></Project>
          ))}
        </div>
      </div>
      <div className="ProjectOverview__Container__GithubCTA projectScreen">
        <a href="https://github.com/DavyFungALoi">
          <button>See More Projects ></button>
        </a>
        <a href="/">
          <button>Go back to Home></button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsListScreen;
