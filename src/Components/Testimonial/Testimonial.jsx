import React, { useState, useEffect, useRef } from 'react'; // 🟢 useRef যোগ করা হয়েছে
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      role: "CEO, Software Company",
      stars: 5,
      comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Founder, AgroZen Platform",
      stars: 5,
      comment: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Product Manager, Transit Hub",
      stars: 5,
      comment: "Magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 4,
      name: "Kristin Watson",
      role: "Director, Tech Solutions",
      stars: 5,
      comment: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const autoPlayRef = useRef(null); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 790) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalDots = Math.ceil(testimonials.length / itemsPerPage);

 
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); 
  }, [totalDots]);

  const startAutoPlay = () => {
    stopAutoPlay(); 
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalDots);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleNext = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % totalDots);
    startAutoPlay();
  };

  const handlePrev = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + totalDots) % totalDots);
    startAutoPlay();
  };

  const handleDotClick = (index) => {
    stopAutoPlay();
    setCurrentIndex(index);
    startAutoPlay();
  };

  return (
    <section className="testimonial-section wrapper" id="testimonials">
      <div className="testimonial-header">
        <span className="testimonial-watermark">REVIEWS</span>
        <span className="section-tag">CLIENT TESTIMONIALS</span>
        <h2>Testimonials That <span>Speaks To My Results</span></h2>
      </div>

      
      <div 
        className="slider-outer-wrapper"
        onMouseEnter={stopAutoPlay} 
        onMouseLeave={startAutoPlay} 
      >
        <button className="nav-arrow-btn prev-arrow" onClick={handlePrev} aria-label="Previous Slide">
          <FiChevronLeft />
        </button>

        <div className="slider-inner-window">
          <div 
            className="slides-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
          >
            {testimonials.map((item) => (
              <div 
                className="testimonial-slide-card" 
                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                key={item.id}
              >
                <div className="card-inner-glow">
                  <div className="card-timeline-indicator"></div>
                  <FaQuoteRight className="bg-quote-icon" />

                  <div className="client-profile-row">
                    <div className="client-avatar">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="client-meta">
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>

                  <div className="client-stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="client-comment-text">"{item.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-arrow-btn next-arrow" onClick={handleNext} aria-label="Next Slide">
          <FiChevronRight />
        </button>
      </div>

    
      <div className="slider-dots-panel">
        {[...Array(totalDots)].map((_, index) => (
          <button
            key={index}
            className={`slider-dot-node ${currentIndex === index ? 'dot-active' : ''}`}
            onClick={() => handleDotClick(index)} // 🟢 ডট ক্লিক আপডেট
            aria-label={`Go to slide group ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;