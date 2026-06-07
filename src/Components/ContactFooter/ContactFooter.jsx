import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowUp } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa6";
import './ContactFooter.css';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="contact-footer-section wrapper" id="contact">
     
      <div className="contact-header">
        <span className="contact-watermark">CONNECT</span>
        <span className="section-tag">GET IN TOUCH</span>
        <h2>Let's Craft Something <span>Exceptional Together</span></h2>
      </div>

      
      <div className="contact-container flex">
        
      
        <div className="contact-info-side">
          <div className="info-intro">
            <h3>Have a Project in Mind?</h3>
            <p>Whether you want to build a premium web application, design a user interface, or collaborate on educational content, drop me a message.</p>
          </div>

          <div className="contact-details-list">
            <div className="contact-info-card">
              <div className="contact-icon-box"><FiMail /></div>
              <div className="info-text">
                <span>Email Me</span>
                <a href="mailto:contact@ahosen.com">contact@ahosen.com</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box"><FiPhone /></div>
              <div className="info-text">
                <span>Call or WhatsApp</span>
                <a href="tel:+911234567890">+91 12345 67890</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-box"><FiMapPin /></div>
              <div className="info-text">
                <span>Location</span>
                <p>Kamarpukur, Hooghly, West Bengal, India</p>
              </div>
            </div>
          </div>

          <div className="social-connect-block">
            <h4>Follow My Work</h4>
            <div className="contact-social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-icon" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        
        <div className="contact-form-side">
          <form className="premium-contact-form" onSubmit={handleSubmit}>
            <div className="form-row-two">
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your Name"
                />
                <label>Your Name</label>
              </div>
              
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Your Email"
                />
                <label>Your Email</label>
              </div>
            </div>

            <div className="input-group">
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                placeholder="Subject"
              />
              <label>Subject</label>
            </div>

            <div className="input-group">
              <textarea 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              ></textarea>
              <label>Tell me about your project...</label>
            </div>

            <button type="submit" className="btn contact-submit-btn">
              Send Message <FiSend className="submit-icon" />
            </button>
          </form>
        </div>

      </div>

      
      <div className="merged-footer-bottom flex">
        <p className="copyright-txt">
          &copy; {new Date().getFullYear()} <span>Sk Arif Hosen</span>. All rights reserved.
        </p>
        
        <button 
          className="back-to-top-btn" 
          onClick={scrollToTop} 
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <div className="arrow-icon-box">
            <FiArrowUp />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ContactFooter;