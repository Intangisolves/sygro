import { Shield, Lightbulb, Crown, Sparkles } from "lucide-react"

export function Philosophy() {
  const pillars = [
    {
      icon: Shield,
      title: "Heritage & Authenticity",
      description: "We honor the wisdom of tradition while embracing the promise of tomorrow.",
      gradient: "from-neon-400 to-emerald-500",
      bgGradient: "from-neon-50 to-emerald-50",
      borderColor: "border-neon-200",
      iconColor: "text-neon-600",
      emoji: "🛡️",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Intuition",
      description:
        "We harness cutting-edge technology to create solutions that feel as natural as they are revolutionary.",
      gradient: "from-electric-400 to-blue-500",
      bgGradient: "from-electric-50 to-blue-50",
      borderColor: "border-electric-200",
      iconColor: "text-electric-600",
      emoji: "💡",
    },
    {
      icon: Crown,
      title: "Luxury & Accessibility",
      description: "We believe exceptional quality should inspire and elevate, not intimidate or exclude.",
      gradient: "from-cosmic-400 to-pink-500",
      bgGradient: "from-cosmic-50 to-pink-50",
      borderColor: "border-cosmic-200",
      iconColor: "text-cosmic-600",
      emoji: "👑",
    },
  ]

  return (
    <section
      id="philosophy"
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              ⚡ Our Core Values
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            The Trinity of{" "}
            <span className="bg-gradient-to-r from-electric-400 via-neon-400 to-cosmic-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Three foundational pillars that guide every venture under our umbrella ✨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Floating emoji */}
              <div className="absolute -top-4 -right-4 text-2xl animate-bounce">{pillar.emoji}</div>

              <div className="relative z-10">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <pillar.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-electric-400 group-hover:to-cosmic-400 group-hover:bg-clip-text transition-all duration-300">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {pillar.description}
                </p>

                {/* Decorative dots */}
                <div className="flex space-x-2 mt-6">
                  <div className={`w-2 h-2 bg-gradient-to-r ${pillar.gradient} rounded-full animate-pulse`}></div>
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${pillar.gradient} rounded-full animate-pulse delay-200`}
                  ></div>
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${pillar.gradient} rounded-full animate-pulse delay-400`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Crafting Excellence Together</span>
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
