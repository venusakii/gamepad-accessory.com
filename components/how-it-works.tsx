export function HowItWorks() {
  const steps = [
    { number: "1", title: "Choose your weapon", icon: "🎯", color: "neon-cyan" },
    { number: "2", title: "Equip accessories", icon: "⚡", color: "neon-purple" },
    { number: "3", title: "Conquer your match", icon: "👾", color: "neon-green" },
  ]

  return (
    <section id="how-it-works" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-green/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-center mb-16 text-neon-green animate-flicker">
          Upgrade. Equip. Dominate.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`text-center p-8 border-2 border-${step.color}/50 rounded-lg bg-space-dark/50 backdrop-blur-sm neon-glow-${step.color.split("-")[1]} hover:scale-105 transition-transform`}
              >
                <div className={`text-4xl md:text-5xl mb-4 animate-pulse text-${step.color}`}>{step.icon}</div>
                <div className={`font-pixel text-3xl text-${step.color} mb-4`}>{step.number}</div>
                <h3 className={`font-pixel text-base text-${step.color}/80`}>{step.title}</h3>
              </div>

              {/* Light trace between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
