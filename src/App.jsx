import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Subscriptions } from './pages/Subscriptions';
import { Reviews } from './pages/Reviews';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    const titles = {
      '/': 'All Premium Tools — Digital Subscriptions',
      '/about': 'About — All Premium Tools',
      '/subscriptions': 'Subscriptions — All Premium Tools',
      '/reviews': 'Reviews — All Premium Tools',
      '/blogs': 'Blogs — All Premium Tools',
      '/contact': 'Contact — All Premium Tools',
    };
    document.title = titles[location.pathname] || 'All Premium Tools — Digital Subscriptions';

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      revealItems.forEach(item => {
        item.classList.remove('visible');
        observer.observe(item);
      });
      
      return () => observer.disconnect();
    } else {
      revealItems.forEach(item => item.classList.add('visible'));
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
