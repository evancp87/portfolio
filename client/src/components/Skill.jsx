import React, { useState } from "react";
import LazyLoad from "react-lazyload";
// Singular Project component that takes props from Projects file and project data
const Skill = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  console.log(showTooltip);

  return (
    <li
      className="skills__item"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="skills__icon-container">
        <LazyLoad offset={100}>
          <img src={props.image} alt={props.title} className="skills__icon" />
        </LazyLoad>
      </div>
      {showTooltip && (
        <div className="skills__detail active">
          <h2 className="skills__title"> {props.title}</h2>
        </div>
      )}
    </li>
  );
};

export default Skill;
