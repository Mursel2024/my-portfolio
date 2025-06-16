import React, { useState } from 'react';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import project5 from '../../assets/project5.jpg';
import project6 from '../../assets/project6.jpg';
import project7 from '../../assets/project7.jpg';
import project8 from '../../assets/project8.jpg';
import project9 from '../../assets/project9.jpg'
import project10 from '../../assets/project10.jpg';
import project11 from '../../assets/project11.jpg';
import project12 from '../../assets/project12.jpg';
import profilePic from '../../assets/profile.jpg';
import styles from './Portfolio.module.css';

// Portfolio kateqoriyaları
const categories = [
  { key: 'all', label: 'All' },
  { key: 'portfolio', label: 'Portfolios' },
  { key: 'landing', label: 'Landing Pages' },
  { key: 'uiux', label: 'UI/UX Designs' },
  { key: 'projects', label: 'Projects' },
];

// Portfolio layihələri
const projects = [
  { img: project1, name: 'Analog Clock', category: '', categoryLabel: 'Projects' },
  { img: project2, name: 'Animated Login', category: '', categoryLabel: 'UI/UX Design' },
  { img: project3, name: 'Calculator', category: '', categoryLabel: 'Projects' },
  { img: project4, name: 'University Website', category: '', categoryLabel: 'Landing Pages' },
  { img: project5, name: 'QR Code Reader', category: '', categoryLabel: 'Projects' },
  { img: project6, name: 'Photography Website', category: '', categoryLabel: 'Landing Pages' },
  { img: project7, name: 'Event Planner', category: '', categoryLabel: 'Projects' },
  { img: project8, name: 'Pomodoro Timer', category: '', categoryLabel: 'UI/UX Design' },
  { img: project9, name: 'University Exam Calculator', category: '', categoryLabel: 'Projects' },
  { img: project10, name: 'Personal Info', category: '', categoryLabel: 'Profile Details' },
  { img: project11, name: 'Facemash', category: '', categoryLabel: 'Landing Pages' },
  { img: project12, name: 'Online Quiz', category: '', categoryLabel: 'Projects' },
];


const Portfolio = () => {
    const [active, setActive]=useState('all');
    const [visibleCount, setVisibleCount]=useState(6);

 const filteredProjects = active === 'all' ? projects : projects.filter((p) => p.category === active);
 const visibleProjects=filteredProjects.slice(0, visibleCount);

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.title}>Portfolio</h2>

      {/* Kateqoriyalar */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`${styles.categoryBtn} ${active === cat.key ? styles.active : ''}`}
            onClick={() => {
              setActive(cat.key);
              setVisibleCount(6);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Layiheler */}
      <div className={styles.grid}>
        {visibleProjects.map((project, idx) => (
          <div className={styles.card} key={idx}>
            <img src={project.img} alt={project.name} className={styles.image} />
            <div className={styles.cardFooter}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectCategory}>{project.categoryLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {/* See More */}
      {visibleCount < filteredProjects.length && (
        <div className={styles.seeMoreWrapper}>
          <button className={styles.seeMoreBtn} onClick={()=> setVisibleCount((prev)=>prev+3)}>
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;