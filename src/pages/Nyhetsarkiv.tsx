const news = [
  {
    date: '2012-05-05',
    title: 'Flytt till nytt webbhotell',
    body: 'Havstornet har under lördagen (5/5) legat nere på grund av flytt till nytt webbhotell. Nu ligger vi ute igen.',
  },
]

export default function Nyhetsarkiv() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">Nyhetsarkiv</h1>
      <p className="text-slate-500 mb-12">Äldre nyheter och meddelanden från Havstornet.</p>

      <div className="max-w-2xl space-y-6">
        {news.map((item, i) => (
          <article key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
            <time className="text-xs text-slate-400 font-medium">{item.date}</time>
            <h2 className="text-lg font-semibold text-slate-800 mt-1 mb-2">{item.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
          </article>
        ))}

        {news.length === 0 && (
          <p className="text-slate-500">Inga arkiverade nyheter.</p>
        )}
      </div>
    </div>
  )
}
