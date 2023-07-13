import React from "react";
import LazyLoad from "react-lazyload";

const Project = (props) => {
  return (
    <li key={props.index} className="projects__project">
      <div className="projects__proj-img-container">
        <a href={props.link}>
          <LazyLoad offset={100}>
            <img
              src={props.image}
              alt={props.title}
              className="projects__proj-img"
            />
          </LazyLoad>
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
        <p>Source</p>
      </div>
    </li>
  );
};

export default Project;
