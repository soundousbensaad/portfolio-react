import styles from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";

function Projects({ visible, darkMode, language }) {
  const projectsText = {
    en: {
      title: "My Labs & Projects",
      description: "A collection of my recent work and projects",
    },
    fr: {
      title: "Mes Labs & Projets",
      description: "Une collection de mes travaux et projets récents",
    }
  };

  const labs = [
    {
      title: "Lab 7: Kanban Board",
      desc: language === "en" ? "Task management app for organizing projects" : "Application de gestion des tâches pour organiser les projets",
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/lab7-kanban",
      demo: "lab7-kanban-board-ap82.vercel.app"
    },
    {
      title: "Lab 6: Portfolio",
      desc: language === "en" ? "Personal portfolio website showcasing skills" : "Site web de portfolio personnel présentant les compétences",
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/portfolio-react",
    },
    {
      title: "Lab 2: Git & GitHub/GitLab",
      desc: language === "en" 
        ? "Hands-on practice with Git for version control and code management using GitHub/GitLab." 
        : "Pratique de Git pour le contrôle de version et la gestion du code avec GitHub/GitLab.",
      tech: "Version Control System (Git), GitHub, GitLab",
      github: "https://github.com/anfelrihem/caw_labs",
    },
    {
      title: "Lab 3: Node.js & NPM",
      desc: language === "en" 
        ? "Using Node.js and NPM to run JavaScript applications and manage external packages." 
        : "Utilisation de Node.js et NPM pour exécuter des applications JavaScript et gérer des packages externes.",
      tech: "Node.js, NPM, JavaScript",
      github: "https://github.com/anfelrihem/lab3",
    },
    {
      title: "Lab 4: Unit Testing in JavaScript - Initiation to Jest",
      desc: language === "en" 
        ? "Running unit tests on JavaScript modules using Jest." 
        : "Exécution de tests unitaires sur des modules JavaScript avec Jest.",
      tech: "Jest, JavaScript",
      github: "https://github.com/anfelrihem/Lab4_Jest",
    },
    {
      title: "Lab 5: React Component",
      desc: language === "en" 
        ? "Implementing exercises using React functional components" 
        : "Implémentation d'exercices avec des composants fonctionnels React",
      tech: "React, JavaScript",
      github: "https://github.com/anfelrihem/lab5_react",
    },
    {
      title: language === "en" ? " Laboratory Website for Patient Services and AI-Driven Scan Classification" : "Site Web de laboratoire pour les services aux patients et la classification des analyses basée sur l’IA",
      desc: language === "en" 
        ? " This project aims to develop a secure web platform for laboratory patients,enabling them to access and download scan results, receive AI-based classification reports forthree specific diseases, and consult with or be directed to nearby physicians." 
        : "Ce projet vise à développer une plateforme web sécurisée pour les patients de laboratoire, leur permettant d’accéder et de télécharger les résultats de leurs analyses, de recevoir des rapports de classification basés sur l’IA pour trois maladies spécifiques, et de consulter ou d’être orientés vers des médecins à proximité.",
      tech: "Laravel, AI",
      github: "https://github.com/soundousbensaad/pfe_ASlab",
    },
  ];

  // In your Projects.jsx return statement
return (
  <section className={`${styles.projects} ${darkMode ? styles.dark : ""} ${visible ? styles.visible : ""}`}>
    <h2 className={styles.heading}>{projectsText[language].title}</h2>
    <p className={styles.description}>{projectsText[language].description}</p>
    <div className={styles.grid}>
      {labs.map((lab, index) => (
        <ProjectCard
          key={index}
          title={lab.title}
          desc={lab.desc}
          tech={lab.tech}
          github={lab.github}
          demo={lab.demo}
          darkMode={darkMode} // Pass darkMode prop to ProjectCard
        />
      ))}
    </div>
  </section>
);
}

export default Projects;