import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Procedure from './components/Procedure'
import { LinkedInPlans, AllTools } from './components/ProductGrid'
import { Payments, Stats, WhyChooseUs } from './components/TrustSections'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Procedure />
      <LinkedInPlans />
      <AllTools />
      <Payments />
      <Stats />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
