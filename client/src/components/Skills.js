import { React } from "react";
import Skill from "./Skill";
import { SkillInfo } from "../skillsData";

// skills list component- mapping over data from the skillsData file and rendering a skill component for each entry
const Skills = () => {
  return (
    <section className="skills" id="skills" tabIndex="0">
      <div className="skills__header">
        <h2>Tech Stack</h2>
      </div>

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

export default Skills;
