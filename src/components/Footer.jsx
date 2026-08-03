import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';
import { whatsappLink } from '../data/constants';
import { FaShieldAlt, FaBolt, FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container cta-wrap reveal">
          <div className="footer-cta">
            <div>
              <h2>Let’s make choosing your next tool easier</h2>
              <p>Ask about a product, delivery method or activation process before placing an order.</p>
            </div>
            <NavLink to="/contact" className="button button-white">Talk with our team</NavLink>
          </div>
        </div>
        <div className="footer-main">
          <div className="container footer-grid">
            <div>
              <h3>All Premium Tools</h3>
              <p>A simple catalogue for digital subscriptions, product information and guided support.</p>
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
              <NavLink to="/subscriptions">LinkedIn Career Premium</NavLink>
              <NavLink to="/subscriptions">LinkedIn Business Premium</NavLink>
              <NavLink to="/subscriptions">Sales Navigator</NavLink>
              <NavLink to="/subscriptions">All Premium Tools</NavLink>
            </div>
            <div>
              <h4>Get in touch</h4>
              <p>+92 300 000 0000</p>
              <p>hello@toolset.example</p>
              <h4 className="footer-location">Location</h4>
              <p>Pakistan</p>
            </div>
          </div>
          <div className="container copyright">
            © 2026 Tool Set. Demo content can be replaced with your final business details.
          </div>
        </div>
      </footer>
      <a href={whatsappLink('Hello, I would like to know more about your premium services.')} target="_blank" rel="noopener noreferrer" className="floating-chat" aria-label="Chat with us on WhatsApp">
       <FaWhatsapp size={25} color='#ffffffff' />
      </a>
    </>
  );
};
