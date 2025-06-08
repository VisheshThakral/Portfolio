export const navLinks = [
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Netflix",
    desc: "Netflix Clone is a sleek video streaming web application that replicates the core features of Netflix. It offers users a seamless experience to browse, search, and watch movie trailers with real-time content fetched from the TMDB API and secured access via Firebase authentication.",
    subdesc:
      "Built using React, Tailwind CSS, Firebase, and TMDB API, the app features a responsive UI, modular components, and dynamic content rendering — demonstrating strong frontend architecture and integration with external services.",
    href: "https://promoflix.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/firebase.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
    ],
  },
  {
    title: "Sphinx - Social Platform",
    desc: "Sphinx is a full-stack social media platform enabling user registration, secure JWT-based authentication, and dynamic feed management. The platform facilitates rich interactions through tweet creation, retweeting, and liking features, mimicking core functionalities of Twitter while emphasizing scalable architecture and real-time engagement",
    subdesc:
      "Built with Angular (frontend), Node.js (backend), and Tailwind CSS (styling), the project features a modular design, RESTful APIs, and token-based auth. Demonstrates expertise in full-stack development, state management, and responsive UI design—showcasing ability to deliver end-to-end solutions.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/angular.png",
      },
      {
        id: 2,
        name: "Node",
        path: "assets/node.png",
      },
      {
        id: 3,
        name: "Mongo",
        path: "assets/mongodb.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Priority Tech Holdings",
    pos: "Senior Software Engineer",
    duration: "July, 2024 - Present",
    title: [
      "Implemented authentication for a third-party library using React, Angular and Keycloak (OIDC/SAML), enabling secure Single Sign-on (SSO) across 3 services and reduced login friction for 150K+ monthly active users.",
      "Explored Microfrontend Architecture – Implemented a proof-of-concept using Webpack Module Federation with React to enable independent deployment of features, reducing cross-team dependencies.",
      "Created a script to streamline cross-team UI version management, reducing manual branch-tag lookup time by 80% for 4 teams.",
      "Partnered with UX designers to revamp 5+ sign-up screens in React, implementing e2e tests",
    ],
    icon: "/assets/priority.jpeg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Unthinkable Solutions",
    pos: "Software Engineer",
    duration: "January, 2022 - June, 2024",
    title: [
      "Led the design and development of e-commerce applications for The Souled Store, contributing to INR 1.4B revenue annually using Vue.js and Angular.",
      "Streamlined workflows with a carry-forward service leveraging graph data structures, reducing computational time by 99%.",
      "Reduced page load times by 30% through advanced performance optimization techniques like code splitting and lazy loading.",
      "Enhanced user experiences by implementing responsive design across 10+ web pages and integrating Google Analytics 4 (GA4) for metrics tracking.",
      "Instrumented GA4 analytics to uncover a 22% checkout drop-off.",
      "Designed UI improvements that recovered ₹180M in potential lost revenue.",
    ],
    icon: "/assets/unthinkable.jpeg",
    animation: "clapping",
  },
];
