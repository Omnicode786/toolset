import React from 'react';
import { Hero, Procedure, Payments, Stats, WhyChooseUs } from '../components/Sections';
import { ProductSection } from '../components/ProductCard';
import { LinkedInPremiumSection } from '../components/LinkedInPremiumSection';
import { allTools } from '../data/constants';

export const Home = () => {
  const featuredTools = allTools
    .filter((tool, index, tools) => tools.findIndex((item) => item.title === tool.title) === index)
    .slice(0, 6);

  return (
    <>
      <Hero />
      <Procedure />
      <LinkedInPremiumSection limit={3} />
      <ProductSection
        title="All Premium Tools"
        description="Explore practical AI, design, video, productivity, learning, development and privacy tools with clear plan details."
        products={featuredTools}
        theme="bluefade"
        viewAll
      />
      <Payments />
      <Stats />
      <WhyChooseUs />
    </>
  );
};
