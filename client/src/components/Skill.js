import React from "react";

// Singular Project component that takes props from Projects file and project data
const Skill = (props) => {
  return (
    <li className="skills__item">
      <div className="skills__icon-container">
        <img src={props.image} alt={props.title} className="skills__icon" />
      </div>

      <div className="skills__details">
        <h2 className="skills__title"> {props.title}</h2>
        <p className="skills__description">{props.description}</p>
      </div>
    </li>
  );
};

export default Skill;
