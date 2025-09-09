import React, { useEffect, useState } from 'react';
import '../styles/BenefitsSection.css'; // تأكد من استيراد ملف CSS
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const benefitsSection = [
  {
    image: img1,
    span: 'Universal',
    h1: 'Build the workflow you want',
    p: 'Manage your boards using Drag-n-Drop, create additional boards and tasks',
  },
  {
    image: img2,
    span: 'Optimized',
    h1: 'Everything you need in one place',
    p: 'You can specify additional info in task description and assign users.',
  },
  {
    image: img3,
    span: 'Unlimited',
    h1: 'No limits for all users.',
    p: 'Unlimited kanban boards, columns and tasks.',
  },
];

const BenefitsSection = () => {
  const [benefit, setBenefit] = useState([]);

  useEffect(() => {
    setBenefit(benefitsSection);
  }, []);

  return (
    <div className="benefits-container">
      {benefit.map((benefitCard, index) => (
        <div key={index} className="benefit-card">
          <div className="benefit-image">
            <img src={benefitCard.image} alt={benefitCard.h1} />
          </div>
          <div className="benefit-content">
            <span className="benefit-span">{benefitCard.span}</span>
            <h1 className="benefit-h1">{benefitCard.h1}</h1>
            <p className="benefit-p">{benefitCard.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
