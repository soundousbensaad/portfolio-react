import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "HTML", "CSS"] },
    { category: "Frameworks", items: ["React", "Vite"] },
    { category: "Tools", items: ["Git", "Jest", "VS Code"] },
  ];

  return (
    <section className={styles.skills}>
      <h2 className={styles.heading}>Skills & Technologies</h2>
      {skills.map((skill, index) => (
        <div className={styles.category} key={index}>
          <h3>{skill.category}</h3>
          <p>{skill.items.join(", ")}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
