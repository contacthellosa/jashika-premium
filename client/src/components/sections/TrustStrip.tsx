/* Maison of Moments, trust band: gifting-experience promises */
import { Gift, Package, Recycle, MapPin } from "lucide-react";

const ITEMS = [
  { icon: MapPin, text: "Handcrafted in England" },
  { icon: Gift, text: "Personalised message cards" },
  { icon: Package, text: "Gold-lined presentation" },
  { icon: Recycle, text: "Keepsake glass, kept for years" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[var(--espresso)] text-white/90 py-6 border-t border-[#D4AF37]/20">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
        {ITEMS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 justify-center lg:justify-start">
            <Icon className="h-4 w-4 text-[#D4AF37] shrink-0" />
            <span className="font-brand text-[0.62rem] tracking-[0.22em] uppercase">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

