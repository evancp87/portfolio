import glimpses from "../assets/Images/glimpses.png";
import iHeartFilm from "../assets/Images/iheartfilm.png";
import blackBoxes from "../assets/Images/blackboxes.png";
import Homebrew from "../assets/Images/homebrew.png";
import Wyr from "../assets/Images/would-you-rather.png";
import Mars from "../assets/Images/mars-dashboard.png";
import FEM from "../assets/Images/frontendmentor.png";

export const projects = [
  {
    title: "Glimpses",
    description: "A freelance project done for an arts website ",
    image: glimpses,
    link: "https://glimpsesof.art/",
    type: "freelance",
  },
  {
    title: "I heart Film",
    description:
      "A website for an organisation of film producers based in Bahrain",
    image: iHeartFilm,
    link: "https://iheartfilm.net/",
    type: "freelance",
  },
  {
    title: "Black Boxes",
    description: "Website for a digital art project called Black Boxes",
    image: blackBoxes,
    link: "https://opentheblackboxes.org/",
    type: "freelance",
  },
  {
    title: "HomeBrew",
    description:
      "A fictional home brewing subscription website. This was my final project as part of my General Assembly Front End Web Development course. It is a static website built with Sass, html and vanilla Javascript ",
    image: Homebrew,
    link: "https://homebrew-beer-ldn.netlify.app/",
    type: "student-project",
  },
  {
    title: "Would You Rather",
    description:
      "Part of my Udacity React Nanodegree, a game of Would You Rather, that allows a user to log in from a pre set list of users, create questions, vote on other questions, and see a leaderboard. Built with React, Redux, Context Api and Sass. ",
    image: Wyr,
    link: "https://wyrcats.netlify.app/",
    type: "student-project",
  },
  {
    title: "Mars Rover Dashboard",
    description:
      "Part of my Udacity Intermediate Javascript Nanodegree. A dashboard showing the information of 3 different Mars Rovers and an image of the day, consuming data from the Nasa Mars Rover api. Built with JS functional programming paradigm, Immutable JS library and Sass",
    image: Mars,
    link: "https://mars-rover-dashboard-7uwc.onrender.com/",
    type: "student-project",
  },
  {
    title: "Frontend Mentor projects",
    description:
      "A link to my Front End Mentor profile page, showing a list of completed challenges",
    image: FEM,
    link: "https://www.frontendmentor.io/profile/evancp87",
    type: "other",
  },
];
