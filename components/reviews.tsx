const reviews = [
  { user: "Player_01", message: "These grips changed my aim completely!", icon: "🧑‍💻" },
  { user: "RetroQueen", message: "Looks sick under blacklight!", icon: "🎮" },
  { user: "ProX9", message: "VHS vibe = WIN.", icon: "👾" },
  { user: "NeonGamer", message: "Best purchase this year!", icon: "⚡" },
  { user: "PixelMaster", message: "The glow is REAL!", icon: "🌟" },
]

export function Reviews() {
  return (
    <section id="reviews" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-purple/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-center mb-16 text-neon-purple animate-flicker">
          Player Feedback
        </h2>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="chat-message p-6 border-l-4 border-neon-green bg-space-dark/60 backdrop-blur-sm rounded-r-lg hover:border-neon-cyan transition-colors scanline"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{review.icon}</span>
                <div className="flex-1">
                  <div className="font-pixel text-neon-cyan text-xs mb-2">{review.user}:</div>
                  <p className="font-mono text-neon-green/90 text-sm md:text-base">"{review.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pulsating triangles background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="triangle triangle-1" />
          <div className="triangle triangle-2" />
          <div className="triangle triangle-3" />
        </div>
      </div>
    </section>
  )
}
