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
      My name is Evan Parker, and I am software engineer born and raised in South London. 
      I use React, Next JS, TypeScript, MongoDB, and MySQL to build full stack apps and solve
       complex problems. I have professional experience in the tech industry, having worked a 
       year in product management in the Royal Academy of Arts' Digital Product and Infrastructure team.
        <br />
        <br /> I have worked on large scale tech projects, such as a Bloomberg funded project to refresh 
        the RA's frontend, my role specifically carrying out quality assurance and static, component, integration 
        and e2e testing. 
        I work closely with a team of developers and the tech lead, who has allowed me to pick up Jira tickets, 
        to fix bugs and refactor select projects. 
        
        <br />
        <br /> 
        I am an alumni at The Jump Digital School, where i took their 5 month Professional JavaScript + Dev Ops course to further my skill set to a professional level.
        <br />
        <br /> 
I also have experience as a freelance developer for a small design studio, where i worked on 3 small WordPress websites, mainly with CSS and JavaScript. I am currently looking
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
