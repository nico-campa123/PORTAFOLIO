import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaPalette, FaRocket, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { number: '3+', label: 'Años de experiencia' },
    { number: '50+', label: 'Proyectos completados' },
    { number: '15+', label: 'Clientes satisfechos' },
    { number: '5+', label: 'Pasantias realizadas' }
  ];

  const interests = [
    { icon: <FaCode />, title: 'Clean Code', description: 'Escribo codigo mantenible y escalable' },
    { icon: <FaPalette />, title: 'UI/UX Design', description: 'Creo interfaces de usuario atractivas y funcionales' },
    { icon: <FaRocket />, title: 'Innovation', description: 'Exploro nuevas tecnologias y tendencias' }
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Sobre <span className="gradient-text"> mi</span>
            </motion.h2>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soy un programador full-stack dedicado, con mas de 3 años de experiencia en la industria.
            </motion.p>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Me especializo en soluciones de analisis de datos y desarrollo de software. Trabajando con las ultimas tecnologias para brindar los mejores resultados.
            </motion.p>

            <motion.div 
              className="stats-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-item glass"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="stat-number gradient-text">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-interests"
            variants={itemVariants}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="interests-title">What I Love</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div 
                  key={interest.title}
                  className="interest-item glass"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="interest-icon">{interest.icon}</div>
                  <h4 className="interest-title">{interest.title}</h4>
                  <p className="interest-description">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
