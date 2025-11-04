import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, Rajdhani, Share_Tech_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
})

const shareTech = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
})

export const metadata: Metadata = {
  title: "PixelGripZone.com - Your controller. Your power. Your glow.",
  description: "Retro-futuristic gaming accessories with 80s arcade vibes and modern tech",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${rajdhani.variable} ${shareTech.variable} font-sans antialiased bg-space-dark text-neon-green`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
