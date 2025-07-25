import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Users,
  Zap,
  Shield,
  TreePine,
  Linkedin,
  Instagram,
  Youtube,
  Sparkles,
  ArrowRight,
  Rocket,
} from "lucide-react"

export default function IntangiSolvePage() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored solutions that bridge the gap between complex requirements and intuitive user experiences.",
      gradient: "from-electric-400 to-blue-500",
      emoji: "💻",
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description:
        "Helping businesses evolve with technology that amplifies human potential rather than complicating it.",
      gradient: "from-blue-400 to-indigo-500",
      emoji: "🚀",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlining workflows to focus on what matters most - meaningful progress and connection.",
      gradient: "from-indigo-400 to-purple-500",
      emoji: "⚡",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Protecting digital assets with robust, yet user-friendly security implementations.",
      gradient: "from-purple-400 to-pink-500",
      emoji: "🛡️",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-electric-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 right-32 animate-float">
          <Sparkles className="h-8 w-8 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float delay-1000">
          <Rocket className="h-6 w-6 text-electric-400 opacity-70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              💻 Digital Innovation
            </span>
          </div>

          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 animate-float">
            <Code className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-electric-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              IntangiSolve
            </span>
          </h1>

          <p className="text-3xl text-blue-100 mb-4 italic font-light">The Art of Digital Transformation</p>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Where technology meets humanity in perfect harmony ✨
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/company/intangisolve"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-7 w-7 text-white" />
            </a>
            <a
              href="https://www.instagram.com/intangisolve"
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-500 to-blue-500 rounded-2xl text-white font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center">
                Discover Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electric-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-100 to-blue-100 text-blue-700 text-sm font-semibold">
                  🚀 Our Mission
                </span>
              </div>

              <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent mb-8">
                Human-Centered Technology
              </h2>

              <div className="space-y-6">
                <p className="text-xl text-blue-800 leading-relaxed">
                  Technology should amplify human potential, not complicate it. IntangiSolve bridges the gap between
                  what's possible and what's practical, creating digital solutions that feel intuitive. 💻
                </p>

                <p className="text-lg text-blue-700 leading-relaxed">
                  We solve the intangible challenges that matter most—connection, efficiency, and meaningful progress.
                  Every solution we create is designed to make complex processes feel natural and empowering. ✨
                </p>
              </div>

              <div className="mt-8">
                <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-500 to-blue-500 text-white font-semibold rounded-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-300">
                  Learn Our Approach
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-2xl border border-blue-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-electric-500 to-blue-500 rounded-2xl rotate-12 shadow-glow animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl -rotate-12 animate-float delay-1000"></div>
                <div className="absolute top-4 left-4 text-2xl animate-bounce">💻</div>

                <div className="text-center relative z-10">
                  <Code className="h-24 w-24 text-blue-600 mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Intuitive • Powerful • Human-Centered
                  </h3>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-electric-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product - UNOGENO */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 to-blue-100 text-blue-700 text-sm font-semibold border border-blue-200">
                🌟 Featured Product
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent mb-6">
              Meet{" "}
              <span className="bg-gradient-to-r from-electric-500 to-blue-500 bg-clip-text text-transparent">
                UNOGENO
              </span>
            </h2>

            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Connecting families through collaborative genealogy 🌳
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl overflow-hidden rounded-3xl border-0 hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-[1.02]">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 p-16 flex items-center justify-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute top-8 right-8 text-4xl animate-bounce">🌳</div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/20 rounded-2xl rotate-12"></div>

                  <div className="text-center relative z-10">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                      <img src="/images/unogeno-logo.png" alt="UNOGENO" className="h-20 w-20" />
                    </div>
                    <h3 className="text-4xl font-heading font-bold text-slate-800 mb-3">UNOGENO</h3>
                    <p className="text-xl text-slate-600 font-medium">Collaborative Genealogy Platform</p>
                  </div>
                </div>

                <div className="p-16 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-100 to-blue-100 text-blue-700 text-sm font-semibold">
                      <TreePine className="h-4 w-4 mr-2" />
                      Family Tree Collaboration
                    </span>
                  </div>

                  <h3 className="text-3xl font-heading font-bold bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent mb-6">
                    Discover Your Heritage Together
                  </h3>

                  <p className="text-lg text-blue-800 leading-relaxed mb-8">
                    UNOGENO revolutionizes genealogy research by enabling families to collaborate in building their
                    family trees. Our platform makes it easy for relatives to contribute information, share stories, and
                    preserve family history for future generations. 🚀
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-2 bg-gradient-to-r from-electric-100 to-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      Collaborative Research
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                      Story Sharing
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                      Heritage Preservation
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-500 to-blue-500 text-white font-semibold rounded-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-300">
                      Explore UNOGENO
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-electric-500 to-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse delay-200"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 to-blue-100 text-blue-700 text-sm font-semibold border border-blue-200">
                ⚡ Our Services
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent mb-6">
              Comprehensive Digital Solutions
            </h2>

            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Transforming businesses through innovative technology 💻
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 rounded-3xl border-0 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating emoji */}
                  <div className="absolute -top-3 -right-3 text-2xl animate-bounce">{service.emoji}</div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-blue-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-electric-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-blue-700 leading-relaxed group-hover:text-blue-800 transition-colors duration-300 mb-6">
                      {service.description}
                    </p>

                    {/* Decorative dots */}
                    <div className="flex space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse`}></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse delay-200`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse delay-400`}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
