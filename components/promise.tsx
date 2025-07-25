import { Target, Users, Sparkles, Zap, Heart, Star } from "lucide-react"

export function Promise() {
  const commitments = [
    {
      icon: Target,
      title: "To lead with excellence",
      description: "Setting standards that inspire entire industries to elevate their craft.",
      gradient: "from-electric-400 to-blue-500",
      emoji: "🎯",
    },
    {
      icon: Users,
      title: "To inspire through diversity",
      description: "Proving that different visions can create a more beautiful, more innovative whole.",
      gradient: "from-neon-400 to-emerald-500",
      emoji: "🌈",
    },
    {
      icon: Heart,
      title: "To elevate lifestyle through authenticity",
      description: "Offering experiences and products that enhance life without compromising values.",
      gradient: "from-cosmic-400 to-pink-500",
      emoji: "💖",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 right-32 animate-float">
        <Star className="h-8 w-8 text-yellow-400 opacity-70" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float delay-1000">
        <Zap className="h-6 w-6 text-electric-400 opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              🤝 Our Promise
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">
            The{" "}
            <span className="bg-gradient-to-r from-electric-400 via-neon-400 to-cosmic-400 bg-clip-text text-transparent">
              Sygro Promise
            </span>
          </h2>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              We believe that excellence isn't a destination—it's a daily choice. ✨
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether we're distilling the essence of a forgotten flower, architecting a digital solution that changes
              how businesses operate, or crafting a bag that becomes a lifelong companion, we approach every endeavor
              with unwavering commitment. 🚀
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${commitment.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Floating emoji */}
              <div className="absolute -top-4 -right-4 text-3xl animate-bounce">{commitment.emoji}</div>

              <div className="relative z-10 text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${commitment.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <commitment.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-electric-400 group-hover:to-cosmic-400 group-hover:bg-clip-text transition-all duration-300">
                  {commitment.title}
                </h3>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {commitment.description}
                </p>

                {/* Decorative dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  <div className={`w-2 h-2 bg-gradient-to-r ${commitment.gradient} rounded-full animate-pulse`}></div>
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${commitment.gradient} rounded-full animate-pulse delay-200`}
                  ></div>
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${commitment.gradient} rounded-full animate-pulse delay-400`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            <span className="text-slate-300 font-medium text-lg">Excellence is our signature</span>
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse delay-500" />
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-2xl text-white font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Join Our Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-600 to-cosmic-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
