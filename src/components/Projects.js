import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['JavaScript', 'API', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and glassmorphism design.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content management.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MySQL', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

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

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="projects-header"
            variants={itemVariants}
          >
            <h2 className="section-title">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-description">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={itemVariants}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''} glass`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <div className="project-image">
                  <div className="placeholder-image">
                    <FaCode className="placeholder-icon" />
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
