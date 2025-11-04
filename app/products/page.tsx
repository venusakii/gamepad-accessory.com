import { RetroGrid } from "@/components/retro-grid"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const products = [
    {
      slug: "high-rise-thumbsticks-xbox",
      name: "High-Rise Thumbsticks for Xbox Series/One Controller",
      price: "$15.99",
      image: "https://m.media-amazon.com/images/I/61dTTdlMZ8L._AC_SX679_.jpg",
      features: ["Plug and Play Silicone", "For FPS and Racing Games", "Performance Thumb Grips"],
    },
    {
      slug: "thumbstick-playstation-3t",
      name: "Controller Accessories Thumbstick for Playstation Controller 3T",
      price: "$16.99",
      image: "https://m.media-amazon.com/images/I/81Bk2F1tSwL._SX522_.jpg",
      features: ["High Rise Joystick Grips", "Compatible with PS4/PS5", "3 Pairs Included"],
    },
    {
      slug: "thumbstick-extenders",
      name: "Controller Accessories Thumbstick Extenders Attachments",
      price: "$14.99",
      image: "https://m.media-amazon.com/images/I/91PGkhQetlL._AC_SX679_.jpg",
      features: ["Height Enhancers", "Increased Precision", "For Xbox Controllers"],
    },
    {
      slug: "replacement-thumbsticks",
      name: "Replacement Thumbsticks Controller Component Accessories",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/61NxW2-QQmL._SX522_.jpg",
      features: ["Metal Swap Magnetic Joysticks", "For Xbox Elite Series 2", "Includes Paddles and D-Pads"],
    },
    {
      slug: "ergonomic-handheld-grip",
      name: "Controller Control Handheld Accessories Ergonomic",
      price: "$14.99",
      image: "https://m.media-amazon.com/images/I/51Ols2SktDL._SX522_.jpg",
      features: ["Comfort Grip", "Ergonomic Design", "Widely Applicable"],
    },
    {
      slug: "dualsense-charging-station",
      name: "Charging Dualsense Controllers for PlayStation",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/61E4bTm1QZL._AC_SX679_.jpg",
      features: ["Charges Two Controllers", "Click-In Design", "For PS5"],
    },
    {
      slug: "rechargeable-battery-pack",
      name: "Controller 2x2550mAh Rechargeable Charging Batteries",
      price: "$21.98",
      image: "https://m.media-amazon.com/images/I/81cOO24tUgL._AC_SX679_.jpg",
      features: ["Rechargeable Packs", "For Xbox Controllers", "Dual Charging Station"],
    },
    {
      slug: "gamesir-x5-lite",
      name: "GameSir X5 Lite Mobile Gaming Controller",
      price: "$34.99",
      image: "https://m.media-amazon.com/images/I/71oJVM3GuOL._SX522_.jpg",
      features: ["Hall Effect Joystick", "Lightweight Ergonomic", "For Android & iPhone"],
    },
    {
      slug: "gamesir-g7-se",
      name: "GameSir G7 SE Wired Controller for Xbox",
      price: "$44.99",
      image: "https://m.media-amazon.com/images/I/51iXILIT27L._SX522_.jpg",
      features: ["Hall Effect Joysticks", "For Xbox & Windows", "Plug and Play"],
    },
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
            🎮 Our Products
          </h1>
          <p className="font-sans text-lg text-neon-green max-w-2xl mx-auto">
            Premium gaming controllers with retro aesthetics and modern technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <div className="group bg-space-dark/50 border-2 border-neon-purple/50 p-6 hover:border-neon-cyan transition-all duration-300 glow-border cursor-pointer">
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-pixel text-lg text-neon-cyan mb-2">{product.name}</h3>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="font-sans text-sm text-neon-green flex items-center gap-2">
                      <span className="text-neon-cyan">▸</span> {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full px-4 py-3 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-space-dark transition-all font-pixel text-xs">
                  Read More
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-space-dark/80 border-2 border-neon-cyan/50 p-8 glow-border">
            <h2 className="font-pixel text-2xl text-neon-cyan mb-4">Can't Find What You Need?</h2>
            <p className="font-sans text-neon-green mb-6">Contact us for custom orders and special requests</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-space-dark transition-all font-pixel text-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
