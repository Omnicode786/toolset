const WHATSAPP_NUMBER = '9230320465542';

const PRODUCTS = [
  {
    title: 'SEMrush SEO Toolkit', mark: 'S', color: '#ff642d', domain: 'semrush.com', category: 'SEO & Research',
    description: 'SEMrush is used by marketers and website owners to research keywords, review competitors, monitor rankings and find practical ways to improve search visibility.',
    plans: [{ duration: '1 Month', price: 'PKR 499' }, { duration: '6 Months', price: 'PKR 2,999' }, { duration: '1 Year', price: 'PKR 5,299' }]
  },
  {
    title: 'ChatGPT Starter', mark: 'AI', color: '#10a37f', domain: 'openai.com', category: 'AI & Productivity',
    description: 'ChatGPT helps with writing, research, planning, brainstorming, summaries and everyday problem-solving through a simple conversational interface.',
    plans: [{ duration: 'Monthly', price: 'PKR 299' }]
  },
  {
    title: 'ChatGPT Go', mark: 'AI', color: '#10a37f', domain: 'openai.com', category: 'AI & Productivity',
    description: 'ChatGPT Go is suited to people who use AI more regularly and want a smoother experience for study, content, business tasks and general productivity.',
    plans: [{ duration: 'Monthly', price: 'PKR 1,399' }]
  },
  {
    title: 'ElevenLabs Starter', mark: '11', color: '#111111', domain: 'elevenlabs.io', category: 'AI & Productivity',
    description: 'ElevenLabs creates natural-sounding voiceovers from text. It is commonly used for videos, narration, ads, explainers and multilingual audio projects.',
    plans: [{ duration: 'Monthly', price: 'PKR 399' }]
  },
  {
    title: 'Netflix Premium', mark: 'N', color: '#e50914', domain: 'netflix.com', category: 'Entertainment',
    description: 'Netflix is a streaming platform for films, documentaries and series. The premium plan is designed for viewers who want a broader viewing experience.',
    plans: [{ duration: '1 Month', price: 'PKR 399' }]
  },
  {
    title: 'Amazon Prime Video', mark: 'P', color: '#00a8e1', domain: 'primevideo.com', category: 'Entertainment',
    description: 'Prime Video provides access to movies, television shows and Amazon Originals across supported devices.',
    plans: [{ duration: '1 Month', price: 'PKR 299' }]
  },
  {
    title: 'Canva Pro', mark: 'Ca', color: '#7d2ae8', domain: 'canva.com', category: 'Design & Creative',
    description: 'Canva Pro is used to create social posts, presentations, posters, videos and brand material with premium templates, assets and editing tools.',
    plans: [{ duration: '1 Month', price: 'PKR 199' }, { duration: '1 Year', price: 'PKR 999' }]
  },
  {
    title: 'QuillBot Premium', mark: 'Q', color: '#439946', domain: 'quillbot.com', category: 'Writing & Academic',
    description: 'QuillBot helps rewrite, improve and summarize text. Students, writers and professionals use it to make sentences clearer and easier to read.',
    plans: [{ duration: '1 Month', price: 'PKR 149' }, { duration: '1 Year', price: 'PKR 499' }]
  },
  {
    title: 'CapCut Pro', mark: 'C', color: '#111111', domain: 'capcut.com', category: 'Design & Creative',
    description: 'CapCut Pro is a video editor for social media, short-form content and everyday projects, with advanced effects, templates and editing features.',
    plans: [{ duration: '1 Month', price: 'PKR 499' }]
  },
  {
    title: 'Grammarly Premium', mark: 'G', color: '#15c39a', domain: 'grammarly.com', category: 'Writing & Academic',
    description: 'Grammarly checks grammar, spelling, tone and clarity. It is useful for emails, reports, assignments and professional writing.',
    plans: [{ duration: '1 Month', price: 'PKR 199' }]
  },
  {
    title: 'Envato Elements', mark: 'E', color: '#81b441', domain: 'elements.envato.com', category: 'Design & Creative',
    description: 'Envato Elements is a library of templates, graphics, video assets, fonts and presentation resources used by designers and content creators.',
    plans: [{ duration: '1 Month', price: 'PKR 299' }]
  },
  {
    title: 'Freepik Premium', mark: 'F', color: '#1273eb', domain: 'freepik.com', category: 'Design & Creative',
    description: 'Freepik Premium gives creators access to stock graphics, photos, vectors, mockups and other visual assets for commercial and personal projects.',
    plans: [{ duration: '1 Month', price: 'PKR 999' }]
  },
  {
    title: 'YouTube Premium', mark: 'YT', color: '#ff0000', domain: 'youtube.com', category: 'Entertainment',
    description: 'YouTube Premium provides an uninterrupted viewing experience and additional playback features across supported devices.',
    plans: [{ duration: '1 Month', price: 'PKR 199' }]
  },
  {
    title: 'Turnitin Instructor', mark: 'T', color: '#1f4e79', domain: 'turnitin.com', category: 'Writing & Academic',
    description: 'Turnitin Instructor is used in education to review written work for similarity and support academic feedback and originality checks.',
    plans: [{ duration: '1 Month', price: 'PKR 699' }]
  },
  {
    title: 'Google Gemini Pro', mark: 'G', color: '#4f7cff', domain: 'gemini.google.com', category: 'AI & Productivity',
    description: 'Gemini is Google’s AI assistant for writing, research, planning and working with information across common personal and professional tasks.',
    plans: [{ duration: '1 Month', price: 'PKR 599' }]
  },
  {
    title: 'Coursera Plus', mark: 'Co', color: '#0056d2', domain: 'coursera.org', category: 'Learning & Work',
    description: 'Coursera Plus gives learners access to a wide range of online courses and professional learning paths from universities and companies.',
    plans: [{ duration: '1 Month', price: 'PKR 299' }, { duration: '1 Year', price: 'PKR 1,499' }]
  },
  {
    title: 'Prime Video Mobile', mark: 'P', color: '#00a8e1', domain: 'primevideo.com', category: 'Entertainment',
    description: 'Prime Video Mobile is intended for watching Prime Video content on a supported mobile device through a lower-cost plan.',
    plans: [{ duration: '1 Month', price: 'PKR 199' }]
  },
  {
    title: 'Perplexity Pro', mark: 'P', color: '#20808d', domain: 'perplexity.ai', category: 'AI & Productivity',
    description: 'Perplexity Pro is an AI research assistant that helps users explore questions, compare sources and gather information more efficiently.',
    plans: [{ duration: '1 Month', price: 'PKR 499' }]
  },
  {
    title: 'Midjourney Basic', mark: 'M', color: '#111111', domain: 'midjourney.com', category: 'Design & Creative',
    description: 'Midjourney is an AI image-generation tool used to create concept art, illustrations, moodboards and visual ideas from text prompts.',
    plans: [{ duration: '1 Month', price: 'PKR 999' }]
  },
  {
    title: 'Disney+ Premium', mark: 'D+', color: '#113ccf', domain: 'disneyplus.com', category: 'Entertainment',
    description: 'Disney+ is a streaming service with films and series from Disney and its related entertainment brands.',
    plans: [{ duration: '1 Month', price: 'PKR 399' }]
  },
  {
    title: 'Microsoft 365', mark: 'M', color: '#f35325', domain: 'microsoft.com', category: 'Learning & Work',
    description: 'Microsoft 365 includes productivity apps used for documents, spreadsheets, presentations, email and cloud-based work.',
    plans: [{ duration: '1 Month', price: 'PKR 799' }, { duration: '1 Year', price: 'PKR 4,999' }]
  },
  {
    title: 'NordVPN Premium', mark: 'N', color: '#4687ff', domain: 'nordvpn.com', category: 'Privacy & Development',
    description: 'NordVPN helps protect internet traffic on public and private networks and is commonly used for safer browsing and privacy.',
    plans: [{ duration: '1 Month', price: 'PKR 299' }]
  },
  {
    title: 'Cursor Pro', mark: 'C', color: '#111111', domain: 'cursor.com', category: 'Privacy & Development',
    description: 'Cursor is an AI-assisted code editor that helps developers understand code, write features and move through programming tasks faster.',
    plans: [{ duration: '1 Month', price: 'PKR 999' }]
  },
  {
    title: 'LinkedIn Premium', mark: 'in', color: '#0a66c2', domain: 'linkedin.com', category: 'Learning & Work',
    description: 'LinkedIn Premium provides additional tools for professional networking, profile insights, job search and career development.',
    plans: [{ duration: '1 Month', price: 'PKR 499' }]
  }
];

