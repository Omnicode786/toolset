import { ToolMark, WhatsAppIcon } from '../Icons'
import { linkedinPlans, allTools } from '../data'

const initials = {
  in: 'in',
  nav: 'SN',
  gpt: 'AI',
  coursera: 'Cr',
  ms: 'MS',
  lovable: 'Lv',
  nordvpn: 'NV',
  badge: '✓',
}

function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border hairline p-6 flex flex-col hover:shadow-lg hover:shadow-slate-200/60 transition-shadow">
      <ToolMark bg={item.color || item.bg} label={initials[item.icon] || '•'} />
      <h3 className="mt-4 font-display font-bold text-brand-ink">{item.title}</h3>
      <p className={`mt-1 text-xs font-semibold ${item.statusColor}`}>{item.status}</p>
      <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">{item.desc}</p>

      <div className="mt-5 flex flex-col gap-2">
        <a href="#" className="text-center rounded-full border border-brand-blue text-brand-blue text-sm font-semibold py-2.5 hover:bg-brand-blue hover:text-white transition-colors">
          Learn More
        </a>
        <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-whatsapp text-white text-sm font-semibold py-2.5 hover:brightness-95 transition">
          <WhatsAppIcon className="w-4 h-4" /> Chat with live agent
        </a>
      </div>
    </div>
  )
}

export function LinkedInPlans() {
  return (
    <section id="subscriptions" className="bg-gradient-to-b from-brand-sky/60 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto">
          <p className="eyebrow text-xs font-bold text-brand-blue uppercase">Our Subscriptions</p>
          <h2 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl text-brand-ink">
            LinkedIn Premium Plans
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose the right LinkedIn Premium plan for networking, jobs, sales, and business growth.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkedinPlans.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function AllTools() {
  return (
    <section className="bg-gradient-to-b from-white to-brand-sky/40 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl text-brand-ink">
          All Premium Tools
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTools.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
