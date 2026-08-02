const WHATSAPP_NUMBER = '9230320465542'
const whatsappLink = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
const linkedinPlans = [
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Sales Navigator', plan: 'New Account · 2 Months', price: 'PKR 4,000' },
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Sales Navigator', plan: 'Old Account · 1 Month', price: 'PKR 5,000' },
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Premium Career', plan: 'New Account · 3 Months', price: 'PKR 2,500' },
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Premium Business', plan: 'New Account · 2 Months', price: 'PKR 4,500' },
]

const allTools = [
  { mark: 'K', color: '#111827', title: 'Kling AI', plan: 'Standard Plan · Monthly', price: 'PKR 1,700' },
  { mark: '11', color: '#050505', title: 'ElevenLabs', plan: 'Monthly Portal Login', price: 'PKR 1,500' },
  { mark: '11', color: '#050505', title: 'ElevenLabs Pro', plan: '500K Credits · Monthly', price: 'PKR 14,500' },
  { mark: '11', color: '#050505', title: 'ElevenLabs Pro', plan: '300K Credits · Monthly', price: 'PKR 7,800' },
  { mark: 'Lv', color: '#ff5c7a', title: 'Lovable', plan: 'Lite Plan · Monthly', price: 'PKR 1,500' },
  { mark: 'Lv', color: '#ff5c7a', title: 'Lovable', plan: 'Lite Plan · Yearly', price: 'PKR 5,500' },
  { mark: 'L', color: '#7c3aed', title: 'Leonardo AI', plan: 'Standard Plan', price: 'PKR 2,300' },
  { mark: 'AI', color: '#10a37f', title: 'ChatGPT', plan: 'Plus Plan · Private · Monthly', price: 'PKR 3,500' },
  { mark: 'V', color: '#e11d48', title: 'vidIQ', plan: 'Boost Package · Monthly', price: 'PKR 1,500' },
  { mark: 'C', color: '#00c2cb', title: 'CapCut Pro', plan: 'Private · Monthly', price: 'PKR 1,200' },
  { mark: 'C', color: '#00c2cb', title: 'CapCut', plan: 'Shared · Monthly', price: 'PKR 700' },
  { mark: 'CC', color: '#d7263d', title: 'Adobe Creative Cloud', plan: 'Premium Plan', price: 'PKR 3,000' },
  { mark: 'CP', color: '#111827', title: 'Cursor Pro', plan: 'Monthly', price: 'PKR 4,500' },
  { mark: 'C', color: '#d97757', title: 'Claude Pro', plan: 'Monthly', price: 'PKR 5,000' },
  { mark: 'F', color: '#a259ff', title: 'Figma', plan: '2 Years Plan', price: 'PKR 6,000' },
  { mark: 'MS', color: '#f35325', title: 'Microsoft Office 365', plan: '1 Year Subscription', price: 'PKR 4,000' },
  { mark: 'E', color: '#81b441', title: 'Envato Elements', plan: 'Portal Login · Monthly', price: 'PKR 1,500' },
  { mark: '11', color: '#0078d4', title: 'Windows 11 Key', plan: 'License Key', price: 'PKR 2,500' },
  { mark: 'G', color: '#4285f4', title: 'Gemini Pro', plan: 'Monthly Plan', price: 'PKR 1,500' },
  { mark: 'V3', color: '#6d5dfb', title: 'Veo 3 Pro', plan: 'Monthly Plan', price: 'PKR 1,500' },
  { mark: 'NV', color: '#4687ff', title: 'NordVPN', plan: 'Monthly', price: 'PKR 1,000' },
  { mark: 'EV', color: '#da3940', title: 'ExpressVPN', plan: 'Private', price: 'PKR 1,400' },
  { mark: 'Cr', color: '#2a73cc', title: 'Coursera', plan: 'Yearly Plan', price: 'PKR 6,000' },
  { mark: 'Ca', color: '#7d2ae8', title: 'Canva Pro', plan: 'Monthly', price: 'PKR 400' },
  { mark: 'Ca', color: '#7d2ae8', title: 'Canva Pro', plan: 'Yearly', price: 'PKR 2,000' },
  { mark: 'S', color: '#183b56', title: 'Scribd', plan: 'Monthly', price: 'PKR 1,500' },
]
const reviews = [
  { quote: 'The process was easy to understand and the support team answered everything before activation.', name: 'Areeba Khan', role: 'Freelance Designer' },
  { quote: 'I liked the clear product cards and simple steps. Nothing felt confusing or overcomplicated.', name: 'Hassan Ali', role: 'Sales Executive' },
  { quote: 'The subscription was arranged quickly and the team stayed available during setup.', name: 'Maham Raza', role: 'University Student' },
]