const FEATURED_TITLES = [
  'SEMrush SEO Toolkit', 'ChatGPT Go', 'Canva Pro', 'CapCut Pro',
  'Envato Elements', 'Google Gemini Pro', 'Microsoft 365', 'LinkedIn Premium'
];

const CATEGORIES = [
  'All', 'AI & Productivity', 'Design & Creative', 'Writing & Academic',
  'SEO & Research', 'Learning & Work', 'Entertainment', 'Privacy & Development'
];

const FAQS = [
  {
    question: 'How do I choose the right plan?',
    answer: 'Start with the tool you need and compare the available duration and price. You can message us before ordering when you are unsure which option fits your use.'
  },
  {
    question: 'How is an order confirmed?',
    answer: 'Choose a plan and contact the support team on WhatsApp. The team will confirm current availability, payment details and the delivery process before you proceed.'
  },
  {
    question: 'Can I ask questions before payment?',
    answer: 'Yes. The support flow is there to make sure you understand the selected product, plan duration and delivery method before placing an order.'
  },
  {
    question: 'Are the listed prices fixed?',
    answer: 'The website shows the current catalogue prices supplied for these plans. Availability can still change, so the final order is confirmed through WhatsApp.'
  }
];

const whatsappLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.8-5.2"/>',
    shield: '<path d="M12 3 19 6v6c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/>',
    chat: '<path d="M21 11.5a8.5 8.5 0 0 1-9 8.4 8.8 8.8 0 0 1-3.7-.8L3 20l1-4.9a8.5 8.5 0 1 1 17-3.6Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
};

