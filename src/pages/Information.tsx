export default function Information() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">Information</h1>
      <p className="text-slate-500 mb-12">Om Brf Havstornet och byggnadens historia.</p>

      <div className="grid sm:grid-cols-2 gap-12">
        {/* Facts */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-6 pb-3 border-b border-slate-200">Fakta</h2>
          <dl className="space-y-4">
            {[
              { term: 'Arkitekt', def: 'Vera Arkitekter' },
              { term: 'Byggare', def: 'Veidekke Bostad' },
              { term: 'Byggstart', def: 'Maj 2009' },
              { term: 'Inflyttning', def: 'Juli 2010' },
              { term: 'Antal våningar', def: '8' },
              { term: 'Antal lägenheter', def: '28' },
              { term: 'Adress', def: 'Rydebäcks Stationsgata 53, Rydebäck' },
            ].map(({ term, def }) => (
              <div key={term} className="flex gap-4">
                <dt className="text-slate-500 text-sm w-36 shrink-0">{term}</dt>
                <dd className="text-slate-800 text-sm font-medium">{def}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* About + Links */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-6 pb-3 border-b border-slate-200">Om byggnaden</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Havstornet är en 8 våningar hög bostadsrättsförening med 28 lägenheter av varierande storlek.
            Från ett par våningar upp kan de boende njuta av utsikten ut mot Öresund.
            Bygget startade i slutet av maj 2009 och var klart sommaren 2010.
            Byggherre är Veidekke Bostad, ett norskt erkänt företag.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">
            Hemsidan drivs av en av de boende familjerna i Brf Havstornet.
          </p>

          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-3 border-b border-slate-200">Länkar</h2>
          <ul className="space-y-3">
            {[
              { label: 'Veidekke Bostad', url: 'https://www.veidekke.se' },
              { label: 'Vera Arkitekter', url: 'https://www.vera-arkitekter.se' },
              { label: 'Havstornet på Facebook', url: 'https://www.facebook.com' },
            ].map(({ label, url }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1E3A5F] hover:underline flex items-center gap-1"
                >
                  {label} <span className="text-slate-400">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
