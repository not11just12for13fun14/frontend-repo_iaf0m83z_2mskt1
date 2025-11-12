import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Montessori', href: '#montessori' },
    { label: 'Programs', href: '#programs' },
    { label: 'Daily Rhythm', href: '#rhythm' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-orange-400 via-amber-400 to-yellow-300 shadow-inner" />
            <div className="font-extrabold text-lg leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-500 to-rose-500">Yufu</span>
              <span className="text-slate-800"> Kindergarten</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-orange-600 transition-colors font-medium">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow">
              Book a tour
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-orange-200 text-orange-600" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-lg hover:bg-orange-50 text-slate-700 font-medium" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow" onClick={() => setOpen(false)}>
                Book a tour
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
