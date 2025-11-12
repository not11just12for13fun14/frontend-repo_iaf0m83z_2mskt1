import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { MontessoriSection, ProgramsSection, RhythmSection, TestimonialsSection, ContactSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <MontessoriSection />
      <ProgramsSection />
      <RhythmSection />
      <TestimonialsSection />
      <ContactSection />
      <footer className="py-10 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} Yufu Kindergarten. All rights reserved.</p>
          <div className="text-slate-600">Montessori-inspired learning in a joyful space.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
