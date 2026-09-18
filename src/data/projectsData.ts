import type { ProjectItem } from '../components/ui/project-card/project-card.types';



// 1. Импортируем картинки (Vite сам их обработает)
import webLarek1 from '../images/images-project/WebLarёк1.png';
import webLarek2 from '../images/images-project/WebLarёк2.png';
import webLarek3 from '../images/images-project/WebLarёк3.png';
import webLarek4 from '../images/images-project/WebLarёк4.png';

import stellar1 from '../images/images-project/Stellar-burgers1.png';
import stellar2 from '../images/images-project/Stellar-burgers2.png';
import stellar3 from '../images/images-project/Stellar-burgers3.png';
import stellar4 from '../images/images-project/Stellar-burgers4.png';


import furniture1 from '../images/images-project/furniture-project1.png';
import furniture2 from '../images/images-project/furniture-project2.png';
import furniture3 from '../images/images-project/furniture-project3.png';
import furniture4 from '../images/images-project/furniture-project4.png';



import Koreanstyle1 from '../images/images-project/Korean-fashion-style1.png';
import Koreanstyle2 from '../images/images-project/Korean-fashion-style2.png';
import  Koreanstyle3 from '../images/images-project/Korean-fashion-style3.png';
import Koreanstyle4 from '../images/images-project/Korean-fashion-style4.png';




import journeyproject1  from '../images/images-project/journey_project1.png';
import journeyproject2 from '../images/images-project/journey_project2.png';
import  journeyproject3 from '../images/images-project/journey_project3.png';
import journeyproject4 from '../images/images-project/journey_project4.png';




import travelerproject1  from '../images/images-project/traveler-s-project1.png';
import travelerproject2 from '../images/images-project/traveler-s-project2.png';
import  travelerproject3 from '../images/images-project/traveler-s-project3.png';
import  travelerproject4 from '../images/images-project/traveler-s-project4.png';





import table1  from '../images/images-project/Smart-table-main1.png';
import table2 from '../images/images-project/Smart-table-main2.png';
import  table3 from '../images/images-project/Smart-table-main3.png';
import  table4 from '../images/images-project/Smart-table-main4.png';


export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Web-Larёк',
    description:
      'React • TypeScript • Vite • SCSS • MVP Architecture. Internet shop: MVP architecture is designed, type-safe data models, interface components and logic of interaction with the server are implemented.',
       images: [webLarek1, webLarek2, webLarek3, webLarek4],
    githubLink: 'https://github.com/kristinaJ7/weblarek.git',
    demoLink: 'https://kristinaj7.github.io/weblarek/',
  },
  {
    id: 2,
    title: 'Stellar‑burgers',
    description:
      'React • TypeScript • Redux Toolkit. Application for ordering burgers: implemented work with WebSocket, pagination, basket and user profile. The project demonstrates how to handle asynchronous requests, validate data, type API responses, and configure assembly via Webpack and modular styling.',
    images: [stellar1, stellar2, stellar3, stellar4],
    githubLink: 'https://github.com/kristinaJ7/stellar-burgers.git',
    demoLink: 'https://kristinaj7.github.io/stellar-burgers/',
  },

  {
    id: 3,
    title: 'Korean-fashion-style',
    description:
      'Korean Fashion Style is a fully functional online store of Korean clothing with catalogues, filtering by category, basket, chosen and ordering. Backend and authorization are built on Supbase (PostgreSQL + Auth), state is managed via Redux Toolkit, routing includes protected and modal routes. Build – Webpack with HMR, styling – CSS modules, interface language – Korean',
       images: [Koreanstyle1, Koreanstyle2, Koreanstyle3, Koreanstyle4],
    githubLink: 'https://github.com/kristinaJ7/Korean-fashion-style.git',
    demoLink: 'https://kristinaj7.github.io/Korean-fashion-style/',
  },

  {
    id: 4,
    title: 'Travelo-project',
    description:
      'Travelo is an educational tourism portal for planning trips with a focus on the countries of Southeast Asia: it implements adaptive scaffolding, interactive elements and validation of forms. The project demonstrates the skills of working with HTML5, CSS3 (Flexbox, Grid, variables, media requests), JavaScript and Vite assembly.',
    images: [journeyproject1 , journeyproject2, journeyproject3, journeyproject4],
    githubLink: 'https://github.com/kristinaJ7/journey_project.git',
    demoLink: 'https://kristinaj7.github.io/journey_project/',
  },
  {
    id: 5,
    title: 'furniture-project',
    description:
      'Training website of furniture store, created to develop the skills of a wort. The project demonstrates the application of HTML5 and CSS3 using Flexbox and Grid to build adaptive page structure.',
      images: [furniture1, furniture2, furniture3, furniture4],
    githubLink: 'https://github.com/kristinaJ7/furniture-project-f-.gitt',
    demoLink: 'https://kristinaj7.github.io/furniture-project-f-/',
  },
  {
    id: 6,
    title: 'traveler-s-project',
    description:
      'Web-based tour search and selection tool: allows you to filter offers, view tour cards and submit applications through the form. The project is implemented on HTML, SCSS, TypeScript and Vite with MVP architecture and event model, demonstrating work with DOM, form validation and modular code structure.',
     images: [travelerproject1 , travelerproject2, travelerproject3, travelerproject4],
    githubLink: 'https://github.com/kristinaJ7/traveler-s-project.git',
    demoLink: 'https://kristinaj7.github.io/traveler-s-project/',
  },

  {
    id: 7,
    title: 'Smart‑table‑main',
    description:
      'Smart Table is an interactive table for dealing with sales data: it allows searching, filtering, sorting records and splitting them into pages. The project demonstrates modular architecture on JavaScript, API work and query optimization through caching.',
     images: [table1 , table2, table3, table4],
    githubLink: 'https://github.com/kristinaJ7/smart-table-main.git',
    demoLink: '',
  },
];
