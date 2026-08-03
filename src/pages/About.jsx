import React from 'react';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';
import bg2 from '../assets/bg-2.png';

export const About = () => {
  const values = [
    ['Simple catalogue', 'Products are grouped clearly so visitors can understand the options without digging through long pages.'],
    ['Clear information', 'Every product explains its delivery method, availability and basic purpose before contact.'],
    ['Human support', 'Customers can ask questions and confirm details before they place an order.'],
  ];
  return (
    <>
      <PageHero 
        eyebrow="About us" 
        title="A simple place to explore useful digital tools" 
        description="The website is designed around clear product information, easy comparison and direct support." 
        bgImage={bg2}
      />
      <section className="section">
        <div className="container split-grid">
          <img className="about-image reveal" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=84" alt="Team working together" />
          <div className="reveal delay-1">
            <p className="eyebrow">Our approach</p>
            <h2>Keep the buying journey easy to follow</h2>
            <p className="body-copy">Instead of using complicated pages, the website follows a direct flow: browse, understand, ask and proceed. The layout intentionally stays close to the original reference design.</p>
            <ul className="plain-checks">
              <li><Icon name="check" size={18} /> Clear product categories</li>
              <li><Icon name="check" size={18} /> Visible availability status</li>
              <li><Icon name="check" size={18} /> Simple contact and support flow</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section product-section lavender">
        <div className="container value-grid">
          {values.map(([title, text], i) => (
            <article key={i} className="value-card reveal">
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
