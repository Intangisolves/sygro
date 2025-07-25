import { Sparkles, Target, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electric-100 to-cosmic-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-neon-100 to-sunset-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img src="/images/sygro-full-logo.png" alt="Sygro Enterprise" className="h-40 w-auto" />
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-100 to-cosmic-100 text-electric-700 text-sm font-semibold">
              🌟 About Our Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-8">
            Meet Sygro Enterprise
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                In a world where innovation often sacrifices soul for speed,{" "}
                <span className="font-bold bg-gradient-to-r from-electric-600 to-cosmic-600 bg-clip-text text-transparent">
                  Sygro Enterprise
                </span>{" "}
                stands as a beacon of purposeful progress. 🚀
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                We are more than a conglomerate—we are curators of excellence, architects of authenticity, and champions
                of the extraordinary. ✨
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our name, derived from the Greek "syn" (together) and "grow," embodies our fundamental belief: that true
                greatness emerges when diverse visions unite. 🌱
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-electric-50 to-electric-100 p-6 rounded-3xl border border-electric-200">
                <Target className="h-8 w-8 text-electric-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600">Excellence in every endeavor</p>
              </div>

              <div className="bg-gradient-to-br from-cosmic-50 to-cosmic-100 p-6 rounded-3xl border border-cosmic-200">
                <Users className="h-8 w-8 text-cosmic-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Our Team</h3>
                <p className="text-sm text-slate-600">Diverse minds, unified vision</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 shadow-2xl border border-slate-200">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-electric-500 to-cosmic-500 rounded-2xl rotate-12 shadow-cosmic"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-500 to-sunset-500 rounded-xl -rotate-12 shadow-neon"></div>

              <div className="text-center relative z-10">
                <img
                  src="/images/sygro-logo-bw.png"
                  alt="Sygro Logo"
                  className="w-32 h-32 mx-auto mb-6 animate-float"
                />
                <div className="space-y-3">
                  <p className="text-2xl font-bold bg-gradient-to-r from-electric-600 to-cosmic-600 bg-clip-text text-transparent">
                    Syn + Grow
                  </p>
                  <p className="text-slate-600 font-medium">Together We Grow</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-3 h-3 bg-electric-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-cosmic-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