const headerMarkup = () => `
  <header class="site-header">
    <div class="container nav-wrap">
      <a href="index.html" class="brand" aria-label="Tool Set home"><img src="assets/logo.png" alt="Tool Set"></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a class="nav-link" data-page="index" href="index.html">Home</a>
        <a class="nav-link" data-page="about" href="about.html">About Us</a>
        <a class="nav-link" data-page="subscriptions" href="subscriptions.html">Subscriptions</a>
        <a class="nav-link" data-page="reviews" href="reviews.html">Reviews</a>
        <a class="nav-link" data-page="guides" href="guides.html">Guides</a>
      </nav>
      <a href="contact.html" class="button button-outline nav-contact">Contact Us</a>
      <button class="mobile-menu-button" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-navigation">${icon('menu', 22)}</button>
    </div>
    <div id="mobile-navigation" class="mobile-menu">
      <nav class="container" aria-label="Mobile navigation">
        <a class="nav-link" data-page="index" href="index.html">Home</a>
        <a class="nav-link" data-page="about" href="about.html">About Us</a>
        <a class="nav-link" data-page="subscriptions" href="subscriptions.html">Subscriptions</a>
        <a class="nav-link" data-page="reviews" href="reviews.html">Reviews</a>
        <a class="nav-link" data-page="guides" href="guides.html">Guides</a>
        <a href="contact.html" class="button button-primary">Contact Us</a>
      </nav>
    </div>
  </header>`;

const footerMarkup = () => `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <img src="assets/logo.png" alt="Tool Set">
        <p>Affordable digital subscriptions for AI, design, SEO, work, learning and entertainment—presented with clear plans and simple support.</p>
        <a href="${whatsappLink('Hello, I need help with a Tool Set subscription.')}" target="_blank" rel="noopener noreferrer" class="footer-whatsapp"><span class="wa-symbol">◉</span> WhatsApp support</a>
      </div>
      <div class="footer-column">
        <h3>Explore</h3>
        <a href="subscriptions.html">All subscriptions</a>
        <a href="about.html">About us</a>
        <a href="guides.html">Tool guides</a>
        <a href="reviews.html">Customer experience</a>
      </div>
      <div class="footer-column">
        <h3>Popular categories</h3>
        <a href="subscriptions.html">AI & productivity</a>
        <a href="subscriptions.html">Design & creative</a>
        <a href="subscriptions.html">Learning & work</a>
        <a href="subscriptions.html">Entertainment</a>
      </div>
      <div class="footer-column">
        <h3>Need help?</h3>
        <p>Ask about availability, plan duration or the order process before making a payment.</p>
        <a href="contact.html" class="text-link-light">Contact the team →</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© <span data-year></span> Tool Set. All rights reserved.</span>
      <span>Prices are listed in PKR and confirmed before ordering.</span>
    </div>
  </footer>`;

