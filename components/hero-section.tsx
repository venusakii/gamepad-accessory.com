"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "CONTROL THE GAME."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-neon-purple mb-4 scanline animate-flicker">
            🎯 PixelGripZone.com
          </h1>
          <p className="font-mono text-sm md:text-lg text-neon-cyan animate-pulse">
            "Your controller. Your power. Your glow."
          </p>
        </div>

        <div className="my-12 min-h-[80px] md:min-h-[100px]">
          <h2 className="font-pixel text-xl md:text-3xl text-neon-green mb-6 typewriter">
            {text}
            <span className="animate-pulse">_</span>
          </h2>
          <p className="font-mono text-xs md:text-base text-neon-cyan/80 scanline">
            Level up your gameplay with pro-grade accessories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Link href="/products">
            <Button
              size="lg"
              className="font-pixel text-sm px-5 py-3 bg-neon-purple border-2 border-neon-purple text-black hover:bg-neon-purple/80 hover:scale-105 transition-all neon-glow-purple animate-pulse-glow"
            >
              [ START GAME ]
            </Button>
          </Link>
          <Link href="/reviews">
            <Button
              size="lg"
              variant="outline"
              className="font-pixel text-sm px-5 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all neon-glow-cyan bg-transparent"
            >
              [ WATCH DEMO ⚡️]
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
