import React, { useState } from 'react';
import { FaLinkedinIn, FaCompass, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/constants';

const linkedinData = [
  {
    id: 'career',
    title: 'LinkedIn Premium Career',
    icon: <FaLinkedinIn size={40} color="#0a66c2" />,
    gradientClass: 'bg-gradient-amber',
    status: 'In Stock / Via Login',
    price: 'PKR 2,500',
    description: '(New, 3 Months). Best for students and job seekers who want more profile visibility, InMail access, learning resources to improve job opportunities.',
    features: []
  },
  {
    id: 'business',
    title: 'LinkedIn Premium Business',
    icon: <FaLinkedinIn size={40} color="#0a66c2" />,
    gradientClass: 'bg-gradient-gold',
    status: 'In Stock / Via Login',
    price: 'PKR 4,500',
    description: '(New, 2 Months). Ideal for professionals and business owners who want deeper insights, wider reach, and better networking tools.',
    features: []
  },
  {
    id: 'sales-new',
    title: 'LinkedIn Sales Navigator',
    icon: <FaCompass size={40} color="#0a66c2" />,
    gradientClass: 'bg-gradient-sky',
    status: 'In Stock / Via Login',
    price: 'PKR 4,000',
    description: '(New, 2 Months). Designed for sales professionals and freelancers who need advanced lead search, outreach, and tracking tools for B2B growth.',
    features: []
  },
  {
    id: 'sales-old',
    title: 'LinkedIn Sales Navigator',
    icon: <FaCompass size={40} color="#0a66c2" />,
    gradientClass: 'bg-gradient-sky',
    status: 'In Stock / Via Login',
    price: 'PKR 5,000',
    description: '(Old, 1 Month). Perfect for ongoing sales teams who need to retain historical lead data and CRM sync on existing old accounts.',
    features: []
  }
];

export const LinkedInPremiumSection = ({ limit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const displayData = limit ? linkedinData.slice(0, limit) : linkedinData;

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="linkedin-section">
      <div className="linkedin-container">
        
        {/* Header Section */}
        <div className="linkedin-header">
          <p className="linkedin-eyebrow">OUR SUBSCRIPTIONS</p>
          <h2 className="linkedin-heading">LinkedIn Premium Plans</h2>
          <p className="linkedin-subtitle">
            Choose the right LinkedIn Premium plan for networking, jobs, sales, and business growth.
          </p>
        </div>

        {/* Grid Section */}
        <div className="linkedin-grid">
          {displayData.map((plan) => (
            <article key={plan.id} className="linkedin-card">
              <div className="linkedin-card-accent"></div>
              
              <div className="linkedin-card-content">
                <div className="linkedin-icon-box">
                  {plan.icon}
                </div>
                
                <h3 className="linkedin-card-title">{plan.title}</h3>
                
                <div className="linkedin-badge-row">
                  <div className="linkedin-status-badge">
                    <span className="linkedin-live-dot"></span>
                    {plan.status}
                  </div>
                  <div className="linkedin-price-badge">
                    {plan.price}
                  </div>
                </div>
                
                <p className="linkedin-card-desc">{plan.description}</p>
              </div>
              
              <div className="linkedin-actions">
                <button 
                  className="btn-outline-sky"
                  onClick={() => openModal(plan)}
                >
                  Learn More
                </button>
                <a 
                  href={whatsappLink(`Hello, I am interested in ${plan.title}. Please share more details.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-solid-whatsapp"
                >
                  <FaWhatsapp size={18} /> Chat with live agent
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <a 
        href={whatsappLink('Hello, I need help choosing a LinkedIn Premium plan.')}
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <div className="glow-ring"></div>
        <FaWhatsapp size={28} />
      </a>

      {/* Feature Modal */}
      {modalOpen && selectedPlan && (
        <div className="linkedin-modal-backdrop" onClick={closeModal}>
          <div className="linkedin-modal-card" onClick={e => e.stopPropagation()}>
            <button className="linkedin-modal-close" onClick={closeModal}>&times;</button>
            <div className={`linkedin-modal-header ${selectedPlan.gradientClass}`}>
              {selectedPlan.icon}
              <h2>{selectedPlan.title}</h2>
            </div>
            <div className="linkedin-modal-body">
              <div className="linkedin-modal-price">{selectedPlan.price}</div>
              <p>{selectedPlan.description}</p>
              <h4>Full Features:</h4>
              <ul className="linkedin-features-list modal-list">
                {selectedPlan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className="li-check-icon" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={whatsappLink(`Hello, I want to order ${selectedPlan.title}.`)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-solid-whatsapp modal-btn"
              >
                <FaWhatsapp size={18} /> Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
