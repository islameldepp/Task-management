import React, { useEffect, useState } from 'react';
import '../styles/FeatureCard.css';
import svg1 from '../assets/svg1.jpg';
import svg2 from '../assets/svg2.jpg';
import svg3 from '../assets/svg3.jpg';

const featureCard = [
  {
    image: svg1,
    h1: 'Integrate',
    p: 'The ability to quickly set up and customize workflows for just about anything.',
  },
  {
    image: svg2,
    h1: 'Collaborate',
    p: 'Manage projects, organize tasks, and build team spirit—all in one place.',
  },
  {
    image: svg3,
    h1: 'Succeed',
    p: 'Every single part of your task can be managed, tracked, and shared with teammates.',
  },
];

const FeatureCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(featureCard);
  }, []);

  return (
    <div className="feature-cards-container">
      {card.map((cardItem, index) => (
        <div key={index} className="feature-card">
          <img src={cardItem.image} alt={cardItem.h1} className="card-image" />
          <h2 className="card-title">{cardItem.h1}</h2>
          <p className="card-description">{cardItem.p}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
