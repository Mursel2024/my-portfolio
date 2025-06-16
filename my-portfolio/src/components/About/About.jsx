import React from "react";
import styles from "./About.module.css";
import profilePic from "../../assets/profile.jpg";
import {FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaJsSquare, FaPhp, FaDatabase, FaGitAlt} from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, label: "Html5" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaDatabase />, label: "MySQL" },
  { icon: <FaGitAlt />, label: "Git & GitHub" },
];

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.subtitle}>
        Combining front-end creativity with back-end logic to craft seamless
        digital experiences
      </p>
      <div className={styles.aboutContent}>
        <div className={styles.imageWrapper}>
          <img src={profilePic} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.description}>
            I'm a front-end developer with 4 years of experience building
            responsive, interactive interfaces using HTML, CSS, JavaScript, and
            React. I focus on clean, scalable UI components with modern tools
            like Redux and Vite. <br />
            I also have growing back-end skills in PHP and MySQL, including user
            authentication, secure password management, password reset features,
            and email integration via PHPmailer with Gmail app passwords. I
            design databases, integrate APIs, and implement server-side logic to
            create full-stack applications. <br />
            Currently, I’m developing a React-based university schedule system
            with a JSON-driven architecture, soon adding image-to-JSON
            conversion. I’m passionate about intuitive, user-focused products,
            clean code, and smart design.
          </p>

          <a href="/cv.pdf" className={styles.cvBtn} download>
            <span>Download CV</span>
          </a>
        </div>
      </div>
      <div className={styles.skillsRow}>
        {skills.map((skill, idx) => (
          <div className={styles.skillCard} key={idx}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <div className={styles.skillLabel}>{skill.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
