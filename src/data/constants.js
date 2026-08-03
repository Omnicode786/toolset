export const WHATSAPP_NUMBER = '9230320465542';

export const whatsappLink = (message) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const linkedinPlans = [
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Premium Career', plan: 'New Account · 3 Months', price: 'PKR 2,500' },
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Premium Business', plan: 'New Account · 2 Months', price: 'PKR 4,500' },
  { mark: 'in', color: '#0a66c2', title: 'LinkedIn Sales Navigator', plan: 'New Account · 2 Months', price: 'PKR 4,000' },
];

export const allTools = [
  { mark: 'K', color: '#111827', title: 'Kling AI', plan: 'Standard · Monthly', price: 'PKR 1,700' },
  { mark: '11', color: '#050505', title: 'ElevenLabs', plan: 'Portal Login · Monthly', price: 'PKR 1,500' },
  { mark: '11', color: '#050505', title: 'ElevenLabs Pro', plan: '500K Credits · Monthly', price: 'PKR 14,500' },
  { mark: '11', color: '#050505', title: 'ElevenLabs Pro', plan: '300K Credits · Monthly', price: 'PKR 7,800' },
  { mark: 'Lv', color: '#ff5c7a', title: 'Lovable', plan: 'Lite · Monthly', price: 'PKR 1,500' },
  { mark: 'Lv', color: '#ff5c7a', title: 'Lovable', plan: 'Lite · Yearly', price: 'PKR 5,500' },
  { mark: 'L', color: '#7c3aed', title: 'Leonardo AI', plan: 'Standard', price: 'PKR 2,300' },
  { mark: 'AI', color: '#10a37f', title: 'ChatGPT', plan: 'Plus · Private · Monthly', price: 'PKR 3,500' },
  { mark: 'V', color: '#e11d48', title: 'vidIQ', plan: 'Boost · Monthly', price: 'PKR 1,500' },
  { mark: 'C', color: '#00c2cb', title: 'CapCut Pro', plan: 'Private · Monthly', price: 'PKR 1,200' },
  { mark: 'C', color: '#00c2cb', title: 'CapCut', plan: 'Shared · Monthly', price: 'PKR 700' },
  { mark: 'CC', color: '#d7263d', title: 'Adobe Creative Cloud', plan: 'Premium', price: 'PKR 3,000' },
  { mark: 'CP', color: '#111827', title: 'Cursor Pro', plan: 'Monthly', price: 'PKR 4,500' },
  { mark: 'C', color: '#d97757', title: 'Claude Pro', plan: 'Monthly', price: 'PKR 5,000' },
  { mark: 'F', color: '#a259ff', title: 'Figma', plan: '2 Years', price: 'PKR 6,000' },
  { mark: 'MS', color: '#f35325', title: 'Microsoft Office 365', plan: '1 Year', price: 'PKR 4,000' },
  { mark: 'E', color: '#81b441', title: 'Envato Elements', plan: 'Portal Login · Monthly', price: 'PKR 1,500' },
  { mark: '11', color: '#0078d4', title: 'Windows 11 Key', plan: 'License Key', price: 'PKR 2,500' },
  { mark: 'G', color: '#4285f4', title: 'Gemini Pro', plan: 'Monthly', price: 'PKR 1,500' },
  { mark: 'V3', color: '#6d5dfb', title: 'Veo 3 Pro', plan: 'Monthly', price: 'PKR 1,500' },
  { mark: 'NV', color: '#4687ff', title: 'NordVPN', plan: 'Monthly', price: 'PKR 1,000' },
  { mark: 'EV', color: '#da3940', title: 'ExpressVPN', plan: 'Private', price: 'PKR 1,400' },
  { mark: 'Cr', color: '#2a73cc', title: 'Coursera', plan: 'Yearly', price: 'PKR 6,000' },
  { mark: 'Ca', color: '#7d2ae8', title: 'Canva Pro', plan: 'Monthly', price: 'PKR 400' },
  { mark: 'Ca', color: '#7d2ae8', title: 'Canva Pro', plan: 'Yearly', price: 'PKR 2,000' },
  { mark: 'S', color: '#183b56', title: 'Scribd', plan: 'Monthly', price: 'PKR 1,500' },
];

export const reviews = [
  { quote: 'The process was easy to understand and the support team answered everything before activation.', name: 'Areeba Khan', role: 'Freelance Designer' },
  { quote: 'I liked the clear product cards and simple steps. Nothing felt confusing or overcomplicated.', name: 'Hassan Ali', role: 'Sales Executive' },
  { quote: 'The subscription was arranged quickly and the team stayed available during setup.', name: 'Maham Raza', role: 'University Student' },
];

export const videos = [
  { id: 'zR2KXQSIBTk', title: 'LinkedIn Premium benefits explained', text: 'A simple overview of the features commonly used by professionals and job seekers.' },
  { id: 'V79x7045Bp0', title: 'Coursera platform review', text: 'A practical look at courses, certificates and the overall learning experience.' },
  { id: 'fXtxNbnNmb4', title: 'Microsoft 365 setup overview', text: 'A quick introduction to setting up and using Microsoft 365 for work.' },
];

export const posts = [
  { category: 'Guides', title: 'How to choose the right subscription plan', excerpt: 'Start with the job you need the tool to do, then compare the features you will actually use.', date: 'July 18, 2026' },
  { category: 'LinkedIn', title: 'Career, Business or Sales Navigator?', excerpt: 'A quick comparison of the three common LinkedIn plans and the people each plan is best suited for.', date: 'July 12, 2026' },
  { category: 'Safety', title: 'Simple checks before buying a digital subscription', excerpt: 'Confirm delivery method, support availability and renewal terms before completing an order.', date: 'July 4, 2026' },
];

export const logoDomains = {
  'LinkedIn Sales Navigator': 'linkedin.com', 'LinkedIn Premium Career': 'linkedin.com', 'LinkedIn Premium Business': 'linkedin.com',
  'Kling AI': 'klingai.com', 'ElevenLabs': 'elevenlabs.io', 'ElevenLabs Pro': 'elevenlabs.io', 'Lovable': 'lovable.dev',
  'Leonardo AI': 'leonardo.ai', 'ChatGPT': 'chatgpt.com', 'vidIQ': 'vidiq.com', 'CapCut Pro': 'capcut.com', 'CapCut': 'capcut.com',
  'Adobe Creative Cloud': 'adobe.com', 'Cursor Pro': 'cursor.com', 'Claude Pro': 'claude.ai', 'Figma': 'figma.com',
  'Microsoft Office 365': 'microsoft.com', 'Envato Elements': 'elements.envato.com', 'Windows 11 Key': 'microsoft.com',
  'Gemini Pro': 'gemini.google.com', 'Veo 3 Pro': 'deepmind.google', 'NordVPN': 'nordvpn.com', 'ExpressVPN': 'expressvpn.com',
  'Coursera': 'coursera.org', 'Canva Pro': 'canva.com', 'Scribd': 'scribd.com',
};
