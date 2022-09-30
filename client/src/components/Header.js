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
          Hello, 👋🏽 I'm Evan Parker. Web Developer
        </h1>
        <Avatar />
        <ThoughtBubble />
        <NeonButton />
      </div>
    </header>
  );
};

export default Header;
