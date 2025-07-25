import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sygro Enterprise - Where Vision Meets Craft",
  description: "Curators of excellence, architects of authenticity, and champions of the extraordinary.",
  icons: {
    icon: "/images/sygro-square.png",
    shortcut: "/images/sygro-square.png",
    apple: "/images/sygro-square.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  )
}
