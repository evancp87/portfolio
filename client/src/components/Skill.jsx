import React, { useState } from 'react';
const Skill = ({ image, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <li
      className="skills__item"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="skills__icon-container">
        <img src={image} alt={title} className="skills__icon" />
      </div>
      {showTooltip && (
        <div className="skills__detail ">
          <h2 className="skills__title"> {title}</h2>
        </div>
      )}
    </li>
  );
};

export default Skill;
