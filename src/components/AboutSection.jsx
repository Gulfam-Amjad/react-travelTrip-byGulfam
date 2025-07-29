import React from 'react';
import './AboutSection.css';
import aboutImg from '../assets/1.jpg'; // Replace with your image file

function AboutSection() {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={aboutImg} alt="About Us" />
      </div>
      <div className="about-right">
        <h2>Who We Are</h2>
        <p>
          We are passionate travelers and developers building seamless experiences 
          for your next adventure. Our platform helps you discover the world in the 
          most engaging and simplest way.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default AboutSection;
