"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductGrid } from "@/components/product-grid"
import { HowItWorks } from "@/components/how-it-works"
import { TechSpecs } from "@/components/tech-specs"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { WhyChoose } from "@/components/why-choose"
import { CTASection } from "@/components/cta-section"
import { CookieBanner } from "@/components/cookie-banner"
import { RetroGrid } from "@/components/retro-grid"

export default function Home() {
  const [scrollScore, setScrollScore] = useState(0)
  const [showCookie, setShowCookie] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const score = Math.floor(window.scrollY / 10)
      setScrollScore(score)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20">
      <RetroGrid />

      {/* Score Counter */}
      <div className="fixed top-20 right-4 z-50 font-pixel text-neon-green text-sm md:text-base animate-pulse">
        SCORE: {scrollScore.toString().padStart(6, "0")}
      </div>

      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <HowItWorks />
      <TechSpecs />
      <Reviews />
      <Gallery />
      <WhyChoose />

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-purple/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-center mb-12 text-neon-purple animate-flicker">
            INSERT COIN FOR ANSWERS
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-neon-cyan/30 bg-space-dark/50 backdrop-blur-sm rounded-lg px-6 neon-glow-cyan"
            >
              <AccordionTrigger className="font-pixel text-xs md:text-sm text-neon-cyan hover:text-neon-green transition-colors">
                What products do you offer?
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-neon-green/80 scanline">
                We offer premium gaming accessories including thumbsticks, charging docks, controller skins, carry
                cases, cables, and RGB grips - all with that retro neon aesthetic.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-neon-purple/30 bg-space-dark/50 backdrop-blur-sm rounded-lg px-6 neon-glow-purple"
            >
              <AccordionTrigger className="font-pixel text-xs md:text-sm text-neon-purple hover:text-neon-green transition-colors">
                Are these compatible with my console?
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-neon-green/80 scanline">
                Most products support Xbox, PlayStation, Nintendo Switch, and PC. Check individual product specs for
                exact compatibility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-neon-green/30 bg-space-dark/50 backdrop-blur-sm rounded-lg px-6 neon-glow-green"
            >
              <AccordionTrigger className="font-pixel text-xs md:text-sm text-neon-green hover:text-neon-cyan transition-colors">
                Do they really glow?
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-neon-purple/80 scanline">
                Yes! Many products feature RGB lighting or glow-in-the-dark materials. Perfect for blacklight gaming
                setups.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-neon-cyan/30 bg-space-dark/50 backdrop-blur-sm rounded-lg px-6 neon-glow-cyan"
            >
              <AccordionTrigger className="font-pixel text-xs md:text-sm text-neon-cyan hover:text-neon-purple transition-colors">
                How long is shipping?
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-neon-green/80 scanline">
                Standard shipping takes 5-7 business days. Express options available at checkout for faster delivery.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTASection />

      {showCookie && <CookieBanner onAccept={() => setShowCookie(false)} />}
    </main>
  )
}
