import React from 'react';
import AboutImg from '../../assets/about-img.png'; 
import './About.css';

const About = () => {
  const statsData = [
    { id: 1, count: "01+", title: "Years of Active Experience" },
    { id: 2, count: "15+", title: "Digital Projects Delivered" },
    { id: 3, count: "10+", title: "Global Happy Clients" }
  ];

  return (
    <section className="about-section wrapper" id="about">
      {/* background*/}
      <div className="about-bg-glow"></div>

      <div className="about-container">
        
     
        <div className="about-left-side">
          <div className="modern-image-frame">
            <img src={AboutImg} alt="Sk Arif Hosen" />
            <div className="frame-line"></div>
          </div>
        </div>

        
        <div className="about-right-side">
          <div className="section-tag-wrapper">
            {/* <span className="tag-line"></span> */}
            <span className="sub-text">WHO I AM</span>
          </div>
          
          <h2 className="premium-heading">
            Driven by Design, <br />
            Defined by <span className="accent-text">Code.</span>
          </h2>
          
          <div className="about-biography">
            <p>
              I am Sk Arif Hosen, a digital craftsman specializing in bridging the gap between 
              high-end visual aesthetics and robust full-stack development. Based in India, I engineer 
              pixel-perfect layouts using React, Tailwind CSS, and WordPress.
            </p>
            <p>
              I don't just build websites; I design digital ecosystems that offer fluid responsiveness, 
              intuitive user journeys, and elite brand experiences.
            </p>
          </div>

        
          <div className="minimal-stats-row">
            {statsData.map((stat) => (
              <div className="minimal-stat-item" key={stat.id}>
                <span className="stat-number">{stat.count}</span>
                <span className="stat-label">{stat.title}</span>
                <div className="stat-indicator-line"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;