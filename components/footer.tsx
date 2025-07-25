import { Linkedin, Instagram, Youtube, Sparkles, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src="/images/sygro-logo.png" alt="Sygro" className="h-12 w-12" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-3xl font-heading font-bold ml-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Sygro Enterprise
              </h3>
            </div>

            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              Curators of excellence, architects of authenticity, and champions of the extraordinary. Where vision meets
              craft. ✨
            </p>

            
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-heading font-semibold mb-6 flex items-center">
                <span className="mr-2">🏢</span>
                Our Subsidiaries
              </h4>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <a
                    href="/mushk-e-bahar"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:animate-bounce">🌸</span>
                    Mushk-E-Bahar
                  </a>
                </li>
                <li>
                  <a
                    href="/intangisolve"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:animate-bounce">💻</span>
                    IntangiSolve
                  </a>
                </li>
                <li>
                  <a
                    href="/opulent"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:animate-bounce">💎</span>
                    Opulent
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-heading font-semibold mb-6 flex items-center">
                <span className="mr-2">🔗</span>
                Quick Links
              </h4>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <a href="/" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="mr-2 group-hover:animate-bounce">🏠</span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:animate-bounce">📧</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">© 2025 Sygro Enterprise. All rights reserved.</p>

            <div className="flex items-center space-x-2">
              <span className="text-slate-400">Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-slate-400">and</span>
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-slate-400">by Sygro Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
