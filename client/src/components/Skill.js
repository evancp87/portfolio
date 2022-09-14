import React from "react";
import LazyLoad from "react-lazyload";
// Singular Project component that takes props from Projects file and project data
const Skill = (props) => {
  return (
    <li className="skills__item">
      <div className="skills__icon-container">
        <LazyLoad offset={100}>
          <img src={props.image} alt={props.title} className="skills__icon" />
        </LazyLoad>
      </div>

      <div className="skills__details">
        <h2 className="skills__title"> {props.title}</h2>
      </div>
    </li>
  );
};

export default Skill;
