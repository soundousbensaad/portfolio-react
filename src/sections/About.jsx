import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
import profilePic from "../assets/profile.jpg";

function About({ darkMode, language }) {
  const navigate = useNavigate(); // <-- هذا ضروري للزر

  const text = {
    en: {
      title: "About Me",
      greeting: "Hello 👋 I’m Bensaad Soundous",
      description1: "I’m a passionate Computer Science student with hands-on experience in React, web development, and modern JavaScript frameworks.",
      description2: "During my projects, I worked with React, Vite, JavaScript, HTML, CSS, and backend technologies. This portfolio showcases my academic and personal projects.",
      description3: "I enjoy learning new technologies, solving problems, and transforming ideas into real web applications.",
      skills: ["React", "Vite", "JavaScript", "HTML", "CSS", "Git & GitHub"],
      back: "Back to Home"  // <-- text الزر
    },
    fr: {
      title: "À propos",
      greeting: "Bonjour 👋 Je suis Bensaad Soundous",
      description1: "Je suis une étudiante en informatique passionnée par le développement web et les frameworks JavaScript modernes.",
      description2: "Durant mes projets, j’ai travaillé avec React, Vite, JavaScript, HTML, CSS et des technologies backend. Ce portfolio présente mes projets académiques et personnels.",
      description3: "J’aime apprendre de nouvelles technologies, résoudre des problèmes et transformer des idées en applications web réelles.",
      skills: ["React", "Vite", "JavaScript", "HTML", "CSS", "Git & GitHub"],
      back: "Retour à l'accueil" // <-- text الزر
    }
  };

  return (
    <section className={`${styles.about} ${darkMode ? styles.dark : ""}`}>
      <h2 className={styles.title}>{text[language].title}</h2>
      <div className={styles.container}>
        <img src={profilePic} alt="Profile" className={styles.avatar} />
        <div className={styles.content}>
          <h3>{text[language].greeting}</h3>
          <p>{text[language].description1}</p>
          <p>{text[language].description2}</p>
          <p>{text[language].description3}</p>
          <div className={styles.skills}>
            {text[language].skills.map((skill, idx) => (
              <span key={idx}>{skill}</span>
            ))}
          </div>
          {/* زر Back to Home */}
          <button
            className={styles.backBtn}
            onClick={() => navigate("/")}
          >
            {text[language].back}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
