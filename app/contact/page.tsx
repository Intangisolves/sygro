"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
  Users,
  Clock,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@sygro.com",
      secondary: "partnerships@sygro.com",
      note: "We respond within 24 hours",
      gradient: "from-electric-500 to-blue-500",
      emoji: "📧",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 95572 21232",
      secondary: "+91 95482 77449",
      note: "Mon-Fri 9AM-6PM IST",
      gradient: "from-neon-500 to-emerald-500",
      emoji: "📞",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Bazariya, Sahaswan",
      secondary: "243638, India",
      note: "By appointment only",
      gradient: "from-cosmic-500 to-purple-500",
      emoji: "📍",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Excellence-Driven",
      description: "We maintain the highest standards across all our ventures",
      emoji: "🎯",
    },
    {
      icon: Sparkles,
      title: "Innovation-Focused",
      description: "We embrace cutting-edge solutions while honoring tradition",
      emoji: "✨",
    },
    {
      icon: Clock,
      title: "Long-term Vision",
      description: "We build lasting relationships and sustainable growth",
      emoji: "🚀",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
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
          <MessageCircle className="h-6 w-6 text-electric-400 opacity-70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              💬 Get In Touch
            </span>
          </div>

          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 animate-float">
            <Mail className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-electric-400 via-neon-400 to-cosmic-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>

          <p className="text-3xl text-slate-100 mb-4 italic font-light">Let's Start a Conversation</p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Ready to elevate your business with excellence? We'd love to hear from you ✨
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-2xl text-white font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center">
                Start Conversation
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electric-100 to-cosmic-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-neon-100 to-sunset-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-100 to-cosmic-100 text-electric-700 text-sm font-semibold">
                  🤝 Why Choose Us
                </span>
              </div>

              <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-8">
                Get In Touch
              </h2>

              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Whether you're interested in our services, partnerships, or have questions about our subsidiaries, we'd
                love to hear from you. Our team is ready to help you achieve your vision. 🚀
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-cosmic-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-lg animate-bounce mr-2">{feature.emoji}</span>
                        <h3 className="font-bold text-slate-800">{feature.title}</h3>
                      </div>
                      <p className="text-slate-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-electric-500 to-cosmic-500 rounded-2xl rotate-12 shadow-cosmic animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-500 to-sunset-500 rounded-xl -rotate-12 shadow-neon animate-float delay-1000"></div>
                <div className="absolute top-4 left-4 text-2xl animate-bounce">💬</div>

                <div className="text-center relative z-10">
                  <Send className="h-24 w-24 text-slate-700 mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-4">
                    Professional • Responsive • Reliable
                  </h3>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-electric-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-cosmic-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 to-cosmic-100 text-electric-700 text-sm font-semibold border border-electric-200">
                📝 Send Message
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-6">
              Send Us a Message
            </h2>

            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours ⚡
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-slate-700 font-semibold flex items-center">
                      <span className="mr-2">👤</span>
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-slate-300 focus:border-electric-500 focus:ring-electric-500 rounded-2xl h-12 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-700 font-semibold flex items-center">
                      <span className="mr-2">📧</span>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-slate-300 focus:border-electric-500 focus:ring-electric-500 rounded-2xl h-12 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-slate-700 font-semibold flex items-center">
                      <span className="mr-2">🏢</span>
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="border-slate-300 focus:border-electric-500 focus:ring-electric-500 rounded-2xl h-12 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-slate-700 font-semibold flex items-center">
                      <span className="mr-2">💭</span>
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="border-slate-300 focus:border-electric-500 focus:ring-electric-500 rounded-2xl h-12 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-slate-700 font-semibold flex items-center">
                    <span className="mr-2">💬</span>
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="border-slate-300 focus:border-electric-500 focus:ring-electric-500 rounded-2xl bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="group relative px-8 py-4 bg-gradient-to-r from-electric-500 to-cosmic-500 hover:from-electric-600 hover:to-cosmic-600 text-white font-semibold text-lg rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cosmic-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 to-cosmic-100 text-electric-700 text-sm font-semibold border border-electric-200">
                📞 Contact Methods
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-slate-800 via-electric-600 to-cosmic-600 bg-clip-text text-transparent mb-6">
              Other Ways to Reach Us
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose the method that works best for you ✨</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group text-center bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 rounded-3xl border-0 overflow-hidden"
              >
                <CardContent className="p-10 relative">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating emoji */}
                  <div className="absolute -top-3 -right-3 text-2xl animate-bounce">{method.emoji}</div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <method.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-electric-600 group-hover:to-cosmic-600 group-hover:bg-clip-text transition-all duration-300">
                      {method.title}
                    </h3>

                    <p className="text-slate-600 mb-2 font-semibold">{method.primary}</p>
                    <p className="text-slate-600 mb-4">{method.secondary}</p>
                    <p className="text-sm text-slate-500">{method.note}</p>

                    {/* Decorative dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      <div className={`w-2 h-2 bg-gradient-to-r ${method.gradient} rounded-full animate-pulse`}></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${method.gradient} rounded-full animate-pulse delay-200`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${method.gradient} rounded-full animate-pulse delay-400`}
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
