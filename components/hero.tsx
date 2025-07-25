import { ArrowDown, Sparkles, Zap, Linkedin, Instagram, Youtube } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cosmic-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 right-32 animate-float">
        <Sparkles className="h-8 w-8 text-yellow-400 opacity-70" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float delay-1000">
        <Zap className="h-6 w-6 text-electric-400 opacity-70" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-500/20 to-cosmic-500/20 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
            ✨ Where Innovation Meets Excellence
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 leading-tight">
          Where{" "}
          <span className="bg-gradient-to-r from-electric-400 via-neon-400 to-cosmic-400 bg-clip-text text-transparent animate-pulse">
            Vision
          </span>
          <br />
          <span className="bg-gradient-to-r from-sunset-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Meets Craft
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
          🚀 Curators of excellence, architects of authenticity, and champions of the extraordinary
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/company/sygro-enterprise"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-7 w-7 text-white" />
          </a>
          <a
            href="https://www.instagram.com/sygro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-cosmic transition-all duration-300 transform hover:scale-110"
          >
            <Instagram className="h-7 w-7 text-white" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-sunset transition-all duration-300 transform hover:scale-110"
          >
            <Youtube className="h-7 w-7 text-white" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-2xl text-white font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Explore Our Universe</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-600 to-cosmic-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            Watch Our Story
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-500 to-cosmic-500 flex items-center justify-center shadow-glow">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  )
}
