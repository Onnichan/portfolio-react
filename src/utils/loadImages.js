import IconBootstrap from "../assets/icons/IconBootstrap.svg";
import IconCss3 from "../assets/icons/IconCss3.svg";
import IconGit from "../assets/icons/IconGit.svg";
import IconGithub from "../assets/icons/IconGithub.svg";
import IconHtml5 from "../assets/icons/IconHtml5.svg";
import IconJs from "../assets/icons/IconJs.svg";
import IconNodejs from "../assets/icons/IconNodejs.svg";
import IconPhp from "../assets/icons/IconPhp.svg";
import IconReactjs from "../assets/icons/IconReactjs.svg";
import IconSass from "../assets/icons/IconSass.svg";
import IconVuejs from "../assets/icons/IconVuejs.svg";

import youtube from "../assets/images/sections/projects/cloneyoutube.png";
import fractals from "../assets/images/sections/projects/fractals.png";
import giphy from "../assets/images/sections/projects/gifexpert.png";
import pokeapi from "../assets/images/sections/projects/pokeapi.png";

console.log(IconBootstrap);

export function loadImages(filter) {
  const images = {
    frontend: [
      {
        name: "html5",
        value: IconHtml5,
      },
      {
        name: "css3",
        value: IconCss3,
      },
      {
        name: "javascript",
        value: IconJs,
      },
      {
        name: "bootstrap",
        value: IconBootstrap,
      },
      {
        name: "react",
        value: IconReactjs,
      },
      {
        name: "sass",
        value: IconSass,
      },
      {
        name: "vue",
        value: IconVuejs,
      },
    ],
    backend: [
      {
        name: "php",
        value: IconPhp,
      },
      {
        name: "nodejs",
        value: IconNodejs,
      },
    ],
    tools: [
      {
        name: "git",
        value: IconGit,
      },
      {
        name: "github",
        value: IconGithub,
      },
    ],
  };

  return images[filter];
}

export function loadProjects() {
  const projects = [
    { name: "youtube", url: youtube },
    { name: "fractals", url: fractals },
    { name: "giphy", url: giphy },
    { name: "pokeapi", url: pokeapi },
  ];

  return projects;
}
