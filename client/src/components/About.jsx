import React from "react";
import Skill from "./Skill";
import { SkillInfo } from "../data/skillsData";

// https://blog.logrocket.com/creating-beautiful-tooltips-with-only-css/
// http://www.menucool.com/tooltip/css-tooltip

const About = () => {
  return (
    <>
      <section className="about " id="about" tabIndex="0">
        <h2 className="about__heading">About</h2>
        <p className="about__text">
          My name is Evan Parker, and I am software engineer born and raised in
          South London. I like to design and build all kinds of things.
          <br />
          <br /> I have a year's worth of experience in the tech industry
          working in the Royal Academy of Art's Digital Product and
          Infrastructure Team. I work closely with software engineers and
          product managers to manage 5 websites, 2 databases, a CMS and more. I
          also have experience working as a freelance web developer, mostly
          building JavaScript for a freelance web designer. I am passionate
          about city life, travelling, art, culture, technology and and all
          things digital. I am currently looking for my first professional role
          as a software engineer.
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

      {/* <section className="skills" id="skills" tabIndex="0">
        <div className="skills__header">
          <h2>Tech Stack</h2>
        </div>
      </section> */}
    </>
  );
};

export default About;
