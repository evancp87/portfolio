/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useRef, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Nav from "./Nav";
import Socials from "./Socials";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Transition, SwitchTransition } from "react-transition-group";
// import { onPageExit } from "../utils/helpers";
// import { onPageEnter } from "../utils/helpers";
const Layout = ({ children }) => {
  // const transitionRef = useRef(null);

  // const [isTransitioning, setIsTransitioning] = useState(false);

  // // gsap page transitions
  // const handleEnter = (node) => {
  //   onPageEnter(node);
  //   setIsTransitioning(false);
  // };

  // const handleExit = (node) => {
  //   onPageExit(node);
  //   setIsTransitioning(true);
  // };

  // const location = useLocation();

  // // const router = useRouter()

  // const onPageEnter = (node) => {
  //   gsap.from(node.children, {
  //     opacity: 0,
  //     y: 20,
  //     autoAlpha: 1,
  //     duration: 0.5,
  //     ease: "power3",
  //     stagger: 1, // Add the stagger value here (e.g., 0.5 seconds)
  //     delay: 1, // Add a delay before the stagger starts
  //   });
  // };

  // const onPageExit = (node) => {
  //   gsap.fromTo(
  //     node,
  //     {
  //       y: 0,
  //       autoAlpha: 1,
  //       ease: "power3.out",
  //     },
  //     {
  //       y: -100,
  //       autoAlpha: 0,
  //       duration: 0.5,
  //       ease: "power3.inOut",
  //     }
  //   );
  // };

  return (
    <>
      <Nav />

      <Socials />

      {/* <main className="App" ref={transitionRef}> */}
      <main className="App">{children}</main>
    </>
  );
};

export default Layout;
