import { RetroGrid } from "@/components/retro-grid"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-space-dark text-neon-green pt-20">
      <RetroGrid />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <a
          href="/"
          className="inline-block mb-8 font-pixel text-sm text-neon-cyan hover:text-neon-purple transition-colors"
        >
          ← BACK TO HOME
        </a>

        <h1 className="font-pixel text-3xl md:text-5xl text-neon-purple mb-8 scanline animate-flicker">🎮 ABOUT US</h1>

        <div className="space-y-6 font-mono text-sm md:text-base leading-relaxed">
          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">Our Mission</h2>
            <p className="text-neon-green/80 text-pretty">
              At PixelGripZone, we believe that every gamer deserves equipment that matches their passion. We're
              dedicated to bringing you the most innovative, high-performance gaming accessories with that unmistakable
              retro-arcade aesthetic that makes your setup truly yours.
            </p>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">The Story</h2>
            <p className="text-neon-green/80 mb-3 text-pretty">
              Founded by gamers, for gamers. PixelGripZone was born from late-night gaming sessions and a love for the
              golden age of arcade gaming. We noticed a gap in the market: high-performance gaming gear that doesn't
              sacrifice style for substance.
            </p>
            <p className="text-neon-green/70 text-pretty">
              Our team spent years researching, testing, and perfecting our product line to bring you accessories that
              not only look incredible but perform at the highest level.
            </p>
          </section>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-neon-cyan/30 p-4 bg-space-dark/50">
                <h3 className="font-pixel text-sm text-neon-purple mb-2">🎯 Precision</h3>
                <p className="text-neon-green/70 text-xs">
                  Every product is engineered for competitive gaming with microsecond response times
                </p>
              </div>
              <div className="border border-neon-cyan/30 p-4 bg-space-dark/50">
                <h3 className="font-pixel text-sm text-neon-purple mb-2">💡 Innovation</h3>
                <p className="text-neon-green/70 text-xs">
                  Cutting-edge RGB technology meets retro-inspired design aesthetics
                </p>
              </div>
              <div className="border border-neon-cyan/30 p-4 bg-space-dark/50">
                <h3 className="font-pixel text-sm text-neon-purple mb-2">🛡️ Quality</h3>
                <p className="text-neon-green/70 text-xs">
                  Premium materials and rigorous testing ensure durability for years of gaming
                </p>
              </div>
              <div className="border border-neon-cyan/30 p-4 bg-space-dark/50">
                <h3 className="font-pixel text-sm text-neon-purple mb-2">🎨 Style</h3>
                <p className="text-neon-green/70 text-xs">
                  Unique synthwave aesthetics that make your setup stand out from the crowd
                </p>
              </div>
            </div>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-neon-purple text-xl">▸</span>
                <div>
                  <strong className="text-neon-cyan">Gamer-First:</strong>
                  <span className="text-neon-green/80"> Every decision we make puts gamers at the center</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-purple text-xl">▸</span>
                <div>
                  <strong className="text-neon-cyan">Quality Over Quantity:</strong>
                  <span className="text-neon-green/80"> We'd rather perfect one product than rush ten</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-purple text-xl">▸</span>
                <div>
                  <strong className="text-neon-cyan">Community Driven:</strong>
                  <span className="text-neon-green/80"> Your feedback shapes our future products</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-purple text-xl">▸</span>
                <div>
                  <strong className="text-neon-cyan">Sustainable Gaming:</strong>
                  <span className="text-neon-green/80"> Eco-friendly packaging and responsible sourcing</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border text-center">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">Join the Zone</h2>
            <p className="text-neon-green/80 mb-4 text-pretty">
              Become part of a community that values performance, style, and the pure joy of gaming.
            </p>
            <p className="font-pixel text-sm text-neon-purple">YOUR CONTROLLER. YOUR POWER. YOUR GLOW.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