const videos = [
  { id: 'zR2KXQSIBTk', title: 'LinkedIn Premium benefits explained', text: 'A simple overview of the features commonly used by professionals and job seekers.' },
  { id: 'V79x7045Bp0', title: 'Coursera platform review', text: 'A practical look at courses, certificates and the overall learning experience.' },
  { id: 'fXtxNbnNmb4', title: 'Microsoft 365 setup overview', text: 'A quick introduction to setting up and using Microsoft 365 for work.' },
]

const posts = [
  { category: 'Guides', title: 'How to choose the right subscription plan', excerpt: 'Start with the job you need the tool to do, then compare the features you will actually use.', date: 'July 18, 2026' },
  { category: 'LinkedIn', title: 'Career, Business or Sales Navigator?', excerpt: 'A quick comparison of the three common LinkedIn plans and the people each plan is best suited for.', date: 'July 12, 2026' },
  { category: 'Safety', title: 'Simple checks before buying a digital subscription', excerpt: 'Confirm delivery method, support availability and renewal terms before completing an order.', date: 'July 4, 2026' },
]

const routes = ['/', '/about', '/subscriptions', '/reviews', '/blogs', '/contact']

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  return routes.includes(hash) ? hash : '/'
}

function icon(name, size = 18) {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUp: '<path d="M7 17 17 7M7 7h10v10"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.8-5.2"/>',
    shield: '<path d="M12 3 19 6v6c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chat: '<path d="M21 11.5a8.5 8.5 0 0 1-9 8.4 8.8 8.8 0 0 1-3.7-.8L3 20l1-4.9a8.5 8.5 0 1 1 17-3.6Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    quote: '<path d="M9 11H5a4 4 0 0 1 4-4v4Zm10 0h-4a4 4 0 0 1 4-4v4Z"/><path d="M5 11v6h4v-6M15 11v6h4v-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>',
  }
  return `<svg ${common}>${paths[name] || ''}</svg>`
}

function navLink(path, label, current) {
  return `<a href="#${path}" class="nav-link ${current === path ? 'active' : ''}">${label}</a>`
}

function navbar(current) {
  return `
    <header class="site-header">
      <div class="nav-wrap container">
        <a href="#/" class="brand" aria-label="Tool Set home">
          <span class="brand-logo"><img src="./assets/logo.png" alt="Tool Set logo" /></span>
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">
          ${navLink('/', 'Home', current)}
          ${navLink('/about', 'About Us', current)}
          ${navLink('/subscriptions', 'Subscriptions', current)}
          ${navLink('/reviews', 'Reviews', current)}
          ${navLink('/blogs', 'Blogs', current)}
        </nav>
        <a href="#/contact" class="button button-outline nav-contact">Contact Us</a>
        <button class="mobile-menu-button" type="button" aria-label="Open menu" aria-expanded="false">${icon('menu', 20)}</button>
      </div>
      <div class="mobile-menu" hidden>
        ${navLink('/', 'Home', current)}
        ${navLink('/about', 'About Us', current)}
        ${navLink('/subscriptions', 'Subscriptions', current)}
        ${navLink('/reviews', 'Reviews', current)}
        ${navLink('/blogs', 'Blogs', current)}
        ${navLink('/contact', 'Contact Us', current)}
      </div>
    </header>`
}

