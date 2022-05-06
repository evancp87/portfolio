import React from 'react'
import {skills} from "../skillsData";
function Project(props) {

  
    return (

            <li className="skills__item">

<div className="skills__icon-container">

            <img src={props.image} alt={props.title} className="skills__icon" />
</div>
            
            <div className="skills__details">
              <h2 class="skills__title"> {props.title}</h2>
              <p className="skills__description">{props.description}</p>
          </div>
            </li>
          
    )
}

export default Project
