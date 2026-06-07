import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
import './Headline.css';

const Headline = () => {
  return (
    <section className='headline'>
      <div className="moving-text">
        
        <div className="container">
          <h5>web design</h5>
          <FaStarOfLife className="star-icon" />
          <h5>App design</h5>
          <FaStarOfLife className="star-icon" />
          <h5>web Development</h5>
          <FaStarOfLife className="star-icon" />
          <h5>figma design</h5>
          <FaStarOfLife className="star-icon" />
        </div>
        
        
        <div className="container">
          <h5>web design</h5>
          <FaStarOfLife className="star-icon" />
          <h5>App design</h5>
          <FaStarOfLife className="star-icon" />
          <h5>web Development</h5>
          <FaStarOfLife className="star-icon" />
          <h5>figma design</h5>
          <FaStarOfLife className="star-icon" />
        </div>
      </div>
    </section>
  )
}

export default Headline;