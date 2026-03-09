export default function Kontakt() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">Kontakt</h1>
      <p className="text-slate-500 mb-12">Kontakta oss om du har frågor, nyheter eller bilder att bidra med.</p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
        <div className="border border-slate-200 rounded-xl p-6 bg-white">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-3">Allmänt</h2>
          <a
            href="mailto:kontakt@havstornet.se"
            className="text-[#1E3A5F] font-medium hover:underline text-lg"
          >
            kontakt@havstornet.se
          </a>
          <p className="text-slate-500 text-sm mt-2">Frågor, synpunkter och allmän information.</p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-3">Bilder & Film</h2>
          <a
            href="mailto:media@havstornet.se"
            className="text-[#1E3A5F] font-medium hover:underline text-lg"
          >
            media@havstornet.se
          </a>
          <p className="text-slate-500 text-sm mt-2">Skicka in foton eller filmer från Havstornet.</p>
        </div>
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-3">Adress</h2>
        <p className="text-slate-700">
          Brf Havstornet<br />
          Rydebäcks Stationsgata 53<br />
          Rydebäck
        </p>
      </div>

      {/* Map embed */}
      <div className="mt-8 max-w-2xl rounded-xl overflow-hidden border border-slate-200">
        <iframe
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Rydeb%C3%A4cks+Stationsgata+53,+Rydeb%C3%A4ck&output=embed"
          title="Karta till Havstornet"
        />
      </div>
    </div>
  )
}
