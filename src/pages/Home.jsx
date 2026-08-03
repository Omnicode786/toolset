import React from 'react';
import { Hero, Procedure, Payments, Stats, WhyChooseUs } from '../components/Sections';
import { ProductSection } from '../components/ProductCard';
import { LinkedInPremiumSection } from '../components/LinkedInPremiumSection';
import { linkedinPlans, allTools } from '../data/constants';

export const Home = () => {
  return (
    <>
      <Hero />
      <Procedure />
      <LinkedInPremiumSection limit={3} />
      <ProductSection 
        title="All Premium Tools" 
        description="A simple selection of productivity, learning, security and creative tools." 
        products={allTools.filter((v, i, a) => a.findIndex(t => t.mark === v.mark) === i).slice(0, 6)} 
        theme="bluefade" 
        viewAll={true} 
      />
      <Payments />
      <Stats />
      <WhyChooseUs />
    </>
  );
};
