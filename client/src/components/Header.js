import React from "react";
import Avatar from "./Avatar";
import NeonButton from "./NeonButton";

// Header component- avatar and neon button nested button
const Header = () => {
  return (
    <header className="hdr" id="header">
      <div className="hdr__intro ">
        <h1 className="hdr__intro-heading">
          Hello, I am Evan Parker. Full Stack Developer
        </h1>
        <Avatar />
        <NeonButton />
      </div>
    </header>
  );
};

export default Header;
