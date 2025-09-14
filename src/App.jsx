import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';
import profilePic from './assets/mypic_optimized.jpg';
import { FaUser, FaBriefcase, FaLaptopCode, FaEnvelope, FaGithub, FaSun, FaMoon, FaWhatsapp, FaInstagram, FaLinkedin, FaExternalLinkAlt, FaLanguage } from 'react-icons/fa';
import { useI18n } from './i18n.jsx';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 20 },
  },
};

const AnimatedSection = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionClassName = `${className}${inView ? ' in-view' : ''}`;

  return (
    <motion.section
      ref={ref}
      className={sectionClassName}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const { t, language, setLanguage } = useI18n();
  const [theme, setTheme] = useState('dark');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const langLabel = language === 'en' ? 'EN' : language === 'ar' ? 'AR' : 'ES';

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

      <div className="language-select" onMouseLeave={() => setIsLangOpen(false)}>
        <button
          className="language-button"
          onClick={() => setIsLangOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={isLangOpen}
        >
          <FaLanguage />
          <span>{langLabel}</span>
        </button>
        {isLangOpen && (
          <motion.ul
            className="language-menu"
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <li role="menuitem">
              <button onClick={() => { setLanguage('en'); setIsLangOpen(false); }}>English</button>
            </li>
            <li role="menuitem">
              <button onClick={() => { setLanguage('ar'); setIsLangOpen(false); }}>العربية</button>
            </li>
            <li role="menuitem">
              <button onClick={() => { setLanguage('es'); setIsLangOpen(false); }}>Español</button>
            </li>
          </motion.ul>
        )}
      </div>

      <header className="hero-section">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <img src={profilePic} alt={t('hero.name')} className="profile-picture" />
        </motion.div>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}>
          {t('hero.name')}
        </motion.h1>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
          {t('hero.tagline')}
        </motion.p>
      </header>

      <main>
        <AnimatedSection className="info-section">
          <h2><FaUser /> {t('sections.about')}</h2>
          <p className="about-me-text">{t('about.text')}</p>
        </AnimatedSection>

        <AnimatedSection className="info-section">
          <h2><FaBriefcase /> {t('sections.experience')}</h2>
          <motion.div className="card-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="experience-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('experience.hikayati.title')}</h3>
              <p>{t('experience.hikayati.period')}</p>
              <ul>
                <li>{t('experience.hikayati.items.0')}</li>
                <li>{t('experience.hikayati.items.1')}</li>
                <li>{t('experience.hikayati.items.2')}</li>
              </ul>
              <a 
                href="https://aynyateem.com/ongoing-charity/hikayati/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
            <motion.div className="experience-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('experience.green.title')}</h3>
              <p>{t('experience.green.period')}</p>
              <ul>
                <li>{t('experience.green.items.0')}</li>
                <li>{t('experience.green.items.1')}</li>
                <li>{t('experience.green.items.2')}</li>
              </ul>
              <a 
                href="https://www.instagram.com/green_coding_club/?hl=ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
            <motion.div className="experience-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('experience.swibit.title')}</h3>
              <p>{t('experience.swibit.period')}</p>
              <ul>
                <li>{t('experience.swibit.items.0')}</li>
                <li>{t('experience.swibit.items.1')}</li>
              </ul>
              <a 
                href="https://www.swibit.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
            <motion.div className="experience-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('experience.altronix.title')}</h3>
              <p>{t('experience.altronix.period')}</p>
              <ul>
                <li>{t('experience.altronix.items.0')}</li>
              </ul>
              <a 
                href="https://www.instagram.com/altronixiq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="info-section">
          <h2>{t('sections.skills')}</h2>

          <h3 style={{ margin: '0 0 1rem 0' }}>{t('sections.technicalSkills')}</h3>
          <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>HTML5</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>CSS3</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>JavaScript</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>React.js</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>React Native</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Python</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>C++</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Node.js</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>PHP</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>MySQL</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Laravel</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Redux.js</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>WordPress</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Android</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Git</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>GitHub</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>GitLab</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Networking</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>MATLAB</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>FPGA</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>VHDL</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Verilog</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Odoo</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Vite</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Arduino</motion.div>
            <motion.div className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>Supabase</motion.div>
          </motion.div>

          <h3 style={{ margin: '2rem 0 1rem 0' }}>{t('sections.softSkills')}</h3>
          <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {Array.from({ length: 10 }).map((_, idx) => (
              <motion.div key={`soft-${idx}`} className="skill-card" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                {t(`softSkills.items.${idx}`)}
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="info-section">
          <h2><FaLaptopCode /> {t('sections.projects')}</h2>
          <motion.div className="card-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('projects.aiRobot.title')}</h3>
              <p>{t('projects.aiRobot.desc')}</p>
              <a 
                href="https://github.com/alihayder55/AI-Robot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
            <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('projects.fpga.title')}</h3>
              <p>{t('projects.fpga.desc')}</p>
              <a 
                href="https://github.com/alihayder55/FPGA-Robot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
            <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('projects.bayt.title')}</h3>
              <p>{t('projects.bayt.desc')}</p>
              <a 
                href="https://apps.apple.com/us/app/baytiraqi-real-estate-in-iraq/id6502549420" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
            <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
              <h3>{t('projects.odoo.title')}</h3>
              <p>{t('projects.odoo.desc')}</p>
              <a 
                href="https://www.odoo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                {t('common.view')} <FaExternalLinkAlt />
              </a>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="info-section contact-section">
          <h2>{t('sections.contact')}</h2>
          <p>{t('contact.intro')}</p>
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