function hero() {
  return `
    <section class="container hero-grid section-top">
      <div class="hero-copy panel panel-blue reveal">
        <p class="eyebrow">Official Digital Subscriptions</p>
        <h1>Save on the tools you use every day</h1>
        <p class="hero-trust">Trusted by professionals, students and growing teams</p>
        <div class="trust-points">
          <span>${icon('shield', 15)} Clear product details</span>
          <span>${icon('clock', 15)} Quick guidance</span>
          <span>${icon('chat', 15)} Direct support</span>
        </div>
        <p class="body-copy">Browse useful software and learning subscriptions in one simple place. Compare plans, confirm availability and receive setup support.</p>
        <div class="button-row">
          <a href="#/subscriptions" class="button button-primary">Browse subscriptions ${icon('arrow', 16)}</a>
          <a href="${whatsappLink('Hello, I would like to know more about your premium services.')}" target="_blank" rel="noopener noreferrer" class="button button-soft">Chat on WhatsApp</a>
        </div>
      </div>
      <div class="hero-media reveal delay-1">
        <div class="video-shell">
          <iframe src="https://www.youtube-nocookie.com/embed/zR2KXQSIBTk?rel=0" title="LinkedIn Premium overview" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="hero-media-bottom">
          <div><span>Simple guidance</span><strong>HAPPY<br/>CLIENTS</strong></div>
          <div class="score-card"><strong>97%</strong><small>positive feedback</small></div>
        </div>
      </div>
    </section>`
}

function procedure() {
  return `
    <section class="section border-top">
      <div class="container split-grid">
        <div class="photo-collage reveal">
          <img class="photo-main" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82" alt="Team discussing a project" />
          <img class="photo-side" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=82" alt="People working together" />
          <img class="photo-bottom" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=82" alt="Customer support team" />
        </div>
        <div class="reveal delay-1">
          <p class="eyebrow">Procedure</p>
          <h2>How to proceed</h2>
          <p class="body-copy">Select a product, confirm availability and our support team will guide you through the remaining steps.</p>
          <ol class="step-list">
            <li>${icon('check', 18)} Choose the plan that suits you best.</li>
            <li>${icon('check', 18)} Open the product page and review the delivery method.</li>
            <li>${icon('check', 18)} Contact the support team to confirm availability.</li>
            <li>${icon('check', 18)} Complete payment using an available method.</li>
            <li>${icon('check', 18)} Receive activation guidance and order confirmation.</li>
          </ol>
          <a href="#/about" class="button button-primary">Read more ${icon('arrow', 16)}</a>
        </div>
      </div>
    </section>`
}

const logoDomains = {
  'LinkedIn Sales Navigator': 'linkedin.com', 'LinkedIn Premium Career': 'linkedin.com', 'LinkedIn Premium Business': 'linkedin.com',
  'Kling AI': 'klingai.com', 'ElevenLabs': 'elevenlabs.io', 'ElevenLabs Pro': 'elevenlabs.io', 'Lovable': 'lovable.dev',
  'Leonardo AI': 'leonardo.ai', 'ChatGPT': 'chatgpt.com', 'vidIQ': 'vidiq.com', 'CapCut Pro': 'capcut.com', 'CapCut': 'capcut.com',
  'Adobe Creative Cloud': 'adobe.com', 'Cursor Pro': 'cursor.com', 'Claude Pro': 'claude.ai', 'Figma': 'figma.com',
  'Microsoft Office 365': 'microsoft.com', 'Envato Elements': 'elements.envato.com', 'Windows 11 Key': 'microsoft.com',
  'Gemini Pro': 'gemini.google.com', 'Veo 3 Pro': 'deepmind.google', 'NordVPN': 'nordvpn.com', 'ExpressVPN': 'expressvpn.com',
  'Coursera': 'coursera.org', 'Canva Pro': 'canva.com', 'Scribd': 'scribd.com',
}
function productCard(item) {
  return `
    <article class="product-card reveal">
      <span class="tool-logo" style="--logo-color:${item.color}"><img src="https://www.google.com/s2/favicons?domain=${logoDomains[item.title]}&sz=128" alt="${item.title} logo" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden>${item.mark}</span></span>
      <h3>${item.title}</h3>
      <p class="stock">${item.plan}</p>
      <p class="product-copy"><strong>${item.price}</strong></p>
      <div class="card-actions">
        <a href="#/subscriptions" class="button button-card-outline">Learn more ${icon('arrowUp', 13)}</a>
        <a href="${whatsappLink(`Hello, I am interested in ${item.title} — ${item.plan}. Please share more details.`)}" target="_blank" rel="noopener noreferrer" class="button button-whatsapp">${icon('chat', 14)} Chat on WhatsApp</a>
      </div>
    </article>`
}

