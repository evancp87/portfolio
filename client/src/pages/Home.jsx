import React from "react";
import Avatar from "../components/Avatar";
import NeonButton from "../components/NeonButton";
import ThoughtBubble from "../components/ThoughtBubble";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Transition, SwitchTransition } from "react-transition-group";
const Header = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const headerChildren = introRef.current.children;

    gsap.from(headerChildren, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.5,
      delay: 0.5,
    });
  }, []);

  return (
    <header className="hdr">
      <div className="hdr__intro" ref={introRef}>
        <h1 className="hdr__intro-heading">
          Hello, 👋🏽 I'm Evan Parker. Software Engineer
        </h1>
        <p className="hdr__intro-tech">
          Building attractive full stack websites with React - Next JS - Sass -
          Tailwind - Express - PostGreSQL - MongoDB
        </p>
        <Avatar />
        <ThoughtBubble />
        <NeonButton />
      </div>
    </header>
  );
};

export default Header;
