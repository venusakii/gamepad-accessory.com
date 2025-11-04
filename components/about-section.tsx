"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [text, setText] = useState("")
  const fullText = "Our mission is simple — to bring 80s energy into 2025 gaming gear."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-cyan/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-4xl text-center mb-12 text-neon-cyan animate-flicker">
          Welcome to the Glow Zone
        </h2>

        <div className="crt-screen p-6 md:p-10 rounded-lg border-2 border-neon-green neon-glow-green">
          <p className="font-mono text-base md:text-xl text-neon-green typewriter leading-relaxed">
            {text}
            <span className="animate-pulse">█</span>
          </p>
        </div>

        {/* Orbiting elements */}
        <div className="relative h-40 mt-12">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />
        </div>
      </div>
    </section>
  )
}
