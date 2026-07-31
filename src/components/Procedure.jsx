import { CheckCircle } from '../Icons'
import { proceedSteps } from '../data'

export default function Procedure() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t hairline">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-[4/3] flex items-center justify-center">
          <p className="text-slate-400 text-sm">Team collaboration photo</p>
        </div>

        <div>
          <p className="eyebrow text-xs font-bold text-brand-blue uppercase">Procedure</p>
          <h2 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl text-brand-ink">
            How to Proceed
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md">
            To subscribe, click on the button which will redirect you to WhatsApp. Leave a message, our support agent will contact you within 5 mins
          </p>

          <ul className="mt-6 space-y-3">
            {proceedSteps.map((step) => (
              <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <a href="#subscriptions" className="mt-7 inline-flex rounded-full bg-brand-blue text-white text-sm font-semibold px-6 py-3 hover:bg-blue-700 transition-colors">
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
