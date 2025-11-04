import { RetroGrid } from "@/components/retro-grid"
import Link from "next/link"
import Image from "next/image"

const allProducts = [
  {
    slug: "high-rise-thumbsticks-xbox",
    name: "High-Rise Thumbsticks for Xbox Series/One Controller",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/61dTTdlMZ8L._AC_SX679_.jpg",
    shopLink: "https://www.amazon.com/High-Rise-Thumbsticks-Controller-Accessories-Performance/dp/B0F9V5SXQM",
    features: ["Plug and Play Silicone", "For FPS and Racing Games", "Performance Thumb Grips"],
    description:
      "Elevate your gaming precision with these high-rise thumbsticks designed specifically for Xbox Series, One, ROG Ally X, and Xbox Elite controllers. Made from durable silicone, they offer plug-and-play installation and enhanced control for FPS and racing games.",
    specs: {
      material: "Silicone",
      compatibility: "Xbox Series X/S, Xbox One, ROG Ally X, Elite",
      color: "Plum",
      quantity: "1 Pair",
      type: "High-Rise Performance Grips",
    },
  },
  {
    slug: "thumbstick-playstation-3t",
    name: "Controller Accessories Thumbstick for Playstation Controller 3T",
    price: "$16.99",
    image: "https://m.media-amazon.com/images/I/81Bk2F1tSwL._SX522_.jpg",
    shopLink: "https://www.amazon.com/Controller-Accessories-Thumbstick-Playstation-Controller-3T/dp/B0CZHQ89Y6",
    features: ["High Rise Joystick Grips", "Compatible with PS4/PS5", "3 Pairs Included"],
    description:
      "Upgrade your PlayStation controller with these high-rise thumbstick grips. Includes three pairs for extended use, providing better aim and comfort during intense gaming sessions on PS4 and PS5.",
    specs: {
      material: "Silicone/Rubber",
      compatibility: "PS4, PS5, DualSense",
      quantity: "3 Pairs",
      height: "High-Rise",
      type: "Joystick Extenders",
    },
  },
  {
    slug: "thumbstick-extenders",
    name: "Controller Accessories Thumbstick Extenders Attachments",
    price: "$14.99",
    image: "https://m.media-amazon.com/images/I/91PGkhQetlL._AC_SX679_.jpg",
    shopLink: "https://www.amazon.com/Controller-Accessories-Thumbstick-Extenders-Attachments/dp/B0DD7JK383",
    features: ["Height Enhancers", "Increased Precision", "For Xbox Controllers"],
    description:
      "Simple yet effective thumbstick extenders that add height for improved leverage and accuracy. Perfect for Xbox controllers, helping reduce thumb fatigue and enhance performance in competitive play.",
    specs: {
      material: "Durable Plastic/Silicone",
      compatibility: "Xbox Series X/S, Xbox One",
      heightIncrease: "Variable",
      installation: "Snap-On",
      quantity: "Multiple Pairs",
    },
  },
  {
    slug: "replacement-thumbsticks",
    name: "Replacement Thumbsticks Controller Component Accessories",
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/61NxW2-QQmL._SX522_.jpg",
    shopLink: "https://www.amazon.com/Replacement-Thumbsticks-Controller-Component-Accessories/dp/B0BJZRZ7QB",
    features: ["Metal Swap Magnetic Joysticks", "For Xbox Elite Series 2", "Includes Paddles and D-Pads"],
    description:
      "Premium replacement kit for Xbox Elite Series 2 controllers. Features magnetic swap thumbsticks, additional paddles, and D-pads for full customization and repair of worn components.",
    specs: {
      material: "Metal/Plastic",
      compatibility: "Xbox Elite Series 2",
      components: "Thumbsticks, Paddles, D-Pads",
      type: "Magnetic Interchangeable",
      kitIncludes: "Tools and Cases",
    },
  },
  {
    slug: "ergonomic-handheld-grip",
    name: "Controller Control Handheld Accessories Ergonomic",
    price: "$14.99",
    image: "https://m.media-amazon.com/images/I/51Ols2SktDL._SX522_.jpg",
    shopLink: "https://www.amazon.com/Controller-Control-Handheld-Accessories-Ergonomic/dp/B0B6WGBNS2",
    features: ["Comfort Grip", "Ergonomic Design", "Widely Applicable"],
    description:
      "Enhance handheld gaming comfort with this ergonomic grip accessory. Fits various controllers and handhelds, reducing strain during long sessions and improving overall control.",
    specs: {
      material: "Soft Rubber/Plastic",
      compatibility: "Universal Handhelds/Controllers",
      design: "Ergonomic Contour",
      weight: "Lightweight",
      attachment: "Clip-On",
    },
  },
  {
    slug: "dualsense-charging-station",
    name: "Charging Dualsense Controllers for PlayStation",
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/61E4bTm1QZL._AC_SX679_.jpg",
    shopLink: "https://www.amazon.com/Charging-Dualsense-Controllers-Controller-PlayStation-Officially/dp/B09B1XX1PN",
    features: ["Charges Two Controllers", "Click-In Design", "For PS5"],
    description:
      "Official charging station for DualSense controllers. Simultaneously charges two PS5 controllers with a secure click-in design, keeping your setup organized and ready for play.",
    specs: {
      capacity: "Dual Controllers",
      compatibility: "PS5 DualSense",
      connection: "AC Adapter",
      design: "Click-In Dock",
      power: "Fast Charging",
    },
  },
  {
    slug: "rechargeable-battery-pack",
    name: "Controller 2x2550mAh Rechargeable Charging Batteries",
    price: "$21.98",
    image: "https://m.media-amazon.com/images/I/81cOO24tUgL._AC_SX679_.jpg",
    shopLink: "https://www.amazon.com/Controller-2x2550mAh-Rechargeable-Charging-Batteries/dp/B09MLSJHN2",
    features: ["Rechargeable Packs", "For Xbox Controllers", "Dual Charging Station"],
    description:
      "High-capacity rechargeable battery packs for Xbox controllers. Includes two 2550mAh batteries and a dual charging dock for uninterrupted gaming with eco-friendly power.",
    specs: {
      capacity: "2x 2550mAh",
      compatibility: "Xbox One/Series X/S",
      charging: "Dual Dock",
      lifespan: "1000+ Cycles",
      type: "NiMH Rechargeable",
    },
  },
  {
    slug: "gamesir-x5-lite",
    name: "GameSir X5 Lite Mobile Gaming Controller",
    price: "$34.99",
    image: "https://m.media-amazon.com/images/I/71oJVM3GuOL._SX522_.jpg",
    shopLink: "https://www.amazon.com/Controller-Joystick-Lightweight-Ergonomic-Controller-Smartphone/dp/B0DXPMVCWC",
    features: ["Hall Effect Joystick", "Lightweight Ergonomic", "For Android & iPhone"],
    description:
      "Telescopic mobile controller with Hall Effect joysticks for drift-free precision. Lightweight and ergonomic, perfect for Android and iPhone 15/16 series, supporting cloud gaming and emulators.",
    specs: {
      joysticks: "Hall Effect",
      compatibility: "Android, iPhone 15/16 (USB-C)",
      connection: "Wired USB-C",
      weight: "Lightweight",
      design: "Telescopic/Ergonomic",
    },
  },
  {
    slug: "gamesir-g7-se",
    name: "GameSir G7 SE Wired Controller for Xbox",
    price: "$44.99",
    image: "https://m.media-amazon.com/images/I/51iXILIT27L._SX522_.jpg",
    shopLink: "https://www.amazon.com/GameSir-Controller-Xbox-Windows-Joysticks-X/dp/B0C7GW9F88",
    features: ["Hall Effect Joysticks", "For Xbox & Windows", "Plug and Play"],
    description:
      "Officially licensed wired controller with Hall Effect joysticks and triggers to prevent drift. Features customizable back buttons, vibration motors, and 3.5mm audio jack for immersive Xbox and PC gaming.",
    specs: {
      connectivity: "Wired USB-C (Detachable)",
      joysticksTriggers: "Hall Effect",
      compatibility: "Xbox Series X/S, Xbox One, Windows 10/11",
      audio: "3.5mm Jack",
      extras: "2 Custom Back Buttons, Vibration",
    },
  },
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <main className="relative min-h-screen bg-space-dark pt-24">
        <RetroGrid />
        <div className="relative z-10 text-center py-20">
          <h1 className="font-pixel text-4xl text-neon-purple mb-4">Product Not Found</h1>
          <Link href="/products" className="text-neon-cyan hover:text-neon-purple">
            Back to Products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-space-dark pt-24">
      <RetroGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <Link
          href="/products"
          className="inline-block mb-8 font-pixel text-xs text-neon-cyan hover:text-neon-purple transition-colors"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full max-w-sm h-auto object-cover border-2 border-neon-cyan/50 glow-border"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-pixel text-3xl md:text-5xl text-neon-purple mb-4 animate-flicker">{product.name}</h1>

            <p className="font-sans text-lg text-neon-cyan mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <h3 className="font-pixel text-lg text-neon-purple mb-4">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="font-sans text-neon-green flex items-center gap-2">
                    <span className="text-neon-cyan">▸</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a href={product.shopLink} target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full px-6 py-4 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-space-dark transition-all font-pixel text-sm mb-6">
                Buy on Amazon
              </button>
            </a>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-space-dark/50 border-2 border-neon-cyan/30 p-8 mb-12">
          <h2 className="font-pixel text-2xl text-neon-cyan mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-neon-cyan/20 pb-2">
                <span className="font-pixel text-sm text-neon-green capitalize">{key}:</span>
                <span className="font-sans text-sm text-neon-cyan">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
