import React from 'react';
import { LuGraduationCap } from "react-icons/lu";
import './Education.css';

const Education = () => {
  
  const qualifications = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      institution: "Moople Institute of Animation and Design",
      status: "Ongoing Course",
      duration: "2024-2026",
      extra: null
    },
    {
      id: 2,
      title: "Bachelor of Computer Science",
      institution: "Sri Ramkrishna Sarada Vidya Mahapitha",
      university: "The University of Burdwan",
      duration: "2020-2023",
      extra: "CGPA: 8.78 / 10.0 (82.8%)"
    },
    {
      id: 3,
      title: "Higher Secondary Education (12th)",
      institution: "Tarahat Saradamoni High School (H.S) | WBCHSE",
      duration: "2018-2020",
      extra: "Marks: 406 / 500 (81.2%)"
    },
    {
      id: 4,
      title: "Secondary Education (10th)",
      institution: "Ramkrishna Mission Sarada Vidyapith | WBBSE",
      duration: "2017-2018",
      extra: "Marks: 546 / 700 (78%)"
    }
  ];

  return (
    <section className="education-section wrapper" id="education">
      <div className="education-header">
        <span className="section-tag">LEARNING CREDENTIALS</span>
        <h2>Educational <span>Qualifications</span></h2>
      </div>

      <div className="timeline-container-2col">
       
        <div className="center-timeline-line"></div>

        <div className="timeline-items-2col">
          {qualifications.map((item, index) => (
           
            <div className={`timeline-item-2col ${index % 2 === 0 ? 'left-item' : 'right-item'}`} key={item.id}>
              
             
              <div className="timeline-node-center">
                <div className="node-dot-center"></div>
              </div>

              
              <div className="education-premium-card">
                <div className="card-top-flex">
                  <div className="degree-title-block">
                    <LuGraduationCap className="degree-card-icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <span className="duration-badge-txt">{item.duration}</span>
                </div>

                <div className="card-body-block">
                  <h4>{item.institution}</h4>
                  {item.university && <p className="university-txt">{item.university}</p>}
                  {item.status && <span className="status-gold-badge">{item.status}</span>}
                  
                  {item.extra && (
                    <div className="score-box-badge">
                      <span>{item.extra}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;