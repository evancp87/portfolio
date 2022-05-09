import { NavLink } from "react-router-dom";

import React from "react";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="logo nav-item">Evan Parker</li>
      </ul>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          {/* <a href="#"> */}
          CV
          {/* </a> */}
        </li>

        {/* <li className="nav-item"><NavLink to='/' exact activeClassName='active'>Home</NavLink></li>
                <li className="nav-item"><NavLink to='/about'  activeClassName='active'>About</NavLink></li>
                <li className="nav-item"><NavLink to='/projects'  activeClassName='active'>Projects</NavLink></li>
                <li className="nav-item"><NavLink to='/cv'  activeClassName='active'>CV</NavLink></li> */}
      </ul>
    </nav>
  );
};

export default Nav;
