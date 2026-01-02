// ProjectCard.jsx
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, desc, tech, github, demo, darkMode }) {
  return (
    <div className={`${styles.card} ${darkMode ? styles.dark : ""}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tech}>{tech}</div>
      <div className={styles.links}>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          GitHub
        </a>
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;