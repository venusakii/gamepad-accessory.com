import { RetroGrid } from "@/components/retro-grid"

export default function TermsPage() {
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

        <h1 className="font-pixel text-3xl md:text-5xl text-neon-purple mb-8 scanline animate-flicker">
          📜 TERMS OF SERVICE
        </h1>

        <div className="space-y-6 font-mono text-sm md:text-base leading-relaxed">
          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">1. Acceptance of Terms</h2>
            <p className="text-neon-green/80">
              By accessing and using PixelGripZone.com, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">2. Use License</h2>
            <p className="text-neon-green/80 mb-3">
              Permission is granted to temporarily download one copy of the materials on PixelGripZone.com for personal,
              non-commercial transitory viewing only.
            </p>
            <p className="text-neon-green/70 text-sm">
              This license shall automatically terminate if you violate any of these restrictions.
            </p>
          </section>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">3. Product Information</h2>
            <p className="text-neon-green/80 mb-3">
              We strive to provide accurate product descriptions and pricing. However:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neon-green/70 ml-4">
              <li>We do not warrant that product descriptions are accurate or complete</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to limit quantities</li>
              <li>Product colors may vary from images shown</li>
            </ul>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">4. Amazon Affiliate Disclosure</h2>
            <p className="text-neon-green/80">
              PixelGripZone.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com.
            </p>
          </section>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">5. Returns & Refunds</h2>
            <p className="text-neon-green/80 mb-3">Our return policy:</p>
            <ul className="list-disc list-inside space-y-2 text-neon-green/70 ml-4">
              <li>30-day return window from date of delivery</li>
              <li>Products must be unused and in original packaging</li>
              <li>Refunds processed within 5-7 business days</li>
              <li>Customer responsible for return shipping costs</li>
            </ul>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">6. Limitation of Liability</h2>
            <p className="text-neon-green/80">
              PixelGripZone.com shall not be liable for any indirect, incidental, special, consequential or punitive
              damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">7. Modifications</h2>
            <p className="text-neon-green/80">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              to the website.
            </p>
          </section>

          <p className="text-center text-neon-green/60 text-xs mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </main>
  )
}
