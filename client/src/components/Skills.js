import { React } from "react";
import Skill from "./Skill";
import { SkillInfo } from "../skillsData";

// skills list component- mapping over data from the skillsData file and rendering a skill component for each entry
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2>Skills</h2>
      </div>

      <ul className="skills__list">
        {SkillInfo.map((skill) => (
          <Skill
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
