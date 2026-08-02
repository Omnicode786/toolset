import { WhatsAppIcon } from '../Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/9230320465542?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20premium%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-whatsapp text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 hover:brightness-95 transition"
    >
      <WhatsAppIcon className="w-9 h-9" />
    </a>
  )
}
