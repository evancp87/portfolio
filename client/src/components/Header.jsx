import React from "react";
import Avatar from "./Avatar";
import NeonButton from "./NeonButton";
import ThoughtBubble from "./ThoughtBubble";
import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Transition } from "react-transition-group";

// Header component- avatar and neon button nested button
const Header = () => {
  const introRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(introRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.5,
      delay: 0.5,
    });
  }, []);
  return (
    <header className="hdr" id="header">
      <div className="hdr__intro " ref={introRef}>
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
