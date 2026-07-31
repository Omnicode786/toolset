import { WhatsAppIcon } from '../Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href="#contact"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-whatsapp text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 hover:brightness-95 transition"
    >
      <WhatsAppIcon className="w-9 h-9" />
    </a>
  )
}
