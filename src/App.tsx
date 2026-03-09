import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Valkommen from './pages/Valkommen'
import Information from './pages/Information'
import Bilder from './pages/Bilder'
import Film from './pages/Film'
import Kontakt from './pages/Kontakt'
import Nyhetsarkiv from './pages/Nyhetsarkiv'

function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Välkommen' },
    { to: '/information', label: 'Information' },
    { to: '/bilder', label: 'Bilder' },
    { to: '/film', label: 'Film' },
    { to: '/kontakt', label: 'Kontakt' },
    { to: '/nyhetsarkiv', label: 'Nyhetsarkiv' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-[#1E3A5F] font-bold text-base tracking-tight">Havstornet</span>
          <span className="text-slate-400 text-sm hidden sm:inline">Rydebäck</span>
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex gap-5">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-[#1E3A5F]' : 'text-slate-500 hover:text-slate-800'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-slate-600 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Meny"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium border-b border-slate-100 transition-colors ${isActive ? 'text-[#1E3A5F]' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-8 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} Brf Havstornet · Rydebäcks Stationsgata 53, Rydebäck</p>
      <p className="mt-1">
        <a href="mailto:kontakt@havstornet.se" className="hover:text-slate-600 transition-colors">
          kontakt@havstornet.se
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Valkommen />} />
            <Route path="/information" element={<Information />} />
            <Route path="/bilder" element={<Bilder />} />
            <Route path="/film" element={<Film />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/nyhetsarkiv" element={<Nyhetsarkiv />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
