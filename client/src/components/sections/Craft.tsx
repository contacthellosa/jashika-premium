/* Gilded Ritual, presentation & craft: three-tier comparison resolving price perception */
import { Check } from "lucide-react";

const TIERS = [
  {
    name: "The Ritual Sets",
    price: "£51",
    tagline: "The complete ceremony, for one cherished person",
    items: [
      "1 Keepsake glass bottle of loose-leaf blend",
      "Refill pouch of the same blend",
      "Stainless-steel infuser",
      "Personalised message card",
      "Brewing guide & luxury presentation box",
    ],
  },
  {
    name: "The Trio Collections",
    price: "£36",
    tagline: "Three blends, three moods, one exquisite gift",
    items: [
      "3 Keepsake glass bottles of loose-leaf blends",
      "Thoughtfully combined flavour profiles",
      "Brewing guide & luxury presentation box",
      "Optional stainless-steel infuser (+£15)",
    ],
  },
  {
    name: "Chaar Ratna: The Grand Set",
    price: "£58",
    tagline: "All four signature blends. The ultimate expression",
    items: [
      "All 4 signature blends in keepsake bottles",
      "Personalised message card & brewing guide",
      "Deluxe rigid keepsake gift presentation box",
    ],
  },
];

export default function Craft() {
  return (
    <section id="craft" className="py-24 lg:py-28">
      <div className="container">
        <div className="reveal flex items-center gap-6 mb-12">
          <span className="chapter-marker">Chapter VI</span>
          <div className="gold-rule flex-1" />
          <span className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground">
            Choose Your Gesture
          </span>
        </div>
        <div className="reveal max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl">
            Three ways to say what words cannot.
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal p-8 lg:p-9 border ${
                i === 0
                  ? "bg-[var(--espresso)] text-white/90 border-transparent"
                  : "bg-card border-border"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3
                  className={`font-brand text-[0.72rem] tracking-[0.26em] uppercase ${
                    i === 0 ? "text-[#D4AF37]" : "text-[var(--gold-hover)]"
                  }`}
                >
                  {t.name}
                </h3>
                <span className="font-display text-2xl">{t.price}</span>
              </div>
              <p
                className={`font-display italic text-sm mt-3 ${
                  i === 0 ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {t.tagline}
              </p>
              <ul className="mt-6 space-y-2.5">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`h-3.5 w-3.5 mt-1 shrink-0 ${
                        i === 0 ? "text-[#D4AF37]" : "text-[var(--gold)]"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
