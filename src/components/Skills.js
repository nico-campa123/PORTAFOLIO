import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaGitAlt, FaDocker, FaAws, FaFigma, FaDatabase 
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Function to convert numeric level to proficiency label
  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Experto';
    if (level >= 80) return 'Avanzado';
    if (level >= 70) return 'Proficiente';
    if (level >= 60) return 'Intermedio';
    return 'Beginner';
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61dafb' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#f7df1e' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572b6' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
        { name: 'Python', icon: <FaPython />, level: 75, color: '#3776ab' },
        { name: 'SQL', icon: <FaDatabase />, level: 85, color: '#336791' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#f05032' },
        { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ed' },
        { name: 'AWS', icon: <FaAws />, level: 65, color: '#ff9900' },
        { name: 'Figma', icon: <FaFigma />, level: 80, color: '#f24e1e' }
      ]
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
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="skills-header"
            variants={itemVariants}
          >
            <h2 className="section-title">
              Mis <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="section-description">
              Estas son las tecnologias y herramientas que uso para llevar ideas a la vida.
            </p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            variants={itemVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="skill-category glass"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-proficiency">{getProficiencyLabel(skill.level)}</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          style={{ background: `linear-gradient(45deg, ${skill.color}, ${skill.color}80)` }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
