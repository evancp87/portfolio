import React from "react";
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
    </li>
  );
};

export default Project;
