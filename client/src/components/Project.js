import React from 'react'

function Project(props) {

    const {project} = props.projects;
    return (
        <div key={project.title} className="project">
        <a href={project.link}>
          <img src={project.image} alt={project.title} className="proj-img" />
        </a>
          <h2> {project.title}</h2>
          <h3>{project.subtitle}</h3>
          <p className="proj-description">{project.description}</p>
      </div>
    )
}

export default Project
