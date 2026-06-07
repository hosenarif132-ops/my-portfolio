import React from 'react';
import { FiLayout, FiCode, FiVideo, FiArrowUpRight } from "react-icons/fi"; 
import { FaArrowRightLong } from "react-icons/fa6";
import './Services.css';

const Services = ({ setProjectFilter }) => {
  const serviceData = [
    {
      id: 1,
      icon: <FiLayout />,
      title: "UI/UX & Web Design",
      category: "design",
      desc: "Creating visually stunning, modern, and user-centric designs in Figma that ensure an elite user experience.",
      tag: "Figma • Photoshop"
    },
    {
      id: 2,
      icon: <FiCode />,
      title: "Web Development",
      category: "development", 
      desc: "Building fast, highly responsive, and scalable web applications using React, Tailwind CSS, and WordPress.",
      tag: "React • Tailwind • WP"
    },
    {
      id: 3,
      icon: <FiVideo />,
      title: "Content Creation",
      category: "content", 
      desc: "Crafting high-quality educational videos, tech documentaries, and engaging visual stories for YouTube.",
      tag: "Video Editing • Scripting"
    }
  ];

  const handleCardClick = (category) => {
    if (setProjectFilter) {
      setProjectFilter(category); 
    }
   
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section wrapper" id="services">
      <div className="services-header">
        
        <span className="sub-text">my expertise</span>
        <h2>What I Do For <span>My Clients</span></h2>
        <p>Turning complex ideas into premium, high-converting digital products that look exceptional on every screen.</p>
      </div>

      <div className="services-grid">
        {serviceData.map((service) => (
          <div 
            className="service-card" 
            key={service.id}
            onClick={() => handleCardClick(service.category)} 
            style={{ cursor: 'pointer' }}
          >
            <div className="card-blur-effect"></div>
            
            <div className="service-icon">
              {service.icon}
            </div>
            
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            
            <div className="service-footer">
              <span className="service-tag">{service.tag}</span>
              <div className="service-link">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-view-all">
        <button 
          className="btn border-btn view-all-btn"
          onClick={() => handleCardClick('all')} 
        >
          view all projects <FiArrowUpRight className="btn-icon" />
        </button>
      </div>
    </section>
  );
};

export default Services;