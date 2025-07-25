export function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Sygro Story</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              In a world where innovation often sacrifices soul for speed, <strong>Sygro Enterprise</strong> stands as a
              beacon of purposeful progress. We are more than a conglomerate—we are curators of excellence, architects
              of authenticity, and champions of the extraordinary.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our name, derived from the Greek "syn" (together) and "grow," embodies our fundamental belief: that true
              greatness emerges when diverse visions unite under a shared commitment to craft, innovation, and timeless
              value.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-slate-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-slate-800 mb-2">Σ</div>
                <p className="text-slate-600 font-medium">Syn + Grow</p>
                <p className="text-sm text-slate-500">Together We Grow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
