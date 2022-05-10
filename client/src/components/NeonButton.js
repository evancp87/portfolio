import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

// Neon Button- uses spans for snake border effect on hover, along with an arrow from react icons
const NeonButton = () => {
  return (
    <button className="neon-btn-container">
      <a href="#projects" className="neon-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        See my work
        <MdArrowRightAlt className="neon-btn__arrow" />
      </a>
    </button>
  );
};

export default NeonButton;
