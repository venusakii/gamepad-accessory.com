import { Button } from "@/components/ui/button"

const specs = [
  { product: "KontrolFreek", compatibility: "Xbox/PS", grip: "Concave", color: "Neon Blue", rating: "⭐⭐⭐⭐⭐" },
  { product: "8BitDo Skin", compatibility: "Switch", grip: "Smooth", color: "Magenta", rating: "⭐⭐⭐⭐" },
  { product: "HyperGrip Cable", compatibility: "Universal", grip: "Braided", color: "Lime Green", rating: "⭐⭐⭐⭐" },
  { product: "LED Dock", compatibility: "PS5/PS4", grip: "N/A", color: "RGB", rating: "⭐⭐⭐⭐⭐" },
  { product: "Trigger Caps", compatibility: "Xbox", grip: "Textured", color: "Purple", rating: "⭐⭐⭐⭐" },
]

export function TechSpecs() {
  return (
    <section id="specs" className="relative py-20 px-8 md:px-16 lg:px-24 border-t border-neon-cyan/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-center mb-16 text-neon-cyan animate-flicker">
          The Numbers Game
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-2 border-neon-purple/50 rounded-lg overflow-hidden">
            <thead className="bg-neon-purple/20 border-b-2 border-neon-purple/50">
              <tr>
                <th className="font-pixel text-neon-purple p-4 text-left text-xs md:text-sm">Product</th>
                <th className="font-pixel text-neon-purple p-4 text-left text-xs md:text-sm">Compatibility</th>
                <th className="font-pixel text-neon-purple p-4 text-left text-xs md:text-sm">Grip Type</th>
                <th className="font-pixel text-neon-purple p-4 text-left text-xs md:text-sm">Color</th>
                <th className="font-pixel text-neon-purple p-4 text-left text-xs md:text-sm">Rating</th>
                <th className="font-pixel text-neon-purple p-4 text-left text-xs md:text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className="border-b border-neon-cyan/30 hover:bg-neon-cyan/10 transition-colors group scanline"
                >
                  <td className="font-mono text-neon-cyan p-4 text-xs md:text-sm">{spec.product}</td>
                  <td className="font-mono text-neon-green p-4 text-xs md:text-sm">{spec.compatibility}</td>
                  <td className="font-mono text-neon-purple p-4 text-xs md:text-sm">{spec.grip}</td>
                  <td className="font-mono text-neon-cyan p-4 text-xs md:text-sm">{spec.color}</td>
                  <td className="font-mono text-neon-green p-4 text-xs">{spec.rating}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
