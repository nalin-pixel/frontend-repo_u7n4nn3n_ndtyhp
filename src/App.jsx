import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#06080f]">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
