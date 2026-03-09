import { useState } from 'react'
import { photos } from '../data/gallery'

export default function Bilder() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">Bilder</h1>
      <p className="text-slate-500 mb-10">{photos.length} foton från Havstornet och Rydebäck.</p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {photos.map(photo => (
          <button
            key={photo}
            onClick={() => setSelected(photo)}
            className="aspect-square overflow-hidden rounded-lg bg-slate-100 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
          >
            <img
              src={`/assets/gallery/${encodeURIComponent(photo)}`}
              alt={photo.replace(/\.[^.]+$/, '')}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-slate-300 transition-colors"
            aria-label="Stäng"
          >
            ×
          </button>
          <img
            src={`/assets/gallery/${encodeURIComponent(selected)}`}
            alt={selected.replace(/\.[^.]+$/, '')}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-slate-400 text-xs">
            {selected.replace(/\.[^.]+$/, '')}
          </p>
        </div>
      )}
    </div>
  )
}
