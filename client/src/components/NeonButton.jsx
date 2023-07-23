import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
// Neon Button- uses spans for snake border effect on hover, along with an arrow from react icons
const NeonButton = () => {
  return (
    <button className="neon-btn-container">
      <Link to="about" className="neon-btn">
        <span className="snake"></span>
        <span className="snake"></span>
        <span className="snake"></span>
        <span className="snake"></span>
        Discover More
        <MdArrowRightAlt className="neon-btn__arrow" />
      </Link>
    </button>
  );
};

export default NeonButton;
