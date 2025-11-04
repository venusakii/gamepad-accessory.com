"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-neon-purple/50 bg-space-dark/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-pixel text-lg md:text-xl text-neon-purple group-hover:text-neon-cyan transition-colors animate-flicker">
              🎮 PixelGripZone
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 font-pixel text-xs text-neon-green">
            <Link href="/products" className="hover:text-neon-cyan transition-colors glow-text">
              Products
            </Link>
            <Link href="/about" className="hover:text-neon-cyan transition-colors glow-text">
              About
            </Link>
            <Link href="/reviews" className="hover:text-neon-cyan transition-colors glow-text">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-neon-cyan transition-colors glow-text">
              Contact
            </Link>
            <button className="px-4 py-2 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-space-dark transition-all glow-border">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden font-pixel text-neon-purple text-xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t-2 border-neon-purple/30 font-pixel text-xs text-neon-green space-y-3">
            <Link
              href="/products"
              className="block hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/reviews"
              className="block hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="block hover:text-neon-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full px-4 py-2 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-space-dark transition-all">
              Shop Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
