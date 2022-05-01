import React from "react";
import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects">

        {projects.map((project) => (
          <div key={project.title} className="project">
            <Project 
            title={project.title}
            image={project.image}
            link={project.link}
            subtitle={project.subtitle}
            description={project.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
