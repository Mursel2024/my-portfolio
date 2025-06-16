import React from "react";
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook} from "react-icons/fa";

const Footer=()=>{
    return(
        <footer className={styles.footer} id="footer">
            <div className={styles.logo}>
                <img src={logo} alt="Logo" style={{height: 60}} />
            </div>
            <nav className={styles.menu}>
                <a href="#hero">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About Me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact Me</a>
            </nav>
            <div className={styles.socials}>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://linkedin.com"><FaLinkedin /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://facebook.com"><FaFacebook /></a>
            </div>
            <hr className={styles.divider} />
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Mursel. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;