import React from 'react';
import FeatureCard from '../components/FeatureCard';
import BenefitsSection from '../components/BenefitsSection';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <FeatureCard />
      <BenefitsSection />
    </>
  );
};

export default Home;
