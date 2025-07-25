import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Gem,
  Award,
  Clock,
  Users,
  Linkedin,
  Instagram,
  Youtube,
  Sparkles,
  ArrowRight,
  Crown,
  Diamond,
} from "lucide-react"

export default function OpulentPage() {
  const values = [
    {
      icon: Gem,
      title: "Timeless Design",
      description: "Creating accessories that transcend trends and speak to enduring style and sophistication.",
      gradient: "from-cosmic-400 to-purple-500",
      emoji: "💎",
    },
    {
      icon: Award,
      title: "Master Craftsmanship",
      description:
        "Each piece is meticulously crafted by skilled artisans using traditional techniques and premium materials.",
      gradient: "from-purple-400 to-pink-500",
      emoji: "🏆",
    },
    {
      icon: Clock,
      title: "Lasting Quality",
      description: "Built to last generations, our accessories are investments in both style and heritage.",
      gradient: "from-pink-400 to-rose-500",
      emoji: "⏰",
    },
    {
      icon: Users,
      title: "Personal Legacy",
      description: "Pieces designed to become treasured heirlooms, passed down through families with pride.",
      gradient: "from-rose-400 to-red-500",
      emoji: "👑",
    },
  ]

  const collections = [
    {
      title: "Heritage Collection",
      description: "Classic designs inspired by timeless elegance and traditional craftsmanship.",
      icon: Gem,
      gradient: "from-cosmic-400 to-purple-500",
      emoji: "💎",
    },
    {
      title: "Modern Classics",
      description: "Contemporary interpretations of luxury that honor tradition while embracing innovation.",
      icon: Award,
      gradient: "from-purple-400 to-pink-500",
      emoji: "✨",
    },
    {
      title: "Limited Editions",
      description: "Exclusive pieces for discerning collectors who appreciate rarity and exceptional artistry.",
      icon: Crown,
      gradient: "from-pink-400 to-rose-500",
      emoji: "👑",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-800 via-pink-800 to-rose-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cosmic-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 right-32 animate-float">
          <Sparkles className="h-8 w-8 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float delay-1000">
          <Diamond className="h-6 w-6 text-pink-400 opacity-70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              💎 Luxury Accessories
            </span>
          </div>

          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 animate-float">
            <Gem className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cosmic-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Opulent
            </span>
          </h1>

          <p className="text-3xl text-purple-100 mb-4 italic font-light">The Language of Luxury</p>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-12">
            Where craftsmanship meets character in timeless elegance ✨
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/company/opulent"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-7 w-7 text-white" />
            </a>
            <a
              href="https://www.instagram.com/opulent"
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
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cosmic-500 to-purple-500 rounded-2xl text-white font-semibold text-lg shadow-cosmic hover:shadow-cosmic-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center">
                View Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cosmic-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cosmic-100 to-purple-100 text-purple-700 text-sm font-semibold">
                  👑 Our Philosophy
                </span>
              </div>

              <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-8">
                Timeless Luxury Redefined
              </h2>

              <div className="space-y-6">
                <p className="text-xl text-purple-800 leading-relaxed">
                  True luxury isn't about price—it's about permanence. Opulent creates accessories that transcend
                  trends, speaking to those who understand that the finest things in life are worth waiting for. 💎
                </p>

                <p className="text-lg text-purple-700 leading-relaxed">
                  Each piece is a testament to the marriage of traditional craftsmanship and contemporary vision. We
                  believe in creating accessories that become lifelong companions, growing more beautiful and meaningful
                  with time. ✨
                </p>
              </div>

              <div className="mt-8">
                <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cosmic-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-cosmic transform hover:scale-105 transition-all duration-300">
                  Discover Our Craft
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 shadow-2xl border border-purple-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cosmic-500 to-purple-500 rounded-2xl rotate-12 shadow-cosmic animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl -rotate-12 animate-float delay-1000"></div>
                <div className="absolute top-4 left-4 text-2xl animate-bounce">💎</div>

                <div className="text-center relative z-10">
                  <Gem className="h-24 w-24 text-purple-600 mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Elegant • Enduring • Exceptional
                  </h3>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-cosmic-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cosmic-100 to-purple-100 text-purple-700 text-sm font-semibold border border-purple-200">
                ✨ Our Values
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-6">
              The Principles That Guide Our Craft
            </h2>

            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Four pillars that define our commitment to luxury excellence 👑
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 rounded-3xl border-0 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating emoji */}
                  <div className="absolute -top-3 -right-3 text-2xl animate-bounce">{value.emoji}</div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-purple-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cosmic-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {value.title}
                    </h3>

                    <p className="text-purple-700 leading-relaxed group-hover:text-purple-800 transition-colors duration-300 mb-6">
                      {value.description}
                    </p>

                    {/* Decorative dots */}
                    <div className="flex space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${value.gradient} rounded-full animate-pulse`}></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${value.gradient} rounded-full animate-pulse delay-200`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${value.gradient} rounded-full animate-pulse delay-400`}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cosmic-100 to-purple-100 text-purple-700 text-sm font-semibold border border-purple-200">
                👑 Signature Collections
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-6">
              Curated Luxury Selections
            </h2>

            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Discover our handpicked collection of luxury accessories ✨
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 rounded-3xl border-0 overflow-hidden"
              >
                <CardContent className="p-10 text-center relative">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${collection.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating emoji */}
                  <div className="absolute -top-3 -right-3 text-3xl animate-bounce">{collection.emoji}</div>

                  <div className="relative z-10">
                    <div
                      className={`w-24 h-24 bg-gradient-to-r ${collection.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <collection.icon className="h-12 w-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-purple-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cosmic-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {collection.title}
                    </h3>

                    <p className="text-purple-700 mb-8 leading-relaxed group-hover:text-purple-800 transition-colors duration-300">
                      {collection.description}
                    </p>

                    <button
                      className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r ${collection.gradient} text-white font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Decorative dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${collection.gradient} rounded-full animate-pulse`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${collection.gradient} rounded-full animate-pulse delay-200`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${collection.gradient} rounded-full animate-pulse delay-400`}
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
