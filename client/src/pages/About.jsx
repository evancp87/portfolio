import React, { useEffect, useRef } from "react";
import Skill from "../components/Skill";
import { SkillInfo } from "../data/skillsData";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.5,
      delay: 0.5,
    });
  }, []);
  return (
    <section className="about" ref={aboutRef}>
      <h2 className="about__heading">About</h2>
      <p className="about__text">
        My name is Evan Parker, and I am software engineer born and raised in
        South London. I am passionate about software, digital experiences,
        products and design. I specialise in writing semantic and accessible
        HTML, up to date CSS, and robust, DRY and maintainable JavaScript.
        <br />
        <br /> I have a year's worth of experience in the tech industry working
        in the Royal Academy of Art's Digital Product and Infrastructure Team,
        working closely with software engineers and product managers in an agile
        workflow. I have also worked as a freelance web developer, writing
        JavaScript and CSS for a freelance web designer. I am currently looking
        for my first professional role as a software engineer.
      </p>

      <ul className="skills__list">
        {SkillInfo.map((skill, index) => (
          <Skill
            key={index}
            id={index}
            image={skill.image}
            title={skill.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default About;
