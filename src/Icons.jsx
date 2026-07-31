export const WhatsAppIcon = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
  </svg>
)

export const CheckCircle = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.2l2.4 2.4 4.6-5.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const PlayIcon = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
)

export const ShieldIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
  </svg>
)

export const BoltIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
)

export const ChatIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.6-.8L3 20l1-4.9A8.4 8.4 0 1 1 21 11.5Z" />
  </svg>
)

// Generic glyph used for tool logos — a rounded square with a letter/mark,
// since we cannot use the original trademarked brand logos.
export const ToolMark = ({ bg = '#1979E6', label = '?', className = 'w-11 h-11' }) => (
  <div
    className={`${className} rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shrink-0`}
    style={{ backgroundColor: bg }}
  >
    {label}
  </div>
)

export const BankIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path d="M3 10l9-6 9 6M4 10v9h16v-9M9 13v4M15 13v4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CardIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M7 15h4" strokeLinecap="round" />
  </svg>
)

export const AppleIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.4 12.6c0-2 1.6-3 1.7-3-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.2ZM14 5.6c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2Z" />
  </svg>
)

export const PayPalIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.5 4h6.2c2.5 0 4 1.4 3.6 3.7-.4 2.7-2.3 4.2-4.9 4.2h-2l-.6 3.6H6.7L7.5 4zm4 8.9c2.4 0 3.9-1.3 4.3-3.6.4-2.1-.8-3.3-2.9-3.3h-3l-1.4 8.6h1.4l.5-1.7h1.1z" />
  </svg>
)

export const PayoneerIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18" strokeLinecap="round" />
  </svg>
)

const paymentIconMap = {
  bank: BankIcon,
  card: CardIcon,
  apple: AppleIcon,
  paypal: PayPalIcon,
  payoneer: PayoneerIcon,
}

export const PaymentIcon = ({ name, className }) => {
  const Cmp = paymentIconMap[name] || BankIcon
  return <Cmp className={className} />
}
