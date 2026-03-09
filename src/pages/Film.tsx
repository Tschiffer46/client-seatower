const videos = [
  { id: 'ExrsIbKXfQ0' },
  { id: '4o9URKuCYm8' },
  { id: '4eU0nadDTmM' },
  { id: '-6O2crYqZuU' },
  { id: 'av1U4qFIisw' },
  { id: 'qpDAtbiWTkI' },
  { id: 'svHDZd9Dk1E' },
  { id: '9ryNCArrCbA' },
  { id: 'PZuvwdZwz-Q' },
  { id: 'r5pA7BP3bYM' },
  { id: 'CVmZfX_GVgg' },
  { id: 'Dx-XTpCV8p8' },
]

export default function Film() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">Film</h1>
      <p className="text-slate-500 mb-12">Filmer om Havstornet och Rydebäck.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map(v => (
          <div key={v.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={`Havstornet video ${v.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
