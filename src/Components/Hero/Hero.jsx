import React, { useState, useEffect } from "react";
import HeroImg from '../../assets/hero.png';
import './Hero.css';

const Hero = () => {
  const words = ["Web Designer.", "UI & UX Designer.", "Frontend Developer."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="hero-section wrapper">
      <div className="flex hero-container">
        
        <div className="hero-content">
          <span className="sub-text">hello there!</span>
          <h1>
            <span className="green-text">i'm sk arif hosen,</span>
            <br />
            <span className="dynamic-text">{currentText}</span>
            <span className="cursor">|</span>
          </h1>
          <p>
            I am a passionate developer and designer focused on crafting clean, 
            interactive, and user-friendly digital experiences. Based in India. 
            
          </p>
          <div className="flex gap-2 hero-btns">
            <a href="https://hosenarif132-ops.github.io/MY-PROJECT/" className="btn">view my works</a>
            
            
            <a href="/cv.pdf" download="Sk_Arif_Hosen_CV.pdf" className="btn border-btn">
              download CV
            </a>
          </div>
        </div>

        
        <div className="hero-img">
          <div className="img-bg-effect">
            <img src={HeroImg} alt="Sk Arif Hosen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;