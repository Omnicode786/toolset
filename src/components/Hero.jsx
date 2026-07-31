import { ShieldIcon, BoltIcon, ChatIcon, PlayIcon } from '../Icons'

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-14">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-brand-sky rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-brand-ink">
            Save Up to 90% on Official Premium Subscriptions
          </h1>
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Trusted by 100k+ Professionals Worldwide
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5"><ShieldIcon className="w-3.5 h-3.5" /> Secure Payments</span>
            <span className="inline-flex items-center gap-1.5"><BoltIcon className="w-3.5 h-3.5" /> Activation in Minutes</span>
            <span className="inline-flex items-center gap-1.5"><ChatIcon className="w-3.5 h-3.5" /> WhatsApp Support</span>
          </div>

          <p className="mt-5 text-slate-500 text-sm leading-relaxed max-w-md">
            Stop overpaying for premium tools. Get official subscriptions at up to 90% OFF and save more every month.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#subscriptions" className="rounded-full bg-brand-blue text-white text-sm font-semibold px-6 py-3 hover:bg-blue-700 transition-colors">
              Claim Your 90% OFF Offer →
            </a>
            <a href="#contact" className="rounded-full border border-brand-blue/40 text-brand-blue text-sm font-semibold px-6 py-3 hover:bg-white transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden min-h-[320px] bg-gradient-to-br from-brand-cyan to-brand-blue flex items-end p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
          <button
            aria-label="Play testimonial video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/25 backdrop-blur flex items-center justify-center hover:bg-white/35 transition-colors"
          >
            <PlayIcon className="w-7 h-7 text-white" />
          </button>
          <p className="relative font-display font-extrabold text-white text-3xl sm:text-4xl leading-none">
            HAPPY<br />CLIENTS
          </p>
        </div>
      </div>
    </section>
  )
}
