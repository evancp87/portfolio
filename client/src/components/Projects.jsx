import React, {
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
  useState,
} from "react";

import { projects } from "../data/data";

import Project from "./Project";
import Controls from "./Controls";
import { useDispatch, useSelector } from "react-redux";
import {
  sort,
  reset,
  selectProjects,
  setProjects,
} from "../services/projectsSlice";

// https://omatsuri.app/page-dividers

const Projects = () => {
  // const dispatch = useDispatch();
  // const projects = useSelector(selectProjects);
  const [sortValue, setSortValue] = useState("Bootcamp projects");
  const projectRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.from(projectRef.current.children, {
  //     opacity: 0,
  //     y: 20,
  //     duration: 0.8,
  //     stagger: 0.5,
  //     delay: 0.5,
  //   });
  // }, []);

  const handleSortValue = (e) => {
    const { value } = e.target;
    setSortValue(value);
  };
  // const getProjects = useCallback(() => {
  //   dispatch(setProjects());
  //   dispatch(sort(sortValue));
  // }, [dispatch, sortValue]);

  // useEffect(() => {
  //   getProjects();
  // }, [getProjects]);

  // const filteredProjects = () => {
  //   let _projects = [...projects];
  //   if (sortValue) {
  //     _projects = _projects.filter((project) => {
  //       const query = project.type
  //         .toLowerCase()
  //         .includes(sortValue.toLowerCase());
  //       return query;
  //     });
  //   }
  // };
  // const projectsList = filteredProjects();
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <h2>Projects</h2>
      </div>
      {/* <Controls sortValues={sortValues}/>
       */}
      <Controls sortValue={sortValue} handleSortValue={handleSortValue} />

      <ul className="projects__list">
        {projects.map((project, index) => (
          // {projectsList.map((project, index) => (
          <Project
            key={index}
            id={index}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            ref={projectRef}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
