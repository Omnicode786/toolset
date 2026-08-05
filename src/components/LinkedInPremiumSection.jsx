import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaCompass, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { linkedinPlans, whatsappLink } from '../data/constants';

const getPlanIcon = (plan) =>
  plan.id.startsWith('sales') ? (
    <FaCompass size={40} color="#0a66c2" />
  ) : (
    <FaLinkedinIn size={40} color="#0a66c2" />
  );

const getGradientClass = (plan) => {
  if (plan.id === 'career') return 'bg-gradient-amber';
  if (plan.id === 'business') return 'bg-gradient-gold';
  return 'bg-gradient-sky';
};

export const LinkedInPremiumSection = ({ limit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const displayData = limit ? linkedinPlans.slice(0, limit) : linkedinPlans;

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className="linkedin-section">
      <div className="linkedin-container">
        <div className="linkedin-header">
          <p className="linkedin-eyebrow">OUR SUBSCRIPTIONS</p>
          <h2 className="linkedin-heading">LinkedIn Premium Plans</h2>
          <p className="linkedin-subtitle">
            Compare the available LinkedIn plans for job searching, business networking and professional sales work.
          </p>
        </div>

        <div className="linkedin-grid">
          {displayData.map((plan) => (
            <article key={plan.id} className="linkedin-card">
              <div className="linkedin-card-accent"></div>

              <div className="linkedin-card-content">
                <div className="linkedin-icon-box">{getPlanIcon(plan)}</div>

                <h3 className="linkedin-card-title">{plan.displayTitle}</h3>

                <div className="linkedin-badge-row">
                  <div className="linkedin-status-badge">
                    <span className="linkedin-live-dot"></span>
                    {plan.plan}
                  </div>
                  <div className="linkedin-price-badge">{plan.price}</div>
                </div>

                <p className="linkedin-card-desc">{plan.description}</p>
              </div>

              <div className="linkedin-actions">
                <button className="btn-outline-sky" onClick={() => openModal(plan)}>
                  Learn More
                </button>
                <a
                  href={whatsappLink(
                    `Hello, I am interested in ${plan.displayTitle} — ${plan.plan} for ${plan.price}. Please share more details.`
                  )}
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

      {modalOpen && selectedPlan && (
        <div className="linkedin-modal-backdrop" onClick={closeModal} role="presentation">
          <div
            className="linkedin-modal-card"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="linkedin-modal-title"
          >
            <button className="linkedin-modal-close" onClick={closeModal} aria-label="Close plan details">
              &times;
            </button>
            <div className={`linkedin-modal-header ${getGradientClass(selectedPlan)}`}>
              {getPlanIcon(selectedPlan)}
              <h2 id="linkedin-modal-title">{selectedPlan.displayTitle}</h2>
            </div>
            <div className="linkedin-modal-body">
              <div className="linkedin-modal-price">{selectedPlan.price}</div>
              <p>
                <strong>{selectedPlan.plan}</strong>
                <br />
                {selectedPlan.description}
              </p>
              <h4>Common uses</h4>
              <ul className="linkedin-features-list modal-list">
                {selectedPlan.features.map((feature) => (
                  <li key={feature}>
                    <FaCheckCircle className="li-check-icon" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(
                  `Hello, I want to order ${selectedPlan.displayTitle} — ${selectedPlan.plan} for ${selectedPlan.price}.`
                )}
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
