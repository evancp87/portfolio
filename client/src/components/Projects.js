import React from "react";
import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects__header">
        <h2>Projects</h2>
      </div>
      <ul className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            id={index}
            title={project.title}
            image={project.image}
            link={project.link}
            subtitle={project.subtitle}
            description={project.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
