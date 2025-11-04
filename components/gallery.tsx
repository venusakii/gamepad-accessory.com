"use client"

import Image from "next/image"

const galleryItems = [
  { id: 1, color: "neon-purple", image: "/gallery-gaming-controller-1.jpg" },
  { id: 2, color: "neon-green", image: "/gallery-gaming-controller-2.jpg" },
  { id: 3, color: "neon-cyan", image: "/gallery-gaming-controller-3.jpg" },
  { id: 4, color: "neon-purple", image: "/gallery-gaming-controller-4.jpg" },
  { id: 5, color: "neon-green", image: "/gallery-gaming-controller-5.jpg" },
  { id: 6, color: "neon-cyan", image: "/gallery-gaming-controller-6.jpg" },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-green/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-center mb-16 text-neon-green animate-flicker">
          💾 Neon Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item aspect-square rounded-lg border-2 border-${item.color}/50 bg-gradient-to-br from-space-dark to-${item.color}/20 hover:border-${item.color} transition-all cursor-pointer group overflow-hidden relative`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Gaming controller ${item.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform"
              />

              {/* VHS lines effect */}
              <div className="vhs-lines absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