function productSection({ eyebrow = '', title, description, products, theme = 'lavender', viewAll = false }) {
  return `
    <section class="section product-section ${theme}">
      <div class="container">
        <div class="section-heading reveal">
          ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
        <div class="product-grid">${products.map(productCard).join('')}</div>
        ${viewAll ? `<div class="section-action"><a href="#/subscriptions" class="button button-primary">View All Services ${icon('arrowUp', 14)}</a></div>` : ''}
      </div>
    </section>`
}

function payments() {
  const methods = [
    ['https://cdn.simpleicons.org/visa/1A1F71', 'Visa', 'Credit & debit cards'],
    ['https://cdn.simpleicons.org/mastercard/EB001B', 'Mastercard', 'Credit & debit cards'],
    ['https://cdn.simpleicons.org/applepay/000000', 'Apple Pay', 'One-tap checkout'],
    ['https://cdn.simpleicons.org/paypal/003087', 'PayPal', 'Buyer-protected payments'],
    ['https://cdn.simpleicons.org/payoneer/FF4800', 'Payoneer', 'Global transfers'],
  ]
  return `
    <section class="section border-top payment-section">
      <div class="container">
        <div class="section-heading reveal"><p class="eyebrow">100% Secure Checkout</p><h2>We accept major payment methods</h2><p>Choose the option that works best for you.</p></div>
        <div class="payment-grid">${methods.map(([logo, title, sub]) => `<div class="payment-card reveal"><span class="payment-logo"><img src="${logo}" alt="${title} official logo" loading="lazy"></span><strong>${title}</strong><small>${sub}</small></div>`).join('')}</div>
      </div>
    </section>`
}
function stats() {
  const items = [['15+', 'PRODUCTS'], ['10k+', 'CUSTOMERS'], ['5', 'COUNTRIES'], ['97%', 'HAPPY CLIENTS']]
  return `
    <section class="container stats-section reveal">
      <div class="stats-banner">
        <p>Serving customers across multiple regions</p>
        <div class="stats-grid">${items.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>
      </div>
    </section>`
}

