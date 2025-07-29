import React from 'react';
import './CardSection.css';
import card1 from '../assets/4.jpg';
import card2 from '../assets/5.jpg';
import card3 from '../assets/6.jpg';

function CardSection() {
  return (
    <div className="card-section">
      <div className="card">
        <img src={card1} alt="Card 1" />
        <h3>Card Title One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="card">
        <img src={card2} alt="Card 2" />
        <h3>Card Title Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="card">
        <img src={card3} alt="Card 3" />
        <h3>Card Title Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default CardSection;
