"use client"

export function RetroGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 retro-grid opacity-30" />

      {/* Moving light rays */}
      <div className="absolute inset-0">
        <div className="light-ray light-ray-1" />
        <div className="light-ray light-ray-2" />
        <div className="light-ray light-ray-3" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
