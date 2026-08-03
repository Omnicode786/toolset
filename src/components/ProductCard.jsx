import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';
import { logoDomains, whatsappLink } from '../data/constants';
import { FaCompass, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const getExplanation = (title) => {
  const descMap = {
    'LinkedIn Sales Navigator': 'Find and connect with the right prospects faster with advanced lead generation tools.',
    'LinkedIn Premium Career': 'Stand out to recruiters, see who viewed your profile, and learn new skills.',
    'LinkedIn Premium Business': 'Expand your network and gain powerful business insights to grow your brand.',
    'ChatGPT': 'Get faster response times and priority access to new AI models and features.',
    'Canva Pro': 'Design like a pro with unlimited access to premium templates, photos, and tools.',
    'Figma': 'Collaborate in real-time and build interactive prototypes with advanced design features.',
    'Microsoft Office 365': 'Get the latest premium Office apps, 1TB of cloud storage, and advanced security.',
    'ElevenLabs': 'Generate high-quality spoken audio in any voice, style, and language.',
    'ElevenLabs Pro': 'Professional-grade voice synthesis with extended character limits and commercial rights.',
    'Kling AI': 'Experience next-generation AI video generation with unparalleled realism and control.',
    'Lovable': 'Build and deploy full-stack web applications effortlessly with AI-powered development.',
    'Leonardo AI': 'Create stunning, production-ready visual assets with advanced generative AI models.',
    'vidIQ': 'Maximize your YouTube channel growth with AI-driven insights and SEO tools.',
    'CapCut Pro': 'Access advanced video editing features, premium effects, and cloud storage.',
    'Adobe Creative Cloud': 'Unlock the world\'s best creative apps including Photoshop, Illustrator, and Premiere Pro.',
    'Cursor Pro': 'Supercharge your coding workflow with an AI-first code editor designed for speed.',
    'Claude Pro': 'Experience advanced reasoning, vision capabilities, and coding assistance with Claude 3.5.',
    'Envato Elements': 'Unlimited downloads of millions of creative assets, templates, and stock videos.',
    'NordVPN': 'Protect your online privacy and access global content with lightning-fast VPN servers.'
  };
  return descMap[title] || 'Unlock exclusive premium features, enhance your productivity, and streamline your workflow with this official subscription.';
};

export const ProductCard = ({ item }) => {
  return (
    <article className="linkedin-card reveal">
      <div className="linkedin-card-accent"></div>
      
      <div className="linkedin-card-content">
        <div className="linkedin-icon-box">
          {item.title === 'LinkedIn Sales Navigator' ? (
            <FaCompass size={40} color="#0a66c2" />
          ) : (
            <img 
              src={`https://www.google.com/s2/favicons?domain=${logoDomains[item.title]}&sz=128`} 
              alt={`${item.title} logo`} 
              loading="lazy" 
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.hidden = true;
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.hidden = false;
                }
              }}
            />
          )}
          <span hidden style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Manrope, sans-serif' }}>{item.mark}</span>
        </div>
        
        <h3 className="linkedin-card-title">{item.title}</h3>
        
        <div className="linkedin-badge-row">
          <div className="linkedin-status-badge">
            <span className="linkedin-live-dot"></span>
            {item.plan}
          </div>
          <div className="linkedin-price-badge">
            {item.price}
          </div>
        </div>
        
        <p className="linkedin-card-desc">{getExplanation(item.title)}</p>
      </div>
      
      <div className="linkedin-actions">
        <NavLink to="/subscriptions" className="btn-outline-sky">
          Learn More
        </NavLink>
        <a 
          href={whatsappLink(`Hello, I am interested in ${item.title} — ${item.plan}. Please share more details.`)} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-solid-whatsapp"
        >
          <FaWhatsapp size={18} /> Chat with Live Agent
        </a>
      </div>
    </article>
  );
};

export const ProductSection = ({ eyebrow = '', title, description, products, theme = 'lavender', viewAll = false }) => {
  return (
    <section className={`section product-section ${theme}`}>
      <div className="container">
        <div className="section-heading reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="product-grid">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
        {viewAll && (
          <div className="section-action">
            <NavLink to="/subscriptions" className="button button-primary">
              View All Services <Icon name="arrowUp" size={14} />
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};
