import React from "react";
import { projects } from "../data";
import Project from "./Project";

const Projects = ({ props }) => {
  return (
    <section className="projects-section slanted">
      <div className="projects">
      <h2>Projects</h2>

        {projects.map((project) => (
          <div key={project.title} className="project">
            <a href={project.link}>
              <img src={project.image} alt={project.title} className="proj-img" />
            </a>
            <div className="project__details">
              <h2> {project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p className="proj-description">{project.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
