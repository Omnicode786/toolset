import React from 'react';

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export const Icon = ({ name, size = 18 }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
    arrowUp: <path d="M7 17 17 7M7 7h10v10"/>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.8-5.2"/></>,
    shield: <><path d="M12 3 19 6v6c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    chat: <path d="M21 11.5a8.5 8.5 0 0 1-9 8.4 8.8 8.8 0 0 1-3.7-.8L3 20l1-4.9a8.5 8.5 0 1 1 17-3.6Z"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    quote: <><path d="M9 11H5a4 4 0 0 1 4-4v4Zm10 0h-4a4 4 0 0 1 4-4v4Z"/><path d="M5 11v6h4v-6M15 11v6h4v-6"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></>,
  };

  return (
    <svg width={size} height={size} {...common}>
      {paths[name] || null}
    </svg>
  );
};
