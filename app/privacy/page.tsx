import { RetroGrid } from "@/components/retro-grid"

export default function PrivacyPage() {
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
          🔒 PRIVACY POLICY
        </h1>

        <div className="space-y-6 font-mono text-sm md:text-base leading-relaxed">
          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">1. Information We Collect</h2>
            <p className="text-neon-green/80 mb-3">
              We collect information you provide directly to us when you create an account, make a purchase, or contact
              us for support.
            </p>
            <ul className="list-disc list-inside space-y-2 text-neon-green/70 ml-4">
              <li>Name and contact information</li>
              <li>Payment and billing information</li>
              <li>Shipping address</li>
              <li>Purchase history</li>
            </ul>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">2. How We Use Your Information</h2>
            <p className="text-neon-green/80 mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-neon-green/70 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our products and services</li>
              <li>Send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">3. Data Security</h2>
            <p className="text-neon-green/80">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">4. Cookies</h2>
            <p className="text-neon-green/80">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information to improve your browsing experience.
            </p>
          </section>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">5. Your Rights</h2>
            <p className="text-neon-green/80 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-neon-green/70 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">6. Contact Us</h2>
            <p className="text-neon-green/80">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <span className="text-neon-purple">privacy@pixelgripzone.com</span>
            </p>
          </section>

          <p className="text-center text-neon-green/60 text-xs mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </main>
  )
}