const productCardMarkup = (item, compact = false) => {
  const plansText = item.plans.map((plan) => `${plan.duration}: ${plan.price}`).join(', ');
  const message = `Hello, I am interested in ${item.title}. The listed plans are ${plansText}. Please confirm availability and order details.`;
  return `
    <article class="product-card reveal ${compact ? 'product-card-compact' : ''}">
      <div class="product-card-top">
        <span class="tool-logo" style="--tool-color:${item.color}" aria-hidden="true">
          <img src="https://www.google.com/s2/favicons?domain=${item.domain}&sz=128" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
          <span class="tool-logo-fallback">${item.mark}</span>
        </span>
        <span class="category-pill">${item.category}</span>
      </div>
      <div class="product-card-copy">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <div class="plan-list" aria-label="${item.title} plans">
        ${item.plans.map((plan) => `<div class="plan-row"><span>${plan.duration}</span><strong>${plan.price}</strong></div>`).join('')}
      </div>
      <a href="${whatsappLink(message)}" target="_blank" rel="noopener noreferrer" class="button button-whatsapp product-card-button"><span class="wa-symbol">◉</span> Ask about this tool</a>
    </article>`;
};

function getPageName() {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  return file.replace('.html', '') || 'index';
}

function initializeShell() {
  document.querySelectorAll('[data-site-header]').forEach((node) => { node.innerHTML = headerMarkup(); });
  document.querySelectorAll('[data-site-footer]').forEach((node) => { node.innerHTML = footerMarkup(); });
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });

  const page = getPageName();
  document.querySelectorAll(`[data-page="${page}"]`).forEach((link) => link.classList.add('active'));

  const button = document.querySelector('.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');
  if (button && menu) {
    button.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      button.innerHTML = icon(open ? 'close' : 'menu', 22);
    });
  }

  const floating = document.createElement('a');
  floating.className = 'floating-whatsapp';
  floating.href = whatsappLink('Hello Tool Set, I need help choosing a subscription.');
  floating.target = '_blank';
  floating.rel = 'noopener noreferrer';
  floating.setAttribute('aria-label', 'Chat with Tool Set on WhatsApp');
  floating.innerHTML = '<span class="wa-symbol large">◉</span>';
  document.body.appendChild(floating);
}

function renderProductSections() {
  document.querySelectorAll('[data-products]').forEach((grid) => {
    const isFeatured = grid.dataset.products === 'featured';
    const compact = grid.dataset.compact === 'true';
    const list = isFeatured ? FEATURED_TITLES.map((title) => PRODUCTS.find((tool) => tool.title === title)).filter(Boolean) : PRODUCTS;
    grid.innerHTML = list.map((item) => productCardMarkup(item, compact)).join('');
  });
}

