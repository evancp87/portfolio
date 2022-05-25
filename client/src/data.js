const homebrew = require("./assets/Images/homebrew.png");
const wyr = require("./assets/Images/would-you-rather.png");
const mars = require("./assets/Images/mars-dashboard.png");
const FEM = require("./assets/Images/frontendmentor.jpeg");
export const projects = [
  {
    title: "HomeBrew",
    description:
      "A fictional home brewing subscription website. This was my final project as part of my General Assembly Front End Web Development course. It is a static website built with Sass, html and vanilla Javascript ",
    image: homebrew,
    link: "https://homebrew-beer-ldn.netlify.app/",
  },
  {
    title: "Would You Rather",
    description:
      "Part of my Udacity React Nanodegree, a game of Would You Rather, that allows a user to log in from a pre set list of users, create questions, vote on other questions, and see a leaderboard. Built with React, Redux, Context Api and Sass. ",
    image: wyr,
    link: "https://wyrcats.netlify.app/",
  },
  {
    title: "Mars Rover Dashboard",
    description:
      "Part of my Udacity Intermediate Javascript Nanodegree. A dashboard showing the information of 3 different Mars Rovers and an image of the day, consuming data from the Nasa Mars Rover api. Built with JS functional programming paradigm, Immutable JS library and Sass",
    image: mars,
    link: "https://mars-rover-dashboard-app.herokuapp.com/",
  },
  {
    title: "Frontend Mentor projects",
    description:
      "A link to my Front End Mentor profile page, showing a list of completed challenges",
    image: FEM,
    link: "https://www.frontendmentor.io/profile/evancp87",
  },
];
