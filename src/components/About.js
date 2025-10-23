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
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '10+', label: 'Awards Won' }
  ];

  const interests = [
    { icon: <FaCode />, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: <FaPalette />, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: <FaRocket />, title: 'Innovation', description: 'Exploring new technologies and trends' },
    { icon: <FaHeart />, title: 'Passion', description: 'Love for creating digital solutions' }
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a passionate full-stack developer with over 3 years of experience creating 
              digital solutions that make a difference. My journey began with a curiosity 
              about how things work, which led me to explore the world of programming and design.
            </motion.p>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I specialize in modern web technologies and have a keen eye for design. 
              My goal is to bridge the gap between beautiful design and functional code, 
              creating experiences that users love.
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
