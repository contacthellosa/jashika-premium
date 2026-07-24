/* Maison boutique, floating quick-shop bar: appears after hero, keeps price + buy one click away */
import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export default function QuickShop() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[min(92vw,720px)]">
      {open && (
        <div className="mb-3 bg-background shadow-[0_24px_70px_-20px_rgba(36,30,22,0.45)] border border-[var(--gold)]/30 divide-y divide-border">
          {PRODUCTS.map((p) => (
            <a
              key={p.slug}
              href={p.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-card transition-colors group"
            >
              <img src={p.image} alt="" className="h-11 w-11 object-cover shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block font-display text-[0.95rem] truncate">{p.name}</span>
                <span className="block font-brand text-[0.52rem] tracking-[0.24em] uppercase text-muted-foreground">
                  {p.tier}
                </span>
              </span>
              <span className="font-display text-lg">£{p.price}</span>
              <span className="font-brand text-[0.55rem] tracking-[0.2em] uppercase text-[var(--gold-hover)] group-hover:underline underline-offset-4 shrink-0">
                Buy
              </span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-3 bg-[var(--espresso)] text-white py-4 px-6 shadow-[0_18px_50px_-12px_rgba(36,30,22,0.6)] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-colors font-brand text-[0.68rem] tracking-[0.26em] uppercase"
        aria-label={open ? "Close quick shop" : "Open quick shop"}
      >
        {open ? <X className="h-4 w-4 text-[#D4AF37]" /> : <ShoppingBag className="h-4 w-4 text-[#D4AF37]" />}
        {open ? "Close" : "Quick Shop · Gift sets from £36"}
      </button>
    </div>
  );
}
