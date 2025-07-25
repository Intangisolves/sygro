"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/mushk-e-bahar", label: "Mushk-E-Bahar" },
    { href: "/intangisolve", label: "IntangiSolve" },
    { href: "/opulent", label: "Opulent" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="relative">
              <img src="/images/sygro-logo.png" alt="Sygro" className="h-12 w-12" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-full animate-pulse"></div>
            </div>
            <span
              className={`ml-3 text-2xl font-heading font-bold transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-slate-800 to-electric-600 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Sygro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isScrolled
                      ? "text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-electric-500 hover:to-cosmic-500 hover:shadow-glow"
                      : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-xl ${isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"}`}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 border border-slate-200/50 shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-electric-500 hover:to-cosmic-500 block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
