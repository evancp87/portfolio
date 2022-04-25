import React from 'react'
import {projects} from "../data";
function Project(props) {

  
    return (
        <ul  className="project">
            <li>

            <a href={props.link}>
              <img src={props.image} alt={props.title} className="proj-img" />
            </a>
            <div className="project__details">
              <h2> {props.title}</h2>
              <h3>{props.subtitle}</h3>
              <p className="proj-description">{props.description}</p>
          </div>
            </li>
          </ul>
    )
}

export default Project
