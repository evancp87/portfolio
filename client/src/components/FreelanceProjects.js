import React from "react";
import { freelanceData } from "../freelanceData";
import Freelance from "./Freelance";

function FreelanceProjects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <h2>Freelance Work</h2>
        <p>Freelance projects worked on for Oval Studio</p>
      </div>
      <ul className="projects__list">
        {freelanceData.map((freelance, index) => (
          <Freelance
            key={index}
            id={index}
            image={freelance.image}
            title={freelance.title}
            link={freelance.link}
            description={freelance.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default FreelanceProjects;
