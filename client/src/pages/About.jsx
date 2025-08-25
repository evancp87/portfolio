import React, { useEffect, useRef } from 'react';
import Skill from '../components/Skill';
import { SkillInfo } from '../data/skillsData';
import gsap from 'gsap';

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
        South London. I use React, Next JS, TypeScript, GraphQL, MongoDB, and
        MySQL to build full stack apps and solve complex problems. I have worked
        professionally in the tech industry for 3 years, as a Frontend Engineer
        for fintech company Foundry OS, Full Stack Developer at the Science
        Museum, and in the Royal Academy of Arts' Digital Product and
        Infrastructure team.
        <br />
        <br />
        Notable projects include working on the SMG's Collections Online 2.0
        website, a significant revamp of a popular open-source API and web
        service, alongside the frontend interface used by hobbyists,
        researchers, and developers alike to explore a diverse collection of
        500,000 items.
        <br />
        <br />
        At the Royal Academy of Arts, I worked on a Bloomberg-funded project
        aimed at refreshing their frontend, ensuring quality assurance through
        comprehensive testing—from static checks to end-to-end scenarios—
        ensuring industry and stakeholder standards.
        <br />
        <br />
        At Foundry I built Foundry OS, a financial services operating system
        that helps companies build and launch fintech products faster, acting as
        a flexible orchestration layer between client's apps and different
        providers (payments, KYC, accounts, fraud, etc.).
        <br />
        <br />
        I am an alumni at The Jump Digital School, where i took their 5 month
        Professional JavaScript + Dev Ops course to further my skill set to a
        professional level.
        <br />
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
