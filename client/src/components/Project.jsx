import React, { useState } from "react";
import Github from "../assets/Images/github.png";
const Project = ({ title, link, image, description, stack }) => {
  return (
    <li key={title} className="projects__project">
      <div className="projects__proj-img-container">
        <a>
          <img src={image} alt={title} className="projects__proj-img" />
        </a>
      </div>
      <div className="projects__project-details">
        <div className="projects__project-header">
          <h2 className="projects__project-header-title"> {title}</h2>
        </div>

        <p className="projects__proj-description">{description}</p>
        <ul className="projects__tech-stack">
          {stack.map((tech, index) => (
            <li className="projects__tech-stack-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="projects__source-code">
        <a href={link} target="_blank">
          <p className="projects__source-code-live">Live Demo</p>
        </a>
        <div className="projects__source-code-container">
          <img
            src={Github}
            className="projects__source-logo"
            alt="github logo"
          />
          <a href={link}>
            <p>Source</p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