function setupCatalogue() {
  const grid = document.querySelector('[data-catalogue-grid]');
  if (!grid) return;

  const search = document.querySelector('[data-catalogue-search]');
  const filters = document.querySelector('[data-category-filters]');
  const count = document.querySelector('[data-result-count]');
  let activeCategory = 'All';

  filters.innerHTML = CATEGORIES.map((category) => `<button type="button" data-category="${category}" class="${category === 'All' ? 'is-active' : ''}">${category}</button>`).join('');

  const update = () => {
    const query = (search.value || '').trim().toLowerCase();
    const list = PRODUCTS.filter((tool) => {
      const categoryMatch = activeCategory === 'All' || tool.category === activeCategory;
      const queryMatch = !query || `${tool.title} ${tool.category} ${tool.description}`.toLowerCase().includes(query);
      return categoryMatch && queryMatch;
    });
    count.textContent = `${list.length} ${list.length === 1 ? 'tool' : 'tools'}`;
    grid.innerHTML = list.length
      ? list.map((item) => productCardMarkup(item)).join('')
      : `<div class="empty-state catalogue-empty"><h2>No matching tools found</h2><p>Try another search or choose a different category.</p><button type="button" class="button button-primary" data-reset-filters>Reset filters</button></div>`;
    ensureImageFallbacks();
    activateReveal();
  };

  search.addEventListener('input', update);
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    filters.querySelectorAll('button').forEach((item) => item.classList.toggle('is-active', item === button));
    update();
  });
  grid.addEventListener('click', (event) => {
    if (!event.target.closest('[data-reset-filters]')) return;
    activeCategory = 'All';
    search.value = '';
    filters.querySelectorAll('button').forEach((item) => item.classList.toggle('is-active', item.dataset.category === 'All'));
    update();
  });

  update();
}

function renderFaqs() {
  document.querySelectorAll('[data-faq-list]').forEach((list) => {
    list.innerHTML = FAQS.map((item, index) => `
      <article class="faq-item ${index === 0 ? 'is-open' : ''}">
        <button type="button" aria-expanded="${index === 0 ? 'true' : 'false'}"><span>${item.question}</span><strong>${index === 0 ? '−' : '+'}</strong></button>
        <div class="faq-answer" ${index === 0 ? '' : 'hidden'}><p>${item.answer}</p></div>
      </article>`).join('');

    list.addEventListener('click', (event) => {
      const button = event.target.closest('.faq-item button');
      if (!button) return;
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.querySelector('strong').textContent = isOpen ? '−' : '+';
      answer.hidden = !isOpen;
    });
  });
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const select = form.querySelector('[data-product-select]');
  const preview = form.querySelector('[data-plan-preview]');

  select.innerHTML = PRODUCTS.map((tool) => `<option value="${tool.title}">${tool.title}</option>`).join('');

  const updatePreview = () => {
    const tool = PRODUCTS.find((item) => item.title === select.value);
    preview.innerHTML = tool
      ? `<strong>Available plans</strong><div>${tool.plans.map((plan) => `<span>${plan.duration} · ${plan.price}</span>`).join('')}</div>`
      : '';
  };

  select.addEventListener('change', updatePreview);
  updatePreview();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const tool = PRODUCTS.find((item) => item.title === data.get('product'));
    const planText = tool ? tool.plans.map((plan) => `${plan.duration} (${plan.price})`).join(', ') : '';
    const message = [
      'Hello Tool Set, I would like some help with a subscription.',
      data.get('name') ? `Name: ${data.get('name')}` : '',
      data.get('contact') ? `Contact detail: ${data.get('contact')}` : '',
      `Product: ${data.get('product')}`,
      planText ? `Listed plans: ${planText}` : '',
      data.get('message') ? `Question: ${data.get('message')}` : ''
    ].filter(Boolean).join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  });
}


function ensureImageFallbacks() {
  document.querySelectorAll('.tool-logo img, .hero-tool img').forEach((img) => {
    let fallback = img.nextElementSibling;
    if (!fallback || (!fallback.classList.contains('tool-logo-fallback') && !fallback.classList.contains('mini-fallback'))) {
      fallback = document.createElement('span');
      fallback.className = 'mini-fallback';
      const title = img.closest('.hero-tool')?.querySelector('strong')?.textContent || 'TS';
      fallback.textContent = title.split(/\s+/).map((word) => word[0]).join('').slice(0, 2);
      img.insertAdjacentElement('afterend', fallback);
    }

    const showFallback = () => {
      if (img.naturalWidth > 0) return;
      img.style.display = 'none';
      fallback.style.display = 'grid';
    };

    img.addEventListener('error', showFallback, { once: true });
    if (img.complete) showFallback();
    else window.setTimeout(showFallback, 1600);
  });
}

function activateReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -24px' });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  initializeShell();
  renderProductSections();
  setupCatalogue();
  renderFaqs();
  setupContactForm();
  ensureImageFallbacks();
  activateReveal();
});
