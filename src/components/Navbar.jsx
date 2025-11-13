import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between py-4 px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg tracking-wide">NovaTech</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="text-sm inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-sm">
                Get a quote
              </a>
            </nav>

            <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/20 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-white/90 hover:text-white rounded-lg px-3 py-2">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="text-sm inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600">
                  Get a quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
