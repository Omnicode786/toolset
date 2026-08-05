import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';
import { whatsappLink } from '../data/constants';
import { FaShieldAlt, FaBolt, FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from 'framer-motion';


export const Hero = () => (
  <section className="container hero-grid section-top">
    <div className="hero-copy panel panel-blue reveal">
      <h1 >Premium digital tools for work, learning and creativity</h1>
      <p className="hero-trust">Clear plans, direct support and straightforward ordering</p>
      <div className="trust-points">
        <span>
          <FaShieldAlt size={15} />
          Clear Plan Details
        </span>

        <span>
          <FaBolt size={15} />
          Order Guidance
        </span>

        <span>
          <FaWhatsapp size={15} color='#53c234ff' />
          WhatsApp Support
        </span>
      </div>
      <p className="body-copy">Compare AI, design, video, productivity, learning and business tools with the exact plan and price shown before you order.</p>
      <div className="button-row">
        <NavLink to="/subscriptions" className="button button-primary">
          Browse subscriptions <Icon name="arrow" size={16} />
        </NavLink>
        <a href={whatsappLink('Hello, I would like to know more about your premium services.')} target="_blank" rel="noopener noreferrer" className="button button-soft">
          <FaWhatsapp size={15} color='#53c234ff' /> Chat on WhatsApp
        </a>
      </div>
    </div>
    <div className="hero-image-wrapper reveal delay-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <img src="/assets/premium_hero_card.png" alt="Happy Clients Premium Testimonial" style={{ width: '100%', height: '100%', maxHeight: '550px', objectFit: 'cover', borderRadius: '32px', boxShadow: 'var(--shadow)' }} />
    </div>
  </section>
);

const TimelineStep = ({ step, index, scrollYProgress }) => {
  const [isActive, setIsActive] = useState(false);
  const threshold = (index * 0.18) + 0.1; // Starts at 0.1 and spaces out evenly up to ~0.82

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsActive(latest > threshold);
  });

  return (
    <li className={`timeline-item ${isActive ? 'active' : ''}`}>
      <div className="timeline-marker-wrap">
        <div className="timeline-marker-bg" />
        <motion.div
          className="timeline-marker"
          initial={false}
          animate={{ scale: isActive ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon name="check" size={12} />
        </motion.div>
      </div>
      <span className="timeline-text">{step}</span>
    </li>
  );
};

const InteractiveTimeline = ({ scrollYProgress }) => {
  const steps = [
    "Choose the exact plan that suits your work.",
    "Read the tool description, duration and listed price.",
    "Contact the support team to confirm current availability.",
    "Complete payment after the order details are confirmed.",
    "Receive the login, key or activation guidance for your plan."
  ];

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="timeline-container">
      <div className="timeline-track" />
      <motion.div className="timeline-progress" style={{ height: lineHeight }} />
      <ul className="timeline-list">
        {steps.map((step, index) => (
          <TimelineStep key={index} step={step} index={index} scrollYProgress={scrollYProgress} />
        ))}
      </ul>
    </div>
  );
};

export const Procedure = () => {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="procedure-scroll-wrapper" ref={wrapperRef}>
      <div className="procedure-sticky-content">
        <section className="section border-top" style={{ width: '100%', margin: 0, border: 'none' }}>
          <div className="container split-grid">
            <div className="photo-collage reveal">
              <img className="photo-main" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82" alt="Team discussing a project" />
              <img className="photo-side" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=82" alt="People working together" />
              <img className="photo-bottom" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=82" alt="Customer support team" />
            </div>
            <div className="reveal delay-1">
              <p className="eyebrow">Procedure</p>
              <h2>How to proceed</h2>
              <p className="body-copy">Choose a listed plan, review its details and contact the team to confirm availability before completing your order.</p>
              <InteractiveTimeline scrollYProgress={scrollYProgress} />
              <NavLink to="/about" className="button button-primary">
                Read more <Icon name="arrow" size={16} />
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Payments = () => {
  const methods = [
    ['https://cdn.simpleicons.org/visa/1A1F71', 'Visa', 'Credit & debit cards'],
    ['https://cdn.simpleicons.org/mastercard/EB001B', 'Mastercard', 'Credit & debit cards'],
    ['https://cdn.simpleicons.org/applepay/000000', 'Apple Pay', 'One-tap checkout'],
    ['https://cdn.simpleicons.org/paypal/003087', 'PayPal', 'Buyer-protected payments'],
    ['https://cdn.simpleicons.org/payoneer/FF4800', 'Payoneer', 'Global transfers'],
  ];
  return (
    <section className="section border-top payment-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Payment information</p>
          <h2>Flexible payment options</h2>
          <p>Confirm the available payment method with the support team when placing your order.</p>
        </div>
        <div className="payment-grid">
          {methods.map(([logo, title, sub], i) => (
            <div key={i} className="payment-card reveal">
              <span className="payment-logo"><img src={logo} alt={`${title} official logo`} loading="lazy" /></span>
              <strong>{title}</strong>
              <small>{sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ endValueStr }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  const endNum = parseInt(endValueStr.replace(/\D/g, '')) || 0;
  const suffix = endValueStr.replace(/[0-9]/g, '');

  useEffect(() => {
    if (endNum === 0) {
      setCount(0);
      return;
    }
    
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const stepTime = Math.max(16, Math.floor(duration / endNum));
        const increment = Math.ceil(endNum / (duration / stepTime));

        let timer = setInterval(() => {
          start += increment;
          if (start >= endNum) {
            setCount(endNum);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, stepTime);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [endNum]);

  return <strong ref={nodeRef}>{count === 0 && endNum !== 0 ? 0 : count}{suffix}</strong>;
};

export const Stats = ({ 
  title = "A focused catalogue for different kinds of digital work", 
  items = [['30', 'LISTED PLANS'], ['26', 'TOOLS & SERVICES'], ['7', 'WORK CATEGORIES'], ['1', 'DIRECT SUPPORT CHANNEL']] 
}) => {
  return (
    <section className="container stats-section reveal">
      <div className="stats-banner">
        <p>{title}</p>
        <div className="stats-grid">
          {items.map(([value, label], i) => (
            <div key={i}><AnimatedCounter endValueStr={value} /><span>{label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs = () => {
  const points = [
    ['Exact plan information', 'Every listing shows the plan name, duration and PKR price so customers can compare options without guessing.'],
    ['Useful explanations', 'Each tool is described in simple language, including what it does and how it is commonly used in professional work.'],
    ['Direct human support', 'Customers can confirm availability, delivery method and activation details with the support team before ordering.'],
  ];
  return (
    <section className="section">
      <div className="container split-grid why-grid">
        <div className="reveal">
          <h2>Why choose us</h2>
          <div className="why-list">
            {points.map(([title, text], index) => (
              <div key={index} className="why-item">
                <span>{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="video-card reveal delay-1">
          <div className="video-label"><Icon name="play" size={17} /> Microsoft 365 setup overview</div>
          <iframe src="https://www.youtube-nocookie.com/embed/fXtxNbnNmb4?rel=0" title="Microsoft 365 setup overview" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export const PageHero = ({ eyebrow, title, description, bgImage }) => {
  const heroStyle = bgImage 
    ? { background: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${bgImage}) center/cover no-repeat` }
    : {};
  return (
    <section className="container section-top">
      <div className="page-hero panel panel-blue reveal" style={heroStyle}>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};
