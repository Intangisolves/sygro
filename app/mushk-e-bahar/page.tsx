import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, Leaf, Heart, Star, Linkedin, Instagram, Youtube, Sparkles, ArrowRight } from "lucide-react"

export default function MushkEBaharPage() {
  const features = [
    {
      icon: Flower,
      title: "Natural Essences",
      description: "Crafted from nature's purest ingredients, sourced ethically from around the world.",
      gradient: "from-neon-400 to-emerald-500",
      emoji: "🌿",
    },
    {
      icon: Leaf,
      title: "Heritage Recipes",
      description: "Time-honored formulations passed down through generations of master perfumers.",
      gradient: "from-emerald-400 to-green-500",
      emoji: "📜",
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "Each fragrance tells a story, evoking memories and creating lasting impressions.",
      gradient: "from-pink-400 to-rose-500",
      emoji: "💝",
    },
    {
      icon: Star,
      title: "Artisan Craftsmanship",
      description: "Meticulously blended by skilled artisans who understand the poetry of scent.",
      gradient: "from-yellow-400 to-orange-500",
      emoji: "✨",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-neon-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 right-32 animate-float">
          <Sparkles className="h-8 w-8 text-yellow-400 opacity-70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              🌸 Natural Fragrances
            </span>
          </div>

          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 animate-float">
            <Flower className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-neon-400 to-emerald-400 bg-clip-text text-transparent">
              Mushk-E-Bahar
            </span>
          </h1>

          <p className="text-3xl text-emerald-100 mb-4 italic font-light">The Poetry of Scent</p>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-12">
            Where memory meets fragrance in perfect harmony ✨
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/company/mushk-e-bahar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-7 w-7 text-white" />
            </a>
            <a
              href="https://www.instagram.com/mushk-e-bahar"
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
            <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-500 to-emerald-500 rounded-2xl text-white font-semibold text-lg shadow-neon hover:shadow-neon-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neon-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-100 to-emerald-100 text-emerald-700 text-sm font-semibold">
                  🌱 Our Heritage
                </span>
              </div>

              <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-emerald-800 to-green-600 bg-clip-text text-transparent mb-8">
                Nature's Pure Essence
              </h2>

              <div className="space-y-6">
                <p className="text-xl text-emerald-800 leading-relaxed">
                  In an age of synthetic experiences, Mushk-E-Bahar returns us to our roots—literally. Each fragrance is
                  a love letter to the earth, crafted from nature's purest essences. 🌿
                </p>

                <p className="text-lg text-emerald-700 leading-relaxed">
                  We don't just create scents; we capture stories, preserve memories, and honor the timeless ritual of
                  fragrance as personal expression. Every bottle contains the essence of tradition, carefully preserved
                  for the modern world. ✨
                </p>
              </div>

              <div className="mt-8">
                <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-500 to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-neon transform hover:scale-105 transition-all duration-300">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-12 shadow-2xl border border-emerald-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-neon-500 to-emerald-500 rounded-2xl rotate-12 shadow-neon animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl -rotate-12 animate-float delay-1000"></div>
                <div className="absolute top-4 left-4 text-2xl animate-bounce">🌸</div>

                <div className="text-center relative z-10">
                  <Flower className="h-24 w-24 text-emerald-600 mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                    Natural • Authentic • Timeless
                  </h3>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-neon-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-100 to-emerald-100 text-emerald-700 text-sm font-semibold border border-emerald-200">
                ✨ What Makes Us Special
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-emerald-800 to-green-600 bg-clip-text text-transparent mb-6">
              The Essence of Our Craft
            </h2>

            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Four pillars that define our commitment to natural excellence 🌿
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 rounded-3xl border-0 overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating emoji */}
                  <div className="absolute -top-3 -right-3 text-2xl animate-bounce">{feature.emoji}</div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-emerald-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-emerald-700 leading-relaxed group-hover:text-emerald-800 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Decorative dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse`}></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse delay-200`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse delay-400`}
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
