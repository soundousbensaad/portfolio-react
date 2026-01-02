import { useRef, useEffect, useState } from "react";
import styles from "./Home.module.css";
import profilePic from "../assets/profile.jpg";
import { FaLinkedin, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Projects from "./Projects"; 
import { useNavigate } from "react-router-dom";

function Home({ darkMode, setDarkMode }) { // Receive darkMode from App.jsx
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const [homeVisible, setHomeVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Initialize language based on browser preference
  const [language, setLanguage] = useState(() => {
    // Check browser language or localStorage if previously set
    const savedLanguage = localStorage.getItem("portfolioLanguage");
    if (savedLanguage) return savedLanguage;
    
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith("fr") ? "fr" : "en";
  });

  const text = {
    en: {
      tagline: "Frontend & React Developer",
      bio: "Passionate Computer Science student with hands-on experience in React, web development, and modern JavaScript frameworks.",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      about: "About Me",
      navigation: "Navigation",
      home: "Home",
      sendMessage: "Send Message",
      contactMe: "Contact Me",
      skillsTech: "Skills & Technologies"
    },
    fr: {
      tagline: "Développeuse Frontend & React",
      bio: "Étudiante en informatique passionnée par le développement web, avec une expérience pratique en React et technologies modernes.",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      about: "À propos",
      navigation: "Navigation",
      home: "Accueil",
      sendMessage: "Envoyer un Message",
      contactMe: "Me Contacter",
      skillsTech: "Compétences & Technologies"
    },
  };

  const skills = [
    { 
      category: language === "en" ? "Programming Languages" : "Langages de Programmation", 
      items: ["JavaScript", "Python", "PHP", "Java", "C++", "HTML", "CSS"] 
    },
    { 
      category: language === "en" ? "Frameworks & Libraries" : "Frameworks & Bibliothèques", 
      items: ["React.js", "Laravel", "Bootstrap", "Tailwind CSS"] 
    },
    { 
      category: language === "en" ? "AI & Data Science Tools" : "Outils IA & Science des Données", 
      items: ["Jupyter Notebook", "Anaconda", "TensorFlow (Basics)", "Scikit-learn", "Pandas", "NumPy"] 
    },
    { 
      category: language === "en" ? "Design & Prototyping" : "Design & Prototypage", 
      items: ["Canva", "Figma", "UI/UX Design"] 
    },
    { 
      category: language === "en" ? "Development Tools" : "Outils de Développement", 
      items: ["Git", "GitHub", "VS Code", "Postman", "XAMPP", "phpMyAdmin"] 
    },
    { 
      category: language === "en" ? "Databases" : "Bases de Données", 
      items: ["MySQL", "SQLite"] 
    },
  ];

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("portfolioLanguage", language);
  }, [language]);

  useEffect(() => {
    const options = { threshold: 0.2 };
    const observe = (ref, setter) => {
      const obs = new IntersectionObserver(([entry]) => setter(entry.isIntersecting), options);
      if (ref.current) obs.observe(ref.current);
      return obs;
    };
    const homeObs = observe(homeRef, setHomeVisible);
    const projObs = observe(projectsRef, setProjectsVisible);
    const skillsObs = observe(skillsRef, setSkillsVisible);
    const contactObs = observe(contactRef, setContactVisible);

    return () => {
      homeObs.disconnect();
      projObs.disconnect();
      skillsObs.disconnect();
      contactObs.disconnect();
    };
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === "en" ? "fr" : "en");
  };

  return (
    <div className={`${darkMode ? styles.dark : ""}`}>
      {/* Top Controls */}
      <div className={styles.topControls}>
        {/* Dark/Light Mode Toggle */}
        <button 
          className={styles.iconBtn}
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        
        {/* Language Toggle */}
        <button 
          className={styles.iconBtn}
          onClick={toggleLanguage}
          aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
          title={`${language === "en" ? "Français" : "English"}`}
        >
          {language === "en" ? "🇫🇷" : "🇺🇸"}
        </button>
        
        {/* Menu Button */}
        <button 
          className={`${styles.menuBtn} ${sidebarOpen ? styles.active : ""}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          title="Menu"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <h3>{text[language].Menu}</h3>
        </div>
        <div className={styles.sidebarNav}>
          <p onClick={() => { scrollTo(homeRef); setSidebarOpen(false); }}>
            <span className={styles.icon}>⌂</span>
            {text[language].home}
          </p>
          <p onClick={() => { scrollTo(projectsRef); setSidebarOpen(false); }}>
            <span className={styles.icon}>◉</span>
            {text[language].projects}
          </p>
          <p onClick={() => { scrollTo(skillsRef); setSidebarOpen(false); }}>
            <span className={styles.icon}>⚙</span>
            {text[language].skills}
          </p>
          <p onClick={() => { scrollTo(contactRef); setSidebarOpen(false); }}>
            <span className={styles.icon}>✉</span>
            {text[language].contact}
          </p>
        </div>
      </div>

      {/* Overlay - Click to close sidebar */}
      {sidebarOpen && (
        <div 
          className={styles.sidebarOverlay} 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Home Section */}
      <section ref={homeRef} className={`${styles.home} ${homeVisible ? styles.fadeSlide : ""}`}>
        <img src={profilePic} alt="Bensaad Soundous" className={`${styles.photo} ${homeVisible ? styles.fromLeft : ""} ${homeVisible ? styles.fadeSlide : ""}`} />
        <h1 className={`${styles.title} ${homeVisible ? styles.fromRight : ""} ${homeVisible ? styles.fadeSlide : ""}`}>BENSAAD Soundous</h1>
        <h2 className={`${styles.tagline} ${homeVisible ? styles.fromLeft : ""} ${homeVisible ? styles.fadeSlide : ""}`}>{text[language].tagline}</h2>
        <p className={`${styles.bio} ${homeVisible ? styles.fromRight : ""} ${homeVisible ? styles.fadeSlide : ""}`}>{text[language].bio}</p>
        <div className={styles.btns}>
          <button onClick={() => scrollTo(projectsRef)} className={styles.btn}>{text[language].projects}</button>
          <button onClick={() => scrollTo(skillsRef)} className={styles.btn}>{text[language].skills}</button>
          <button onClick={() => scrollTo(contactRef)} className={styles.btn}>{text[language].contact}</button>
        </div>
      </section>

      {/* Projects Section - Pass darkMode and language as props */}
      <section ref={projectsRef}>
        <Projects visible={projectsVisible} darkMode={darkMode} language={language} />
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className={styles.skills}>
        <h2 className={styles.heading}>{text[language].skillsTech}</h2>
        <div className={styles.skillsList}>
          {skills.map((skill, idx) => (
            <div key={idx} className={`${styles.category} ${skillsVisible ? styles.fadeSlide : ""} ${idx % 2 === 0 ? styles.fromLeft : styles.fromRight}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
              <h3>{skill.category}</h3>
              <p>{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className={styles.contact}>
        <h2 className={styles.heading}>{text[language].contactMe}</h2>
        <div className={styles.contactList}>
          {[
            { icon: <MdEmail />, text: "Personal:soundousbensaad@gmail.com", link: "mailto:soundousbensaad@gmail.com" },
            { icon: <MdEmail />, text: "University: soundous.bensaad@univ-constantine2.dz", link: "mailto:soundous.bensaad@univ-constantine2.dz" },
            { icon: <FaLinkedin />, text: "linkedin.com/in/soundous-bensaad", link: "https://www.linkedin.com/in/soundous-bensaad-30a3203a4/" },
            { icon: <FaInstagram />, text: "s_n_d_s_ben", link: "https://www.instagram.com/s_n_d_s_ben?igsh=dXVheHMxdmM3aTF6&utm_source=qr" },
            { icon: <FaFacebook />, text: "soundousben", link: "https://facebook.com/soundousben" },
            { icon: <FaPhone />, text: "+213551817219", link: "tel:+213551817219" }
          ].map((item, idx) => (
            <p key={idx} className={`${styles.contactItem} ${contactVisible ? styles.fadeSlide : ""} ${idx % 2 === 0 ? styles.fromLeft : styles.fromRight}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
              {item.icon}
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
            </p>
          ))}
          <button
            className={styles.sendBtn}
            onClick={() => navigate("/Contact")}
          >
            {text[language].sendMessage}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;