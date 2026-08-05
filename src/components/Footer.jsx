import React from 'react';
import { NavLink } from 'react-router-dom';
import { whatsappLink } from '../data/constants';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container cta-wrap reveal">
          <div className="footer-cta">
            <div>
              <h2>Need help choosing the right plan?</h2>
              <p>Ask about the tool, plan type, delivery method or activation process before placing your order.</p>
            </div>
            <NavLink to="/contact" className="button button-white">Talk with our team</NavLink>
          </div>
        </div>

        <div className="footer-main">
          <div className="container footer-grid">
            <div>
              <h3>All Premium Tools</h3>
              <p>Digital subscriptions for AI, design, video, productivity, learning, development and professional work.</p>
              <div className="socials">
                <span>f</span><span>in</span><span>ig</span><span>wa</span>
              </div>
            </div>

            <div>
              <h4>Quick links</h4>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/subscriptions">Subscriptions</NavLink>
              <NavLink to="/reviews">Reviews</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>

            <div>
              <h4>Our solutions</h4>
              <NavLink to="/subscriptions">AI & Content Tools</NavLink>
              <NavLink to="/subscriptions">Design & Video Tools</NavLink>
              <NavLink to="/subscriptions">LinkedIn Premium Plans</NavLink>
              <NavLink to="/subscriptions">Learning & Productivity</NavLink>
            </div>

            <div>
              <h4>Get in touch</h4>
              <p>WhatsApp order support</p>
              <p>Plan and activation enquiries</p>
              <h4 className="footer-location">Location</h4>
              <p>Pakistan</p>
            </div>
          </div>

          <div className="container copyright">
            © 2026 Tool Set. Plans and prices are listed in PKR. Confirm current availability before payment.
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink('Hello, I would like to know more about your premium services.')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-chat"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={25} color="#ffffff" />
      </a>
    </>
  );
};
