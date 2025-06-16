import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaServer, FaChartLine, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "I design modern, responsive, and user-friendly web interfaces.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "I build secure and performant server-side solutions.",
  },
  {
    icon: <FaChartLine />,
    title: "SEO Optimization",
    desc: "I optimize your site to rank high in search engines.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "I provide attractive designs that enhance the user experience.",
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.title}>Services</h2>
      <p className={styles.subtitle}>
        The main services I provide for you
      </p>
      <div className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <div className={styles.serviceCard} key={idx}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
