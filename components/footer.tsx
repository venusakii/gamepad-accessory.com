export function Footer() {
  return (
    <header className="relative py-12 px-4 border-t-2 border-neon-purple/50 bg-space-dark/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-pixel text-2xl md:text-4xl text-neon-purple mb-4 animate-flicker">
            GAME OVER… OR IS IT?
          </h3>
          <div className="font-pixel text-xl text-neon-cyan mb-6">PixelGripZone</div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 font-pixel text-sm text-neon-green">
          <a href="/privacy" className="hover:text-neon-cyan transition-colors">
            Privacy
          </a>
          <span className="text-neon-purple">|</span>
          <a href="/terms" className="hover:text-neon-cyan transition-colors">
            Terms
          </a>
          <span className="text-neon-purple">|</span>
          <a href="/about" className="hover:text-neon-cyan transition-colors">
            About
          </a>
          <span className="text-neon-purple">|</span>
          <a href="/contact" className="hover:text-neon-cyan transition-colors">
            Contact
          </a>
        </div>

        <div className="text-center font-mono text-xs md:text-sm text-neon-green/70 scanline space-y-2">
          <p>© 2025 PixelGripZone.com — All Rights Reserved.</p>
          <p className="text-neon-cyan/70">
            Amazon Affiliate Partner 🛒 As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </header>
  )
}
