/* Gilded Ritual, sticky header: transparent over hero → ivory blur on scroll; Cinzel nav, gold CTA */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IMG } from "@/lib/data";

const NAV = [
  { label: "Collection", href: "#collection" },
  { label: "Refills", href: "#refills" },
  { label: "Our Story", href: "#story" },
  { label: "Gifting", href: "#gifting" },
  { label: "Contact", href: "#enquiry" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,28,28,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-8 py-4">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img
            src={IMG.logo}
            alt="Jashika emblem"
            className={`h-12 w-12 object-contain transition-all duration-300 ${scrolled ? "" : "brightness-[1.6]"}`}
          />
          <span className="leading-none">
            <span className={`block font-brand text-[1.3rem] tracking-[0.3em] transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
              JASHIKA
            </span>
            <span className={`block font-brand text-[0.55rem] tracking-[0.2em] mt-1.5 whitespace-nowrap transition-colors duration-300 ${scrolled ? "text-[var(--gold)]" : "text-[#D4AF37]"}`}>
              Maison of Gifting Rituals
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 shrink-0">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`nav-link whitespace-nowrap ${scrolled ? "" : "!text-white/90 hover:!text-white [text-shadow:0_1px_6px_rgba(20,15,10,0.55)]"}`}
            >
              {n.label}
            </a>
          ))}
          <a href="#collection" className="btn-gold !py-3 !px-6 whitespace-nowrap">
            Shop the Collection
          </a>
        </nav>

        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/97 backdrop-blur-md border-t border-border">
          <nav className="container flex flex-col py-6 gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link text-sm"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#collection"
              className="btn-gold self-start !py-3 !px-6"
              onClick={() => setOpen(false)}
            >
              Shop the Collection
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
