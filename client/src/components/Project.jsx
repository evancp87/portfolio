import React from "react";
import Github from "../assets/Images/github.png";
const Project = (props) => {
  return (
    <li key={props.index} className="projects__project">
      <div className="projects__proj-img-container">
        <a href={props.link}>
          <img
            src={props.image}
            alt={props.title}
            className="projects__proj-img"
          />
        </a>
      </div>
      <div className="projects__project-details">
        <div className="projects__project-header">
          <h2 className="projects__project-header-title"> {props.title}</h2>
        </div>

        <p className="projects__proj-description">{props.description}</p>
      </div>
      <div className="projects__source-code">
        <p>Live Demo</p>
        <div className="projects__source-code-container">
          <img
            src={Github}
            className="projects__source-logo"
            alt="github logo"
          />
          <a href={props.link}>
            <p>Source</p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
