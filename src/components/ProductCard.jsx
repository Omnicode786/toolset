import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';
import { logoDomains, whatsappLink } from '../data/constants';
import { FaCompass, FaWhatsapp } from 'react-icons/fa';

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
              onError={(event) => {
                event.currentTarget.hidden = true;
                if (event.currentTarget.nextElementSibling) {
                  event.currentTarget.nextElementSibling.hidden = false;
                }
              }}
            />
          )}
          <span
            hidden
            style={{
              color: item.color || '#0f172a',
              fontSize: '20px',
              fontWeight: 'bold',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            {item.mark}
          </span>
        </div>

        <h3 className="linkedin-card-title">{item.title}</h3>

        <div className="linkedin-badge-row">
          <div className="linkedin-status-badge">
            <span className="linkedin-live-dot"></span>
            {item.plan}
          </div>
          <div className="linkedin-price-badge">{item.price}</div>
        </div>

        <p className="linkedin-card-desc">{item.description}</p>
      </div>

      <div className="linkedin-actions">
        <NavLink to="/subscriptions" className="btn-outline-sky">
          Learn More
        </NavLink>
        <a
          href={whatsappLink(
            `Hello, I am interested in ${item.title} — ${item.plan} for ${item.price}. Please share more details.`
          )}
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

export const ProductSection = ({
  eyebrow = '',
  title,
  description,
  products,
  theme = 'lavender',
  viewAll = false,
}) => {
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
            <ProductCard key={`${item.title}-${item.plan}-${index}`} item={item} />
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
