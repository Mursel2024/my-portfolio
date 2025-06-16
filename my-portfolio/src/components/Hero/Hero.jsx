import React, { use, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import profilePic from "../../assets/profile.jpg";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "UI/UX Designer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length - 1));
        }, 30);
      } else {
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <p className={styles.greeting}>Hi I am</p>
        <h2 className={styles.name}>Mursel</h2>
        <h1 className={styles.title}>
          <span className={styles.typewriter}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </h1>

        <div className={styles.socials}>
          <a href="https://instagram.com" aria-label="Instagram" className={styles.socialIcon}><FaInstagram /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.socialIcon}><FaLinkedin /></a>
          <a href="https://twitter.com" aria-label="Twitter" className={styles.socialIcon}><FaTwitter /></a>
          <a href="https://facebook.com" aria-label="Facebook" className={styles.socialIcon}><FaFacebook /></a>
        </div>

        <div className={styles.buttons}>
          <button className={styles.hireBtn} onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Hire Me</button>
          <a href="/cv.pdf" className={styles.cvBtn} download>
            <span>Download CV</span>
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statText}>Years of Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statText}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statText}>Live Websites</span>
          </div>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={profilePic} alt="Mursel" className={styles.profileImage} />
      </div>
    </section>
  );
};

export default Hero;
