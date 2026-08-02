import { WhatsAppIcon } from '../Icons'
import { linkedinPlans, allTools } from '../data'

const logoDomains = {
  'LinkedIn Sales Navigator': 'linkedin.com', 'LinkedIn Premium Career': 'linkedin.com', 'LinkedIn Premium Business': 'linkedin.com',
  'Kling AI': 'klingai.com', 'ElevenLabs': 'elevenlabs.io', 'ElevenLabs Pro': 'elevenlabs.io', 'Lovable': 'lovable.dev',
  'Leonardo AI': 'leonardo.ai', 'ChatGPT': 'chatgpt.com', 'vidIQ': 'vidiq.com', 'CapCut Pro': 'capcut.com', 'CapCut': 'capcut.com',
  'Adobe Creative Cloud': 'adobe.com', 'Cursor Pro': 'cursor.com', 'Claude Pro': 'claude.ai', 'Figma': 'figma.com',
  'Microsoft Office 365': 'microsoft.com', 'Envato Elements': 'elements.envato.com', 'Windows 11 Key': 'microsoft.com',
  'Gemini Pro': 'gemini.google.com', 'Veo 3 Pro': 'deepmind.google', 'NordVPN': 'nordvpn.com', 'ExpressVPN': 'expressvpn.com',
  'Coursera': 'coursera.org', 'Canva Pro': 'canva.com', 'Scribd': 'scribd.com',
}
function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border hairline p-6 flex flex-col hover:shadow-lg hover:shadow-slate-200/60 transition-shadow">
      <div className="w-11 h-11 rounded-xl border hairline bg-white shadow-sm flex items-center justify-center overflow-hidden"><img src={`https://www.google.com/s2/favicons?domain=${logoDomains[item.title]}&sz=128`} alt={`${item.title} logo`} className="w-8 h-8 object-contain" loading="lazy" /></div>
      <h3 className="mt-4 font-display font-bold text-brand-ink">{item.title}</h3>
      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{item.plan}</p>
      <p className="mt-3 text-lg font-display font-extrabold text-brand-blue flex-1">{item.price}</p>

      <div className="mt-5 flex flex-col gap-2">
        <a href="#" className="text-center rounded-full border border-brand-blue text-brand-blue text-sm font-semibold py-2.5 hover:bg-brand-blue hover:text-white transition-colors">
          Learn More
        </a>
        <a href={`https://wa.me/9230320465542?text=${encodeURIComponent(`Hello, I am interested in ${item.title} — ${item.plan}. Please share more details.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-whatsapp text-white text-sm font-semibold py-2.5 hover:brightness-95 transition">
          <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
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
            <ProductCard key={`${item.title}-${item.plan}`} item={item} />
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
            <ProductCard key={`${item.title}-${item.plan}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
