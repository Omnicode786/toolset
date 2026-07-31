import { footerLinks } from '../data'

function CTA() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10 -mb-16">
      <div className="rounded-3xl bg-gradient-to-r from-rose-500 via-indigo-600 to-blue-700 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl max-w-md leading-snug">
            Let's create the best experience for your business together
          </h2>
          <p className="mt-3 text-white/80 text-sm max-w-md">
            Collaborate to create exceptional business experiences tailored to your needs. Contact us today and let's transform your digital presence.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 rounded-full bg-white text-brand-ink text-sm font-semibold px-6 py-3 hover:bg-slate-100 transition-colors"
        >
          Let's Talk with our team
        </a>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24">
      <CTA />
      <div className="bg-brand-dark text-white pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display font-extrabold text-lg">All Premium Tools</p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
              Stop overpaying for premium tools. Get official subscriptions at up to 90% OFF and save more every month.
            </p>
            <div className="mt-5 flex gap-3 text-white/70">
              {['facebook', 'linkedin', 'instagram', 'whatsapp'].map((s) => (
                <span key={s} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs uppercase">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display font-bold">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {footerLinks.quick.map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold">Our Solutions</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {footerLinks.solutions.map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold">Get In Touch</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>+92-XXX-XXX-XXXX</li>
              <li>info@yourdomain.com</li>
              <li className="pt-2 font-semibold text-white/80">Location</li>
              <li>Your Office Address, City</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
