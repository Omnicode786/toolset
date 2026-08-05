import React from 'react';
import { PageHero } from '../components/Sections';
import { ProductSection } from '../components/ProductCard';
import { LinkedInPremiumSection } from '../components/LinkedInPremiumSection';
import { allTools } from '../data/constants';

export const Subscriptions = () => {
  return (
    <>
      <PageHero
        eyebrow="Subscriptions"
        title="Choose the plan that matches your work"
        description="Browse the complete catalogue with the exact plan, duration and PKR price shown for every available option."
      />
      <LinkedInPremiumSection />
      <ProductSection
        eyebrow="Complete catalogue"
        title="All digital tools"
        description="Each tool includes a simple explanation of what it does and how professionals, students and creators commonly use it."
        products={allTools}
        theme="bluefade"
      />
    </>
  );
};
