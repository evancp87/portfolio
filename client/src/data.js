// import homebrew from './assets/Images/homebrew.png';
// import wyr from './assets/Images/would-you-rather.png';

// const homebrew = require('homebrew')
const homebrew = require('./assets/Images/homebrew.png')
const wyr = require('./assets/Images/would-you-rather.png')
const mars = require('./assets/Images/mars-dashboard.png')
export const projects = [
  {
    title: "HomeBrew",
    description:
      "A fictional home brewing subscription website. This was my final project a part of my General Assembly Front End Web Development course. It is a static website built with Sass and vanilla Javascript ",
    image: homebrew,
    link: "https://homebrew-beer-ldn.netlify.app/",
  },
  {
    title: "Would You Rather",
    description: "A game of Would You Rather, built with React and Redux. Part of my Udacity React Nanodegree" ,
    image: wyr,
    link: "https://wyrcats.netlify.app/",
  },
  {
    title: "Mars Rover Dashboard",
    description: "A dashboard showing the information of 3 different Mars Rovers. Part of my Udacity Intermediate Javascript Nanodegree" ,
    image: mars,
    link: "https://marsrover-udacity.netlify.app/",
  },
  {
    title: "Frontend Mentor projects",
    description:
      "challenges completed on the Front End Mentor website",
    image: wyr,
    link: "https://www.frontendmentor.io/profile/evancp87",
  },
];

