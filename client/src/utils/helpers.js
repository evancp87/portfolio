import projectsData from "../data/projects.json";
import { gsap } from "gsap";
export const getProjects = async () => {
  return projectsData;
};
// export const onPageEnter = (node) => {
//   gsap.from(node, {
//     y: -20,
//     delay: 0,
//     ease: "power3",
//     // opacity: 0.7,
//     stagger: {
//       amount: 0.2,
//     },
//   });
// };

// export const onPageExit = (node) => {
//   gsap.to(node, {
//     y: -20,
//     delay: 1.5,
//     ease: "power3",
//     // opacity: 0.7,
//   });
// };
