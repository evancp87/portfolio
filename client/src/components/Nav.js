import React from "react";

// navbar for homepage
const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__logo navigation__nav-item">Evan Parker</li>
      </ul>
      <ul className="navigation__nav-items">
        <li className="navigation__nav-item">
          <a href="#header">Home</a>
        </li>
        <li className="navigation__nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navigation__nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="navigation__nav-item">
          <a href="#about">About</a>
        </li>
        <li className="navigation__nav-item">
          <a href="../assets/pdfs/cv.pdf" target="_blank">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
