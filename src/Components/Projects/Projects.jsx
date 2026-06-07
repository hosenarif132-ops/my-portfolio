import React from 'react';
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Project1 from '../../assets/project1.jpg'; 
import Project2 from '../../assets/project2.jpg'; 
import Project3 from '../../assets/project3.jpg'; 
import './Projects.css';

const Projects = ({ projectFilter }) => {
  const allProjects = [
    {
      id: 1,
      title: "AgroZen — Organic Farming Platform",
      category: "development",
      desc: "A highly responsive web application built with React and Tailwind CSS. Features smooth GSAP animations and structured section layouts for premium agricultural business presentation.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      image: Project1,
      liveLink: "#",
      gitLink: "#"
    },
    {
      id: 2,
      title: "Vidyasagar Bus Terminal — Arambagh",
      category: "design",
      desc: "Complete UI/UX design and custom WordPress development for a modern transit hub. Focused on seamless theme customisation, fluid navigation, and strict brand guidelines.",
      tech: ["WordPress", "Figma", "UI/UX Design"],
      image: Project2,
      liveLink: "#",
      gitLink: "#"
    },
    {
      id: 3,
      title: "Gyaner Bhandar — Educational Docuseries",
      category: "content",
      desc: "Creative direction, high-fidelity scripting, and video post-production for a comprehensive General Knowledge documentary channel focusing on West Bengal's rich history.",
      tech: ["Video Editing", "Scripting", "Photoshop"],
      image: Project3,
      liveLink: "#",
      gitLink: "#"
    }
  ];

  const filteredProjects = projectFilter === 'all' || !projectFilter
    ? allProjects
    : allProjects.filter(project => project.category === projectFilter);

  return (
    <section className="projects-section wrapper" id="projects">
      <div className="projects-header">
        <span className="section-tag-line"></span>
        <span className="section-tag">SELECTED WORKS</span>
        <h2>Case Studies & <span>Featured Projects</span></h2>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div className={`project-row ${index % 2 === 1 ? 'reverse-row' : ''}`} key={project.id}>
            
            
            <div className="project-img-side">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-img-overlay">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="overlay-icon-btn" aria-label="View Live Project">
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>

            
            <div className="project-text-side">
              <span className="project-category-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
            
              <div className="project-tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              
              <div className="project-actions">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-btn-main">
                  View Live <FiArrowUpRight />
                </a>
                <a href={project.gitLink} target="_blank" rel="noreferrer" className="project-btn-sub" aria-label="View Source Code">
                  <FiGithub />
                </a>
              </div>
            </div>

          </div>
        ))}

        {filteredProjects.length === 0 && (
          <p className="no-projects-text">No projects available under this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;