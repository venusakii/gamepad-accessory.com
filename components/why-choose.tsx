export function WhyChoose() {
  const reasons = [
    { icon: "🟣", text: "Built by gamers, for gamers" },
    { icon: "💾", text: "80s nostalgia meets modern tech" },
    { icon: "⚡", text: "Tested by e-sports pros" },
  ]

  return (
    <section id="why-choose" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-cyan/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-center mb-16 text-neon-cyan animate-flicker">
          Why Choose PixelGripZone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="arcade-stat text-center p-8 border-2 border-neon-purple/50 rounded-lg bg-space-dark/50 backdrop-blur-sm neon-glow-purple hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4 animate-pulse">{reason.icon}</div>
              <p className="font-pixel text-neon-purple text-xs md:text-sm leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
