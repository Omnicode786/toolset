import React from 'react';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';
import bg2 from '../assets/bg-2.png';

export const About = () => {
  const values = [
    [
      'Our mission',
      'Our mission is to make useful professional tools easier to understand and more affordable for students, freelancers, creators and businesses.',
    ],
    [
      'What we offer',
      'The catalogue covers AI, design, video, productivity, development, learning, professional networking and online privacy tools.',
    ],
    [
      'Human support',
      'Customers can ask about the plan type, delivery method and activation process before paying, so they know what they are ordering.',
    ],
  ];

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Useful digital tools, explained in a simple way"
        description="All Premium Tools helps people compare practical subscriptions for work, learning, design, content creation and business growth."
        bgImage={bg2}
      />

      <section className="section">
        <div className="container split-grid">
          <img
            className="about-image reveal"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=84"
            alt="A team working together"
          />
          <div className="reveal delay-1">
            <p className="eyebrow">Who we are</p>
            <h2>A straightforward place to find the tools your work needs</h2>
            <p className="body-copy">
              We provide access to a focused range of digital subscriptions, including AI assistants, design software,
              video tools, development platforms, learning services, LinkedIn plans and privacy tools.
            </p>
            <p className="body-copy">
              Every listing shows the exact plan and price, followed by a short explanation of what the tool does and
              how it is commonly used. This makes it easier to compare options before contacting the support team.
            </p>
            <ul className="plain-checks">
              <li><Icon name="check" size={18} /> Exact plan names and prices in PKR</li>
              <li><Icon name="check" size={18} /> Clear explanations without unnecessary technical language</li>
              <li><Icon name="check" size={18} /> Direct support before ordering and during activation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section product-section lavender">
        <div className="container value-grid">
          {values.map(([title, text], index) => (
            <article key={title} className="value-card reveal">
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
