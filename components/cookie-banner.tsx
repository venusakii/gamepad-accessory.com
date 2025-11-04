"use client"

import { Button } from "@/components/ui/button"

interface CookieBannerProps {
  onAccept: () => void
}

export function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-6 bg-space-dark/95 backdrop-blur-sm border-2 border-neon-cyan rounded-lg neon-glow-cyan animate-slide-up">
      <div className="flex items-start gap-4">
        <span className="text-3xl">🍪</span>
        <div className="flex-1">
          <p className="font-mono text-sm text-neon-cyan mb-4 leading-relaxed">
            This website uses cookies to enhance your gameplay experience. By continuing, you accept our neon-powered
            cookies.
          </p>
          <Button
            onClick={onAccept}
            className="font-pixel text-sm bg-neon-cyan text-black hover:bg-neon-cyan/80 border border-neon-cyan w-full hover:scale-105 transition-all"
          >
            [ ACCEPT ⚡ ]
          </Button>
        </div>
      </div>
    </div>
  )
}
