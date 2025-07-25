import { Card, CardContent } from "@/components/ui/card"
import { Flower, Code, Gem, ArrowRight, Sparkles } from "lucide-react"

export function Portfolio() {
  const companies = [
    {
      name: "Mushk-E-Bahar",
      tagline: "The Poetry of Scent",
      subtitle: "Where memory meets fragrance",
      description:
        "In an age of synthetic experiences, Mushk-E-Bahar returns us to our roots—literally. Each fragrance is a love letter to the earth, crafted from nature's purest essences. ✨",
      icon: Flower,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-100 to-green-100",
      shadowColor: "shadow-neon",
      emoji: "🌸",
      href: "/mushk-e-bahar",
    },
    {
      name: "IntangiSolve",
      tagline: "The Art of Digital Transformation",
      subtitle: "Where technology meets humanity",
      description:
        "Technology should amplify human potential, not complicate it. IntangiSolve bridges the gap between what's possible and what's practical, creating digital magic. 🚀",
      icon: Code,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-100 to-indigo-100",
      shadowColor: "shadow-glow",
      emoji: "💻",
      href: "/intangisolve",
    },
    {
      name: "Opulent",
      tagline: "The Language of Luxury",
      subtitle: "Where craftsmanship meets character",
      description:
        "True luxury isn't about price—it's about permanence. Opulent creates accessories that transcend trends, speaking to souls who understand timeless elegance. 👑",
      icon: Gem,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-100 to-pink-100",
      shadowColor: "shadow-cosmic",
      emoji: "💎",
      href: "/opulent",
    },
  ]

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
        <Sparkles className="h-8 w-8 text-yellow-400 opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 to-cosmic-100 text-electric-700 text-sm font-semibold border border-electric-200">
              🏢 Our Portfolio
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-6">
            Three Expressions,{" "}
            <span className="bg-gradient-to-r from-neon-500 to-emerald-500 bg-clip-text text-transparent">
              One Vision
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our diverse portfolio united by excellence and innovation ✨
          </p>
        </div>

        <div className="space-y-12">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-[1.02] rounded-3xl"
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Visual Section */}
                  <div
                    className={`bg-gradient-to-br ${company.gradient} p-16 flex items-center justify-center relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="absolute top-8 right-8 text-4xl animate-bounce">{company.emoji}</div>

                    <div className="text-center text-white relative z-10">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <company.icon className="h-12 w-12" />
                      </div>
                      <h3 className="text-4xl font-heading font-bold mb-3">{company.name}</h3>
                      <p className="text-xl opacity-90 font-medium">{company.tagline}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-16 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50">
                    <div className="mb-4">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${company.bgGradient} text-slate-700 text-sm font-semibold`}
                      >
                        {company.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-electric-600 group-hover:to-cosmic-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {company.name}
                    </h3>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{company.description}</p>

                    <div className="flex items-center space-x-4">
                      <a
                        href={company.href}
                        className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r ${company.gradient} text-white font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        Explore {company.name}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>

                      <div className="flex space-x-2">
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${company.gradient} rounded-full animate-pulse`}
                        ></div>
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${company.gradient} rounded-full animate-pulse delay-200`}
                        ></div>
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${company.gradient} rounded-full animate-pulse delay-400`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
