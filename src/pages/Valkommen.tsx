import { Link } from 'react-router-dom'

export default function Valkommen() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1E3A5F] text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-4">
            Brf Havstornet · Rydebäck
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6 max-w-xl">
            Välkommen till Havstornet
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Landmärket mellan Helsingborg och Landskrona — en 8 våningar hög bostadsrättsförening
            med utsikt mot Öresund, alldeles intill stationen i Rydebäck.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/bilder"
              className="inline-block bg-white text-[#1E3A5F] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Se bilder →
            </Link>
            <Link
              to="/information"
              className="inline-block border border-blue-300 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Om byggnaden
            </Link>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="text-2xl mb-3">🏢</div>
            <h2 className="font-semibold text-slate-800 mb-2">Byggnaden</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              8 våningar med 28 lägenheter av varierande storlek. De flesta med utsikt mot Öresund.
              I bottenplanet finns ett reklamföretag och en kafeteria.
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="text-2xl mb-3">🚂</div>
            <h2 className="font-semibold text-slate-800 mb-2">Läge</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rydebäck ligger utmed Öresundskusten med utmärkta förbindelser via tåg, buss och motorväg.
              Huset ligger direkt vid stationen.
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="text-2xl mb-3">📬</div>
            <h2 className="font-semibold text-slate-800 mb-2">Bidra</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Denna hemsida drivs av en av de boende familjerna. Har du nyheter eller bilder att bidra med?{' '}
              <Link to="/kontakt" className="text-[#1E3A5F] hover:underline font-medium">Kontakta oss.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
