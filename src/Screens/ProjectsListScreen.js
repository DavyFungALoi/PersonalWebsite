import React from "react";
import Project from "../Components/Project";
import Projects from "../data.js";

const ProjectsListScreen = () => {
  return (
    <div>
      <div className="ProjectOverview__Container ListScreen">
        <h2 className="Project__Container__Header ListScreen">Projects</h2>
        <div className="Projects_Container ListScreen">
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
              className={"ProjectScreen"}
            ></Project>
          ))}
        </div>
      </div>
      <div className="ProjectOverview__Container__GithubCTA projectScreen">
        <a href="https://github.com/DavyFungALoi">
          <button>See all projects on Github ></button>
        </a>
        <a href="/">
          <button>Go back to Home></button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsListScreen;
