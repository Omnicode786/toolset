import { navLinks } from '../data'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center text-white font-display font-bold text-sm">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-extrabold text-[15px] text-brand-ink">
              All Premium
            </p>
            <p className="text-[10px] tracking-[0.3em] text-slate-400 -mt-0.5">
              TOOLSET
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 font-medium text-sm text-slate-600">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={
                i === 0
                  ? "text-brand-blue font-semibold"
                  : "hover:text-brand-blue transition-colors"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full border border-brand-blue text-brand-blue text-sm font-semibold px-5 py-2.5 hover:bg-brand-blue hover:text-white transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
