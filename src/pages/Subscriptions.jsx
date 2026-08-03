import React from 'react';
import { PageHero } from '../components/Sections';
import { ProductSection } from '../components/ProductCard';
import { LinkedInPremiumSection } from '../components/LinkedInPremiumSection';
import { linkedinPlans, allTools } from '../data/constants';

export const Subscriptions = () => {
  return (
    <>
      <PageHero 
        eyebrow="Subscriptions" 
        title="Choose the tool that fits your work" 
        description="Browse the available plans below. Product descriptions and availability are sample content and can be replaced with your final catalogue." 
      />
      <LinkedInPremiumSection />
      <ProductSection 
        eyebrow="Complete catalogue" 
        title="All digital tools" 
        description="Productivity, learning, security, creative and development subscriptions." 
        products={allTools} 
        theme="bluefade" 
      />
    </>
  );
};