function whyChooseUs() {
  const points = [
    ['Clear options', 'Each listing clearly explains what the plan includes, how it is delivered and what support is available.'],
    ['Simple process', 'Choose a plan, contact the team, complete payment and receive guided activation without unnecessary steps.'],
    ['Helpful support', 'Questions are handled through direct support so customers can understand the product before ordering.'],
  ]
  return `
    <section class="section">
      <div class="container split-grid why-grid">
        <div class="reveal">
          <h2>Why choose us</h2>
          <div class="why-list">${points.map(([title, text], index) => `<div class="why-item"><span>${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div>
        </div>
        <div class="video-card reveal delay-1">
          <div class="video-label">${icon('play', 17)} Microsoft 365 setup overview</div>
          <iframe src="https://www.youtube-nocookie.com/embed/fXtxNbnNmb4?rel=0" title="Microsoft 365 setup overview" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>`
}

function pageHero(eyebrow, title, description) {
  return `<section class="container section-top"><div class="page-hero panel panel-blue reveal"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${description}</p></div></section>`
}

function homePage() {
  return `${hero()}${procedure()}${productSection({ eyebrow: 'Our subscriptions', title: 'LinkedIn Premium Plans', description: 'Choose a plan for job searching, networking, business growth or lead generation.', products: linkedinPlans, theme: 'lavender' })}${productSection({ title: 'All Premium Tools', description: 'A simple selection of productivity, learning, security and creative tools.', products: allTools.slice(0, 6), theme: 'bluefade', viewAll: true })}${payments()}${stats()}${whyChooseUs()}`
}

function aboutPage() {
  const values = [
    ['Simple catalogue', 'Products are grouped clearly so visitors can understand the options without digging through long pages.'],
    ['Clear information', 'Every product explains its delivery method, availability and basic purpose before contact.'],
    ['Human support', 'Customers can ask questions and confirm details before they place an order.'],
  ]
  return `
    ${pageHero('About us', 'A simple place to explore useful digital tools', 'The website is designed around clear product information, easy comparison and direct support.')}
    <section class="section"><div class="container split-grid"><img class="about-image reveal" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=84" alt="Team working together"/><div class="reveal delay-1"><p class="eyebrow">Our approach</p><h2>Keep the buying journey easy to follow</h2><p class="body-copy">Instead of using complicated pages, the website follows a direct flow: browse, understand, ask and proceed. The layout intentionally stays close to the original reference design.</p><ul class="plain-checks"><li>${icon('check', 18)} Clear product categories</li><li>${icon('check', 18)} Visible availability status</li><li>${icon('check', 18)} Simple contact and support flow</li></ul></div></div></section>
    <section class="section product-section lavender"><div class="container value-grid">${values.map(([title, text], i) => `<article class="value-card reveal"><span>0${i + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>`
}

function subscriptionsPage() {
  return `${pageHero('Subscriptions', 'Choose the tool that fits your work', 'Browse the available plans below. Product descriptions and availability are sample content and can be replaced with your final catalogue.')}${productSection({ eyebrow: 'Professional plans', title: 'LinkedIn subscriptions', description: 'Plans for careers, networking, business and sales teams.', products: linkedinPlans, theme: 'lavender' })}${productSection({ eyebrow: 'Complete catalogue', title: 'All digital tools', description: 'Productivity, learning, security, creative and development subscriptions.', products: allTools, theme: 'bluefade' })}`
}

function reviewsPage() {
  return `
    ${pageHero('Reviews', 'Simple feedback from customers', 'A clean review page with written testimonials and useful embedded videos.')}
    <section class="section"><div class="container review-grid">${reviews.map(review => `<article class="review-card reveal">${icon('quote', 24)}<div class="stars">★★★★★</div><p>“${review.quote}”</p><footer><strong>${review.name}</strong><span>${review.role}</span></footer></article>`).join('')}</div></section>
    <section class="section product-section lavender"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Video resources</p><h2>Helpful product videos</h2><p>These embedded videos are temporary examples and can later be replaced with your own customer videos.</p></div><div class="video-grid">${videos.map(video => `<article class="video-resource reveal"><iframe src="https://www.youtube-nocookie.com/embed/${video.id}?rel=0" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div><h3>${video.title}</h3><p>${video.text}</p></div></article>`).join('')}</div></div></section>`
}

function blogsPage() {
  return `
    ${pageHero('Blogs', 'Short guides for choosing digital tools', 'Temporary blog content for the additional page. You can replace these cards with real posts later.')}
    <section class="section"><div class="container blog-grid">${posts.map((post, index) => `<article class="blog-card reveal"><div class="blog-cover cover-${index + 1}"></div><div class="blog-body"><div class="blog-meta"><span>${post.category}</span><span>${post.date}</span></div><h2>${post.title}</h2><p>${post.excerpt}</p><a href="#/blogs">Read article ${icon('arrow', 15)}</a></div></article>`).join('')}</div></section>`
}

function contactPage() {
  return `
    ${pageHero('Contact', 'Ask about a product before ordering', 'Use the sample form below or replace the placeholder details with your official WhatsApp, email and location.')}
    <section class="section"><div class="container contact-grid"><aside class="contact-panel reveal"><h2>Contact details</h2><p>The following details are placeholders inside this demo website.</p><div class="contact-list"><div>${icon('phone', 18)}<span><small>Phone</small><strong>+92 300 000 0000</strong></span></div><div>${icon('mail', 18)}<span><small>Email</small><strong>hello@toolset.example</strong></span></div><div>${icon('pin', 18)}<span><small>Location</small><strong>Pakistan</strong></span></div><div>${icon('chat', 18)}<span><small>Response time</small><strong>Usually within a few minutes</strong></span></div></div></aside><form class="contact-form reveal delay-1"><div class="form-row"><label>Your name<input type="text" placeholder="Enter your name" /></label><label>Email or phone<input type="text" placeholder="Enter your contact detail" /></label></div><label>Product<select><option>Select a product</option><option>LinkedIn Premium</option><option>Microsoft 365</option><option>Coursera Premium</option><option>Other tool</option></select></label><label>Message<textarea rows="5" placeholder="Write your question"></textarea></label><button class="button button-primary" type="submit">Send message</button><p class="form-message" aria-live="polite"></p></form></div></section>`
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container cta-wrap reveal"><div class="footer-cta"><div><h2>Let’s make choosing your next tool easier</h2><p>Ask about a product, delivery method or activation process before placing an order.</p></div><a href="#/contact" class="button button-white">Talk with our team</a></div></div>
      <div class="footer-main"><div class="container footer-grid"><div><h3>All Premium Tools</h3><p>A simple catalogue for digital subscriptions, product information and guided support.</p><div class="socials"><span>f</span><span>in</span><span>ig</span><span>wa</span></div></div><div><h4>Quick links</h4><a href="#/about">About Us</a><a href="#/subscriptions">Subscriptions</a><a href="#/reviews">Reviews</a><a href="#/contact">Contact Us</a></div><div><h4>Our solutions</h4><a href="#/subscriptions">LinkedIn Career Premium</a><a href="#/subscriptions">LinkedIn Business Premium</a><a href="#/subscriptions">Sales Navigator</a><a href="#/subscriptions">All Premium Tools</a></div><div><h4>Get in touch</h4><p>+92 300 000 0000</p><p>hello@toolset.example</p><h4 class="footer-location">Location</h4><p>Pakistan</p></div></div><div class="container copyright">© 2026 Tool Set. Demo content can be replaced with your final business details.</div></div>
    </footer>
    <a href="${whatsappLink('Hello, I would like to know more about your premium services.')}" target="_blank" rel="noopener noreferrer" class="floating-chat" aria-label="Chat with us on WhatsApp">${icon('chat', 25)}</a>`
}

function renderPage(route) {
  const pages = {
    '/': homePage,
    '/about': aboutPage,
    '/subscriptions': subscriptionsPage,
    '/reviews': reviewsPage,
    '/blogs': blogsPage,
    '/contact': contactPage,
  }
  document.getElementById('app').innerHTML = `${navbar(route)}<main>${pages[route]()}</main>${footer()}`
  document.title = route === '/' ? 'All Premium Tools — Digital Subscriptions' : `${route.slice(1).replace(/^./, c => c.toUpperCase())} — All Premium Tools`
  window.scrollTo({ top: 0, behavior: 'auto' })
  setupInteractions()
}

function setupInteractions() {
  const menuButton = document.querySelector('.mobile-menu-button')
  const menu = document.querySelector('.mobile-menu')
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menu.hasAttribute('hidden')
      if (open) menu.removeAttribute('hidden')
      else menu.setAttribute('hidden', '')
      menuButton.setAttribute('aria-expanded', String(open))
      menuButton.innerHTML = open ? icon('close', 20) : icon('menu', 20)
    })
  }

  const revealItems = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    revealItems.forEach(item => observer.observe(item))
  } else {
    revealItems.forEach(item => item.classList.add('visible'))
  }

  const form = document.querySelector('.contact-form')
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault()
      form.querySelector('.form-message').textContent = 'Demo form submitted. Connect this form to your email or WhatsApp before launch.'
    })
  }
}

window.addEventListener('hashchange', () => renderPage(getRoute()))
renderPage(getRoute())
