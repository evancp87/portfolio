import Homebrew from "../assets/Images/homebrew.png";
import Wyr from "../assets/Images/would-you-rather.png";
import Mars from "../assets/Images/mars-dashboard.png";
import FEM from "../assets/Images/frontendmentor.png";

export const projects = [
  {
    title: "HomeBrew",
    description:
      "A fictional home brewing subscription website. This was my final project as part of my General Assembly Front End Web Development course. It is a static website built with Sass, html and vanilla Javascript ",
    image: Homebrew,
    link: "https://homebrew-beer-ldn.netlify.app/",
  },
  {
    title: "Would You Rather",
    description:
      "Part of my Udacity React Nanodegree, a game of Would You Rather, that allows a user to log in from a pre set list of users, create questions, vote on other questions, and see a leaderboard. Built with React, Redux, Context Api and Sass. ",
    image: Wyr,
    link: "https://wyrcats.netlify.app/",
  },
  {
    title: "Mars Rover Dashboard",
    description:
      "Part of my Udacity Intermediate Javascript Nanodegree. A dashboard showing the information of 3 different Mars Rovers and an image of the day, consuming data from the Nasa Mars Rover api. Built with JS functional programming paradigm, Immutable JS library and Sass",
    image: Mars,
    link: "https://mars-rover-dashboard-7uwc.onrender.com/",
  },
  {
    title: "Frontend Mentor projects",
    description:
      "A link to my Front End Mentor profile page, showing a list of completed challenges",
    image: FEM,
    link: "https://www.frontendmentor.io/profile/evancp87",
  },
];
