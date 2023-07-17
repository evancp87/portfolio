import React from "react";
import { useRef, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import FreelanceProjects from "./components/FreelanceProjects";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray([
      "#about",
      "#projects",
      "#freelanceProjects",
      "#footer",
    ]);

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom top",
        },
      });
    });
  }, []);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const freelanceProjectsRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <main className="App">
      <Nav />

      <Header />

      <Socials />

      <About id="about" />
      <Projects id="projects" />

      <FreelanceProjects id="freelanceProjects" />

      <Footer id="footer" />
    </main>
  );
}

export default App;
