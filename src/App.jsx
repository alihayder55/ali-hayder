import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';
import profilePic from './assets/mypic.JPG';
import { FaUser, FaBriefcase, FaLaptopCode, FaEnvelope, FaGithub, FaSun, FaMoon, FaWhatsapp, FaInstagram, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

const AnimatedSection = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      <div className="theme-toggle-container">
        <FaSun className={`theme-icon ${theme === 'light' ? 'active' : ''}`} />
        <label className="theme-slider">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
          <span className="slider-thumb"></span>
        </label>
        <FaMoon className={`theme-icon ${theme === 'dark' ? 'active' : ''}`} />
      </div>

      <header className="hero-section">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <img src={profilePic} alt="Ali Al-Dulaimi" className="profile-picture" />
        </motion.div>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}>
          Ali Hayder
        </motion.h1>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
          Electronic and Communications Engineer
        </motion.p>
      </header>

      <main>
        <AnimatedSection className="info-section">
          <h2><FaUser /> About Me</h2>
          <p className="about-me-text">Highly motivated and results-oriented individual with a strong ability to meet deadlines. Proven project management skills, demonstrated by successful completion of (Exploration Robot using Artificial Intelligence) and recognition from faculty. Possessing a keen learning agility and exceptional interpersonal abilities, I thrive in collaborative environments.</p>
        </AnimatedSection>

        <AnimatedSection className="info-section">
          <h2><FaBriefcase /> Experience</h2>
          <div className="card-grid">
            <div className="experience-card">
              <h3>Engineer at Hikayati Center</h3>
              <p>2023 - 2025</p>
              <ul>
                <li>Museum artifact conservation</li>
                <li>Workshop development and delivery</li>
                <li>IT Engineer</li>
              </ul>
              <a 
                href="https://aynyateem.com/ongoing-charity/hikayati/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
            <div className="experience-card">
              <h3>Engineer at Green Coding Club</h3>
              <p>2023 - 2024</p>
              <ul>
                <li>Web developer</li>
                <li>Artificial intelligence developer</li>
                <li>Network engineer</li>
              </ul>
              <a 
                href="https://www.instagram.com/green_coding_club/?hl=ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
            <div className="experience-card">
              <h3>Swibit</h3>
              <p>2024 - PRESENT</p>
              <ul>
                <li>Project Manager</li>
                <li>Web & App Developer</li>
              </ul>
              <a 
                href="https://www.swibit.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
            <div className="experience-card">
              <h3>Altronix</h3>
              <p>2024 - PRESENT</p>
              <ul>
                <li>Owner</li>
              </ul>
              <a 
                href="https://www.instagram.com/altronixiq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="info-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >HTML5</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >CSS3</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >JavaScript</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >React.js</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >React Native</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Python</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >C++</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Node.js</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >PHP</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >MySQL</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Laravel</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Redux.js</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >WordPress</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Android</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Git</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >GitHub</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >GitLab</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Networking</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >MATLAB</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >FPGA</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >VHDL</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Verilog</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Odoo</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Vite</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Arduino</motion.div>
            <motion.div 
              className="skill-card" 
              whileHover={{ 
                scale: 1.05,
                y: -5
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Supabase</motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="info-section">
          <h2><FaLaptopCode /> Projects</h2>
          <div className="card-grid">
            <div className="project-card">
              <h3>Exploration Robot using AI</h3>
              <p>A robot that uses AI to explore its surroundings.</p>
              <a 
                href="https://github.com/alihayder55/AI-Robot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
            <div className="project-card">
              <h3>3D Maze Solver using FPGA Board</h3>
              <p>A project that solves a 3D maze using an FPGA board.</p>
              <a 
                href="https://github.com/alihayder55/FPGA-Robot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
            <div className="project-card">
              <h3>Bayt Iraqi Application</h3>
              <p>I was one of the developers and the project manager before the launch.</p>
              <a 
                href="https://apps.apple.com/us/app/baytiraqi-real-estate-in-iraq/id6502549420" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
            <div className="project-card">
              <h3>Odoo ERP Project</h3>
              <p>I was the developer and project manager, customizing the workflow and digitizing it.</p>
              <a 
                href="https://www.odoo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="info-section contact-section">
          <h2>Contact</h2>
          <p>Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.</p>
          <div className="contact-links">
            <a href="mailto:aliali123ali267@gmail.com" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/alihayder55" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://wa.me/9647810277890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://instagram.com/8e.ali" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/alihaider2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;
