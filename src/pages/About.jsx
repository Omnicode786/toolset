import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';
import bg2 from '../assets/bg-2.png';

export const About = () => {
  const values = [
    [
      'Our mission',
      'Our mission is to make professional digital tools more accessible, affordable and easier to understand for students, freelancers, creators and businesses.',
    ],
    [
      'What we offer',
      'We provide a diverse range of subscriptions, including SEO solutions, Amazon tools, video animation software, writing tools, graphic design tools and WordPress themes and plugins.',
    ],
    [
      'Trusted support',
      'Our supportive team is always ready to guide you before and after your purchase, helping you choose the right plan and activation method with confidence.',
    ],
  ];

  const offerings = [
    ['SEO tools', 'Enhance your website performance and visibility with proven search engine optimization solutions.'],
    ['Video animation tools', 'Turn your ideas into polished visuals with modern tools for motion graphics and animation.'],
    ['Graphic design tools', 'Create eye-catching visuals for branding, content and creative projects.'],
    ['Amazon tools', 'Improve efficiency, optimize sales workflows and support growth on Amazon-based projects.'],
  ];

  const reasons = [
    ['Wide selections', 'We offer a broad range of tools to support different creative, marketing and business needs.'],
    ['Affordable pricing', 'Premium subscriptions are available at prices that make professional tools more reachable.'],
    ['Authentic subscriptions', 'We focus on genuine, up-to-date subscriptions that customers can rely on.'],
    ['24/7 support', 'Our dedicated team is available around the clock to answer your questions and assist you.'],
  ];

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Premium digital tool subscriptions that help your work grow"
        description="All Premium Tools is a trusted destination for affordable and reliable access to professional software, creative tools and business-ready solutions."
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
            <h2>Your trusted partner for premium digital subscriptions</h2>
            <p className="body-copy">
              All Premium Tools is a globally trusted provider of premium digital tool subscriptions. We offer solutions for SEO, Amazon, video animation, writing, graphic design, WordPress themes and plugins, and more.
            </p>
            <p className="body-copy">
              With more than five years of experience, we focus on genuine products, simple guidance and dependable support so creators, freelancers and businesses can work with confidence.
            </p>
            <ul className="plain-checks">
              <li><Icon name="check" size={18} /> Official reseller of Internet Download Manager</li>
              <li><Icon name="check" size={18} /> Affordable subscriptions designed for everyday professional use</li>
              <li><Icon name="check" size={18} /> Friendly support that helps before and after you order</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section product-section lavender">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Our mission</p>
            <h2>Making premium digital tools accessible for everyone</h2>
            <p>We are committed to providing professional solutions that help people and businesses grow with confidence.</p>
          </div>
          <div className="value-grid">
            {values.map(([title, text], index) => (
              <article key={title} className="value-card reveal">
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">What we offer</p>
            <h2>Professional tools for design, growth and content creation</h2>
            <p>Choose from a curated selection of tools that support your workflow and help you do more with less effort.</p>
          </div>
          <div className="value-grid">
            {offerings.map(([title, text], index) => (
              <article key={title} className="value-card reveal">
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-section bluefade">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Why choose us</p>
            <h2>A dependable partner focused on your success</h2>
            <p>From authentic subscriptions to round-the-clock support, every part of our service is designed to make your experience smooth and dependable.</p>
          </div>
          <div className="value-grid">
            {reasons.map(([title, text], index) => (
              <article key={title} className="value-card reveal">
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-cta panel panel-blue reveal">
            <div>
              <p className="eyebrow">Your next step</p>
              <h2>Maximize your productivity with Tools Tender</h2>
              <p>Embrace your full potential with digital solutions designed to enhance creativity, simplify tasks and help you achieve more.</p>
            </div>
            <div className="button-row">
              <NavLink to="/contact" className="button button-primary">
                Contact us <Icon name="arrow" size={16} />
              </NavLink>
              <NavLink to="/contact" className="about-brand-link">
                Get in touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
