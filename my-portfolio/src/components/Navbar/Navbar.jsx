import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import styles from "../Navbar/Navbar.module.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About Me" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact Me" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Menü açıq olanda body scroll olmasın
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logo}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
        aria-label="Scroll to top"
      >
        <img src={logo} alt="Logo" style={{ height: 50 }} />
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`${styles.menuItem} ${
                activeSection === section.id ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(section.id);
              }}
            >
              {section.label}
            </a>
          </li>
        ))}
        <li className={styles.mobileHireBtn}>
          <button
            className={styles.hireBtn}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </button>
        </li>
      </ul>

      <div className={styles.desktopHireBtn}>
        <button
          className={styles.hireBtn}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
