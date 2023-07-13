import React from "react";
import Avatar from "./Avatar";
import NeonButton from "./NeonButton";
import ThoughtBubble from "./ThoughtBubble";

// Header component- avatar and neon button nested button
const Header = () => {
  return (
    <header className="hdr" id="header">
      <div className="hdr__intro ">
        <h1 className="hdr__intro-heading">
          Hello, 👋🏽 I'm Evan Parker. Software Engineer
        </h1>
        <p className="hdr__intro-tech">
          Coding websites with React - Next JS - Sass - Tailwind - Express -
          PostGreSQL - MongoDB
        </p>
        <Avatar />
        <ThoughtBubble />
        <NeonButton />
      </div>
    </header>
  );
};

export default Header;
