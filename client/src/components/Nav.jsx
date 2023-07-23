import React from "react";
import { Link } from "react-router-dom";
// navbar for homepage
const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__logo navigation__nav-item">EP</li>
      </ul>
      <ul className="navigation__nav-items">
        <li className="navigation__nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__nav-item">
          <Link to="about">About</Link>
        </li>
        <li className="navigation__nav-item">
          <Link to="projects">Projects</Link>
        </li>
        <li className="navigation__nav-item">
          <Link to="contact">Contact</Link>
        </li>

        <li className="navigation__nav-item">
          <a href="pdfs/cv.pdf" target="_blank">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
