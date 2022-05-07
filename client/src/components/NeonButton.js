import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

function NeonButton() {
  return (
    <button className="neon-button">

    <a href="#" className="neon-btn">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      See my work
      <MdArrowRightAlt className="arrow"/>
    </a>
    </button>
  );
}

// https://www.youtube.com/watch?v=ex7jGbyFgpA&list=PLxdw55vilFza8S9E9YD2u-74CZH8s1SlW&index=196
export default NeonButton;
