"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    slug: "kontrolfreek-thumbsticks",
    name: "KontrolFreek Performance Thumbsticks",
    color: "neon-cyan",
    price: "$14.99",
    image: "/gaming-controller-thumbsticks-with-cyan-neon-glow.jpg",
  },
  {
    slug: "dualshock-charging-dock",
    name: "DualShock LED Charging Dock",
    color: "neon-purple",
    price: "$24.99",
    image: "/gaming-controller-charging-dock-with-purple-led-li.jpg",
  },
  {
    slug: "glowshell-controller-skin",
    name: "GlowShell Controller Skin",
    color: "neon-green",
    price: "$19.99",
    image: "/gaming-controller-with-green-neon-shell-skin.jpg",
  },
  {
    slug: "8bitdo-carry-case",
    name: "8BitDo Retro Carry Case",
    color: "neon-cyan",
    price: "$29.99",
    image: "/retro-gaming-controller-carry-case-with-cyan-accen.jpg",
  },
  {
    slug: "powera-charger-dock",
    name: "PowerA Charger Dock Neon",
    color: "neon-purple",
    price: "$34.99",
    image: "/dual-controller-charging-dock-with-purple-neon-lig.jpg",
  },
  {
    slug: "hypergrip-pro-cable",
    name: "HyperGrip Pro Cable",
    color: "neon-green",
    price: "$12.99",
    image: "/gaming-controller-cable-with-green-neon-glow.jpg",
  },
  {
    slug: "pixelpad-gaming-stand",
    name: "PixelPad Gaming Stand",
    color: "neon-cyan",
    price: "$39.99",
    image: "/gaming-controller-stand-with-cyan-led-display.jpg",
  },
  {
    slug: "retrowave-trigger-caps",
    name: "RetroWave Trigger Caps",
    color: "neon-purple",
    price: "$9.99",
    image: "/gaming-controller-trigger-caps-with-purple-neon-de.jpg",
  },
  {
    slug: "rgb-thumb-grips",
    name: "RGB Thumb Grips Deluxe",
    color: "neon-green",
    price: "$16.99",
    image: "/rgb-gaming-controller-thumb-grips-with-green-glow.jpg",
  },
]

export function ProductGrid() {
  return (
    <section id="products" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-purple/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-4xl text-center mb-16 text-neon-purple animate-flicker">
          🕹️ Pick Your Gear
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.slug}
              className={`product-card group relative p-6 bg-space-dark/80 backdrop-blur-sm border-2 border-${product.color}/50 hover:border-${product.color} transition-all duration-300 neon-glow-${product.color.split("-")[1]}`}
            >
              <div className="aspect-square mb-4 bg-gradient-to-br from-space-dark to-${product.color}/20 rounded-lg overflow-hidden border border-${product.color}/30 group-hover:animate-flicker relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className={`font-pixel text-sm md:text-base text-${product.color} mb-3 leading-relaxed`}>
                {product.name}
              </h3>

              <div className="flex items-center justify-between">
                <Link href="/products" className="flex-1" asChild>
                  <Button
                    size="sm"
                    className={`w-full font-pixel text-xs bg-${product.color} text-black hover:bg-${product.color}/80 border border-${product.color}`}
                  >
                    <span>VIEW</span>
                  </Button>
                </Link>
              </div>

              {/* Digital contour effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div
                  className={`absolute inset-0 border-2 border-${product.color} rounded-lg animate-pulse`}
                  style={{ margin: "-4px" }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
