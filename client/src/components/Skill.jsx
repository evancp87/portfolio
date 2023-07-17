import React, { useState } from "react";
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
        <img src={props.image} alt={props.title} className="skills__icon" />
      </div>
      {showTooltip && (
        <div
          // className={showTooltip ? "skills__detail active" : "skills__detail "}
          className="skills__detail "
        >
          <h2 className="skills__title"> {props.title}</h2>
        </div>
      )}
    </li>
  );
};

export default Skill;
