import { PlayIcon } from '../Icons'
import { paymentMethods, stats, whyChooseUs } from '../data'

export function Payments() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t hairline text-center">
      <p className="eyebrow text-xs font-bold text-brand-blue uppercase">100% Secure Checkout</p>
      <h2 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl text-brand-ink">
        We accept major payment methods
      </h2>
      <p className="mt-2 text-sm text-slate-500">Pay your way. Fast, safe and verified.</p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {paymentMethods.map((m) => (
          <div key={m.title} className="w-40 rounded-2xl bg-brand-sky p-5 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm">
              <img src={m.logo} alt={`${m.title} official logo`} className="w-8 h-8 object-contain" loading="lazy" />
            </div>
            <p className="font-display font-bold text-sm">{m.title}</p>
            <p className="text-xs text-slate-400">{m.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-600 to-rose-500 py-12 px-8">
        <p className="text-center text-xs font-semibold text-white/80 tracking-wide">
          We are proudly operating on Countries Globally Now
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-extrabold text-3xl sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-[11px] tracking-widest text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-ink">
            Why Choose Us
          </h2>

          <div className="mt-8 space-y-8">
            {whyChooseUs.map((item, idx) => (
              <div key={item.n} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-blue text-brand-blue flex items-center justify-center text-xs font-bold shrink-0">
                    {item.n}
                  </div>
                  {idx !== whyChooseUs.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-1" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-display font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-slate-700 to-slate-900 flex items-end p-6">
          <div className="absolute top-4 left-4 right-4 bg-white/90 rounded-xl px-3 py-2 text-xs font-semibold text-brand-ink flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-blue" />
            LinkedIn Premium Subscription upto 90% OFF
          </div>
          <button
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-rose-500 flex items-center justify-center hover:brightness-95 transition"
          >
            <PlayIcon className="w-6 h-6 text-white" />
          </button>
          <p className="relative font-display font-extrabold text-white text-2xl">
            YOU CAN GET UP
          </p>
        </div>
      </div>
    </section>
  )
}
