import Rulebook from "./images/Rulebook.jpg";
import Macrolator from "./images/Macrolator.png";

export const projects = [
  {
    title: "Rulebook for Magic: The Gathering",
    id: 1,
    img: Rulebook,
    tags: ["React/JavaScript", "NodeJS", "Express"],
    liveLink: "https://magicrulebook.herokuapp.com/",
    gitHubLink: "https://github.com/tetaankk/MTG-Rulebook",
    description:
      "Interactive tool built for browsing and searching rules for the card game Magic: The Gathering. NodeJS back-end fetches and parses a raw text file after which a ReactJS front-end presents the rules in a practical manner and allows the user to search for rules with keywords.",
  },
  {
    title: "Macrolator",
    id: 2,
    img: Macrolator,
    tags: ["React/JavaScript", "NodeJS", "MongoDB", "Express"],
    liveLink: "https://macrolator.herokuapp.com/",
    gitHubLink: "https://github.com/tetaankk/Macrolator-2",
    description:
      "A simple tool that lets user to keep track of their consumed foods and macro nutrients. It utilizes, inter alia, a Fineli API and user authentication. The service can be tried out with a test user, thus registration is not mandatory. More features to come!",
  },
];
