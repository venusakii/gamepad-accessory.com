import { RetroGrid } from "@/components/retro-grid"
import Link from "next/link"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Alex_Gamer_92",
      rating: 5,
      date: "2025-01-15",
      product: "NeonGrip Pro X1",
      comment:
        "Best controller I've ever used! The RGB lighting is insane and the battery life is incredible. Worth every penny!",
      verified: true,
    },
    {
      id: 2,
      name: "RetroKing",
      rating: 5,
      date: "2025-01-10",
      product: "PixelPad Elite",
      comment: "The build quality is outstanding. Programmable buttons are a game-changer for competitive play.",
      verified: true,
    },
    {
      id: 3,
      name: "CyberNinja",
      rating: 4,
      date: "2025-01-08",
      product: "CyberGrip 2077",
      comment: "Amazing controller with great features. Only wish it came in more color options.",
      verified: true,
    },
    {
      id: 4,
      name: "PixelMaster",
      rating: 5,
      date: "2025-01-05",
      product: "ArcadeStick Neo",
      comment: "Tournament-grade quality at a reasonable price. The Sanwa parts feel premium!",
      verified: true,
    },
    {
      id: 5,
      name: "GlowGamer",
      rating: 5,
      date: "2025-01-02",
      product: "RetroWave Controller",
      comment: "Perfect blend of retro aesthetics and modern functionality. Love the ergonomic design!",
      verified: true,
    },
    {
      id: 6,
      name: "TechSavvy",
      rating: 4,
      date: "2024-12-28",
      product: "GlowPad Mini",
      comment: "Great portable option. Battery life could be better but overall very satisfied.",
      verified: true,
    },
  ]

  const stats = [
    { label: "Total Reviews", value: "2,847" },
    { label: "Average Rating", value: "4.8/5" },
    { label: "5-Star Reviews", value: "89%" },
    { label: "Verified Buyers", value: "94%" },
  ]

  return (
    <main className="relative min-h-screen bg-space-dark pt-24">
      <RetroGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 font-pixel text-xs text-neon-cyan hover:text-neon-purple transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-pixel text-4xl md:text-6xl text-neon-purple mb-4 scanline animate-flicker">
            ⭐ Customer Reviews
          </h1>
          <p className="font-sans text-lg text-neon-green max-w-2xl mx-auto">
            See what our customers are saying about PixelGripZone products
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-space-dark/50 border-2 border-neon-cyan/50 p-6 text-center glow-border">
              <div className="font-pixel text-3xl text-neon-cyan mb-2">{stat.value}</div>
              <div className="font-sans text-sm text-neon-green">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-space-dark/50 border-2 border-neon-purple/50 p-6 hover:border-neon-cyan transition-all glow-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-pixel text-lg text-neon-cyan">{review.name}</h3>
                    {review.verified && (
                      <span className="px-2 py-1 bg-neon-green/20 border border-neon-green text-neon-green font-pixel text-xs">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-sm text-neon-green/70">{review.product}</p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < review.rating ? "text-neon-purple" : "text-neon-purple/20"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-sans text-xs text-neon-green/50">{review.date}</span>
                </div>
              </div>

              <p className="font-sans text-neon-green leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-space-dark/80 border-2 border-neon-purple/50 p-8 glow-border">
            <h2 className="font-pixel text-2xl text-neon-purple mb-4">Join Our Community</h2>
            <p className="font-sans text-neon-green mb-6 max-w-md">
              Share your experience and help other gamers make the right choice
            </p>
            <button className="px-6 py-3 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-space-dark transition-all font-pixel text-xs">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
