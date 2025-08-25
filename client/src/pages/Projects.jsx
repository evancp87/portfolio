import React, { useEffect, useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import Project from '../components/Project';
import Controls from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { sort, selectProjects, setProjects } from '../services/projectsSlice';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const [sortValue, setSortValue] = useState('');
  const projectRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.from(projectsRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.5,
      delay: 0.5,
    });
  }, []);

  useEffect(() => {
    gsap.from(projectRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.5,
      delay: 0.1,
    });
  }, [sortValue]);

  const handleSortValue = (e) => {
    setSortValue(e);
  };
  const getProjects = useCallback(() => {
    dispatch(setProjects());
    dispatch(sort(sortValue));
  }, [dispatch, sortValue]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const filteredProjects = () => {
    let _projects = [...projects];
    if (sortValue) {
      console.log(sortValue, _projects, 'projcets');
      _projects = _projects.filter((project) => {
        const query = project.type.some((t) =>
          t.toLowerCase().includes(sortValue.toLowerCase())
        );
        return query;
      });
    }
    return _projects;
  };
  const projectsList = filteredProjects();
  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <div className="projects__header">
        <h2>Projects</h2>
        <Controls
          sortValue={sortValue}
          setSortValue={setSortValue}
          handleSortValue={handleSortValue}
        />
      </div>

      <ul className="projects__list" ref={projectRef}>
        {projectsList.map((project, index) => (
          <Project
            key={project.title}
            id={index}
            index={index}
            title={project.title}
            image={project.image}
            link={project.link}
            github={project.github}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
