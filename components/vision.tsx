import { Rocket, Globe, Lightbulb, Sparkles, Star } from "lucide-react"

export function Vision() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 right-32 animate-float">
        <Rocket className="h-8 w-8 text-electric-500 opacity-70" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float delay-1000">
        <Globe className="h-6 w-6 text-cosmic-500 opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 to-cosmic-100 text-electric-700 text-sm font-semibold border border-electric-200">
              🌟 Our Vision
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-8">
            A World{" "}
            <span className="bg-gradient-to-r from-neon-500 to-emerald-500 bg-clip-text text-transparent">
              Elevated
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                Sygro Enterprise envisions a future where quality triumphs over quantity, where innovation serves
                humanity, and where luxury means lasting value rather than fleeting status. 🚀
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                We're building a legacy that our children's children will be proud to inherit—one that proves business
                can be both profitable and purposeful, both visionary and grounded. ✨
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                In every fragrance that evokes a cherished memory, every software solution that simplifies complexity,
                and every luxury accessory that becomes a treasured heirloom, Sygro Enterprise is quietly
                revolutionizing what it means to build something that matters. 💫
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-electric-50 to-electric-100 p-6 rounded-3xl border border-electric-200">
                <Lightbulb className="h-8 w-8 text-electric-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Innovation First</h3>
                <p className="text-sm text-slate-600">Leading tomorrow's solutions today</p>
              </div>

              <div className="bg-gradient-to-br from-cosmic-50 to-cosmic-100 p-6 rounded-3xl border border-cosmic-200">
                <Star className="h-8 w-8 text-cosmic-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Excellence Always</h3>
                <p className="text-sm text-slate-600">Quality that stands the test of time</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 shadow-2xl border border-slate-200">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-electric-500 to-cosmic-500 rounded-2xl rotate-12 shadow-cosmic animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-500 to-sunset-500 rounded-xl -rotate-12 shadow-neon animate-float delay-1000"></div>
              <div className="absolute top-4 left-4 text-2xl animate-bounce">🌟</div>

              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-electric-100 to-cosmic-100 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
                  <Rocket className="h-16 w-16 text-electric-600" />
                </div>

                <h3 className="text-3xl font-heading font-bold bg-gradient-to-r from-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-4">
                  Building Tomorrow
                </h3>

                <p className="text-slate-600 font-medium mb-6">Where vision becomes reality</p>

                <div className="flex justify-center space-x-2">
                  <div className="w-4 h-4 bg-electric-500 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-neon-500 rounded-full animate-pulse delay-200"></div>
                  <div className="w-4 h-4 bg-cosmic-500 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="bg-gradient-to-r from-white to-slate-50 rounded-3xl p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-electric-100 to-cosmic-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-neon-100 to-sunset-100 rounded-full blur-3xl opacity-30"></div>

          <div className="text-center relative z-10">
            <div className="mb-6">
              <span className="text-4xl animate-bounce inline-block">🚀</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-6">
              Because at Sygro, we don't just grow businesses—we grow legacies.
            </h3>

            <p className="text-xl text-slate-600 italic mb-8 max-w-4xl mx-auto">
              Where vision meets craft, where innovation honors tradition, and where excellence is not just our
              standard—it's our signature. ✨
            </p>

            <div className="flex justify-center items-center space-x-4">
              <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
              <span className="text-slate-500 font-medium">Crafting Excellence Since Day One</span>
              <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
