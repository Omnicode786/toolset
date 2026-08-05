import React from 'react';
import { PageHero } from '../components/Sections';
import { Icon } from '../components/Icons';
import { allTools, linkedinPlans, whatsappLink } from '../data/constants';

export const Contact = () => {
  const productOptions = [
    ...linkedinPlans.map((item) => `${item.displayTitle} — ${item.plan} — ${item.price}`),
    ...allTools.map((item) => `${item.title} — ${item.plan} — ${item.price}`),
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const contact = formData.get('contact')?.toString().trim();
    const product = formData.get('product')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    const whatsappMessage = [
      'Hello, I would like help with a digital tool subscription.',
      name ? `Name: ${name}` : '',
      contact ? `Contact: ${contact}` : '',
      product ? `Plan: ${product}` : '',
      message ? `Question: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappLink(whatsappMessage), '_blank', 'noopener,noreferrer');

    const messageElement = form.querySelector('.form-message');
    if (messageElement) {
      messageElement.textContent = 'Your enquiry has been prepared in WhatsApp.';
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask about a plan before ordering"
        description="Confirm availability, delivery method and activation details directly with the support team."
      />
      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-panel reveal">
            <h2>Contact details</h2>
            <p>Use WhatsApp for plan enquiries, availability checks, order confirmation and activation guidance.</p>
            <div className="contact-list">
              <div>
                <Icon name="phone" size={18} />
                <span><small>Support channel</small><strong>WhatsApp</strong></span>
              </div>
              <div>
                <Icon name="mail" size={18} />
                <span><small>Enquiries</small><strong>Plans, prices and delivery methods</strong></span>
              </div>
              <div>
                <Icon name="pin" size={18} />
                <span><small>Location</small><strong>Pakistan</strong></span>
              </div>
              <div>
                <Icon name="chat" size={18} />
                <span><small>Support</small><strong>Direct guidance from the team</strong></span>
              </div>
            </div>
          </aside>

          <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input name="name" type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Email or phone
                <input name="contact" type="text" placeholder="Enter your contact detail" required />
              </label>
            </div>
            <label>
              Product
              <select name="product" defaultValue="" required>
                <option value="" disabled>Select a product and plan</option>
                {productOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
                <option value="General enquiry">General enquiry</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Write your question"></textarea>
            </label>
            <button className="button button-primary" type="submit">Continue on WhatsApp</button>
            <p className="form-message" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </>
  );
};
