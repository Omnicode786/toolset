import React from 'react';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const messageEl = event.currentTarget.querySelector('.form-message');
    if (messageEl) {
      messageEl.textContent = 'Demo form submitted. Connect this form to your email or WhatsApp before launch.';
    }
  };

  return (
    <>
      <PageHero 
        eyebrow="Contact" 
        title="Ask about a product before ordering" 
        description="Use the sample form below or replace the placeholder details with your official WhatsApp, email and location." 
      />
      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-panel reveal">
            <h2>Contact details</h2>
            <p>The following details are placeholders inside this demo website.</p>
            <div className="contact-list">
              <div>
                <Icon name="phone" size={18} />
                <span><small>Phone</small><strong>+92 300 000 0000</strong></span>
              </div>
              <div>
                <Icon name="mail" size={18} />
                <span><small>Email</small><strong>hello@toolset.example</strong></span>
              </div>
              <div>
                <Icon name="pin" size={18} />
                <span><small>Location</small><strong>Pakistan</strong></span>
              </div>
              <div>
                <Icon name="chat" size={18} />
                <span><small>Response time</small><strong>Usually within a few minutes</strong></span>
              </div>
            </div>
          </aside>
          <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input type="text" placeholder="Enter your name" />
              </label>
              <label>
                Email or phone
                <input type="text" placeholder="Enter your contact detail" />
              </label>
            </div>
            <label>
              Product
              <select defaultValue="Select a product">
                <option disabled>Select a product</option>
                <option>LinkedIn Premium</option>
                <option>Microsoft 365</option>
                <option>Coursera Premium</option>
                <option>Other tool</option>
              </select>
            </label>
            <label>
              Message
              <textarea rows="5" placeholder="Write your question"></textarea>
            </label>
            <button className="button button-primary" type="submit">Send message</button>
            <p className="form-message" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </>
  );
};
