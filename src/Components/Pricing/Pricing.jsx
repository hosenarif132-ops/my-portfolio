import React from 'react';
import { FiCheck, FiArrowUpRight, FiZap } from "react-icons/fi";
import './Pricing.css';

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      plan: "Hourly Rate",
      price: "$25",
      unit: "/ Hour",
      desc: "Best for short-term tasks, consultation, and urgent bug fixing.",
      features: [
        { text: "Custom Web Design & UX", active: true },
        { text: "Clean React / WordPress Code", active: true },
        { text: "Responsive Mobile Layout", active: true },
        { text: "Premium Animation Setup", active: false },
        { text: "24/7 Priority Support", active: false }
      ],
      popular: false,
      btnText: "Start Hourly"
    },
    {
      id: 2,
      plan: "Monthly Retainer",
      price: "$2,500",
      unit: "/ Month",
      desc: "Perfect for ongoing projects, full-stack web development, and design updates.",
      features: [
        { text: "Custom Web Design & UX", active: true },
        { text: "Clean React / WordPress Code", active: true },
        { text: "Responsive Mobile Layout", active: true },
        { text: "Premium Animation Setup", active: true },
        { text: "24/7 Priority Support", active: false }
      ],
      popular: true, 
      btnText: "Hire Monthly"
    },
    {
      id: 3,
      plan: "Fixed Project",
      price: "$5,000",
      unit: "/ Project",
      desc: "Ideal for complete end-to-end premium websites built from scratch.",
      features: [
        { text: "Custom Web Design & UX", active: true },
        { text: "Clean React / WordPress Code", active: true },
        { text: "Responsive Mobile Layout", active: true },
        { text: "Premium Animation Setup", active: true },
        { text: "24/7 Priority Support", active: true }
      ],
      popular: false,
      btnText: "Start Project"
    }
  ];

  return (
    <section className="pricing-section wrapper" id="pricing">
      
      <div className="pricing-header">
        <span className="pricing-watermark">PRICING</span>
        <span className="section-tag">INVESTMENT MODEL</span>
        <h2>Predictable Plans, <span>Elite Quality</span></h2>
      </div>

     
      <div className="pricing-grid">
        {pricingData.map((card) => (
          <div className={`pricing-card ${card.popular ? 'popular-highlight' : ''}`} key={card.id}>
            
            
            {card.popular && (
              <div className="popular-badge">
                <FiZap /> MOST POPULAR
              </div>
            )}
            
            <div className="pricing-card-blur"></div>

          
            <div className="pricing-card-top">
              <span className="plan-name">{card.plan}</span>
              <div className="price-block">
                <h3>{card.price}</h3>
                <span className="price-unit">{card.unit}</span>
              </div>
              <p className="plan-desc">{card.desc}</p>
            </div>

           
            <ul className="pricing-features-list">
              {card.features.map((feature, index) => (
                <li key={index} className={feature.active ? 'feature-available' : 'feature-disabled'}>
                  <div className="check-icon-box">
                    <FiCheck />
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* action btn */}
            <div className="pricing-card-bottom">
              <button className={`pricing-btn ${card.popular ? 'btn-filled' : 'btn-outlined'}`}>
                {card.btnText} <FiArrowUpRight className="btn-arrow" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;