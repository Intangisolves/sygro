import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Portfolio } from "@/components/portfolio"
import { Promise } from "@/components/promise"
import { Vision } from "@/components/vision"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Portfolio />
      <Promise />
      <Vision />
      <Footer />
    </main>
  )
}
