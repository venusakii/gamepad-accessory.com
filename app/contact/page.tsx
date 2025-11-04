import { RetroGrid } from "@/components/retro-grid"

export default function ContactPage() {
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
          📡 CONTACT US
        </h1>

        <div className="space-y-6">
          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-xl text-neon-cyan mb-4">Get In Touch</h2>
            <p className="text-neon-green/80 mb-6 font-mono text-sm text-pretty">
              Have questions about our products? Need support? Want to collaborate? We'd love to hear from you! Fill out
              the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-pixel text-sm text-neon-cyan mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-space-dark border-2 border-neon-purple/50 text-neon-green font-mono focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-pixel text-sm text-neon-cyan mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-space-dark border-2 border-neon-purple/50 text-neon-green font-mono focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-pixel text-sm text-neon-cyan mb-2">
                  SUBJECT
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-space-dark border-2 border-neon-purple/50 text-neon-green font-mono focus:border-neon-cyan focus:outline-none transition-colors"
                >
                  <option>Product Inquiry</option>
                  <option>Technical Support</option>
                  <option>Order Status</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-pixel text-sm text-neon-cyan mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-space-dark border-2 border-neon-purple/50 text-neon-green font-mono focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-neon-purple text-space-dark font-pixel text-sm border-2 border-neon-purple hover:bg-transparent hover:text-neon-purple transition-all glow-border"
              >
                SEND MESSAGE
              </button>
            </form>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
              <h2 className="font-pixel text-lg text-neon-cyan mb-4">📧 Email</h2>
              <p className="text-neon-green/80 font-mono text-sm mb-2">General Inquiries:</p>
              <p className="text-neon-purple font-mono text-sm mb-4">hello@pixelgripzone.com</p>
              <p className="text-neon-green/80 font-mono text-sm mb-2">Support:</p>
              <p className="text-neon-purple font-mono text-sm">support@pixelgripzone.com</p>
            </section>

            <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
              <h2 className="font-pixel text-lg text-neon-cyan mb-4">⏰ Hours</h2>
              <p className="text-neon-green/80 font-mono text-sm mb-2">Monday - Friday:</p>
              <p className="text-neon-purple font-mono text-sm mb-4">9:00 AM - 6:00 PM EST</p>
              <p className="text-neon-green/80 font-mono text-sm mb-2">Weekend:</p>
              <p className="text-neon-purple font-mono text-sm">Closed (Email support available)</p>
            </section>
          </div>

          <section className="border-2 border-neon-purple/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border">
            <h2 className="font-pixel text-lg text-neon-cyan mb-4">🌐 Social Media</h2>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a href="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                Twitter/X →
              </a>
              <a href="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                Instagram →
              </a>
              <a href="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                Discord →
              </a>
              <a href="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                YouTube →
              </a>
              <a href="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                Twitch →
              </a>
            </div>
          </section>

          <section className="border-2 border-neon-cyan/50 p-6 bg-space-dark/80 backdrop-blur-sm glow-border text-center">
            <p className="font-pixel text-sm text-neon-purple mb-2">RESPONSE TIME: 24 HOURS</p>
            <p className="text-neon-green/70 font-mono text-xs">
              We read every message and respond as quickly as possible!
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
