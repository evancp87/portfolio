import React from "react";
import { projects } from "../data";
function Project(props) {
  return (
    <li key={props.index} className="project">

        <div className="projects__proj-img-container">
          <a href={props.link}>
            <img src={props.image} alt={props.title} className="proj-img" />
          </a>
        </div>
        <div className="project__details">
          <div className="project__header">

          <h2 className="project__header-title"> {props.title}</h2>
          </div>
          
          <p className="proj-description">{props.description}</p>
        </div>
    </li>
      
  );
}

export default Project;
