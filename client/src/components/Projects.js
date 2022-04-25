import React from "react";
import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects">
      <h2>Projects</h2>

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
