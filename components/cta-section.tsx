import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="cta" className="relative py-32 px-8 md:px-16 lg:px-24 border-t border-neon-purple/30 overflow-hidden">
      {/* Pulsating wave background */}
      <div className="absolute inset-0 synthwave-bg opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-neon-purple mb-8 animate-flicker">
          Ready to Power Up?
        </h2>

        <p className="font-mono text-lg md:text-xl text-neon-cyan mb-12 scanline">
          "You're one click away from glowing gameplay."
        </p>

        <Button
          size="lg"
          className="font-pixel text-lg px-10 py-6 bg-neon-green border-2 border-neon-green text-black hover:bg-neon-green/80 hover:scale-110 transition-all neon-glow-green animate-pulse-glow"
        >
          [ START SHOPPING ]
        </Button>
      </div>
    </section>
  )
}
