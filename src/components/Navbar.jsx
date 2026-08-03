import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getClassName = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <NavLink to="/" className="brand" aria-label="Tool Set home" end>
          <span className="brand-logo"><img src="/assets/logo.png" alt="Tool Set logo" /></span>
        </NavLink>
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" className={getClassName} end>Home</NavLink>
          <NavLink to="/about" className={getClassName}>About Us</NavLink>
          <NavLink to="/subscriptions" className={getClassName} style={{ fontWeight: 800 }}>Subscriptions</NavLink>
          <NavLink to="/reviews" className={getClassName}>Reviews</NavLink>
          <NavLink to="/blogs" className={getClassName}>Blogs</NavLink>
        </nav>
        <NavLink to="/contact" className="button button-outline nav-contact">Contact Us</NavLink>
        <button 
          className="mobile-menu-button" 
          type="button" 
          aria-label="Open menu" 
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Icon name="close" size={20} /> : <Icon name="menu" size={20} />}
        </button>
      </div>
      <div className="mobile-menu" hidden={!menuOpen}>
        <NavLink to="/" className={getClassName} onClick={() => setMenuOpen(false)} end>Home</NavLink>
        <NavLink to="/about" className={getClassName} onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/subscriptions" className={getClassName} onClick={() => setMenuOpen(false)} style={{ fontWeight: 800 }}>Subscriptions</NavLink>
        <NavLink to="/reviews" className={getClassName} onClick={() => setMenuOpen(false)}>Reviews</NavLink>
        <NavLink to="/blogs" className={getClassName} onClick={() => setMenuOpen(false)}>Blogs</NavLink>
        <NavLink to="/contact" className={getClassName} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
      </div>
    </header>
  );
};
