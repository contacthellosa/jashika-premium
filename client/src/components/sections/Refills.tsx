/* Maison of Moments — Chapter III: refills as "The Ritual, Renewed" — sharp editorial grid, no arches */
import { ArrowUpRight } from "lucide-react";
import { REFILLS } from "@/lib/data";

export default function Refills() {
  return (
    <section id="refills" className="bg-secondary py-24 lg:py-32">
      <div className="container">
        <div className="reveal flex items-center gap-6 mb-12">
          <span className="chapter-marker">Chapter III</span>
          <div className="gold-rule flex-1" />
          <span className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground">
            The Ritual, Renewed
          </span>
        </div>
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <h2 className="font-display text-3xl md:text-4xl max-w-xl">
            A gift that keeps being given.
          </h2>
          <p className="text-muted-foreground max-w-md text-sm">
            The keepsake bottle stays; the experience returns. Refill pouches renew
            every signature blend for £10 — the same ritual, less waste.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--gold)]/25">
          {REFILLS.map((r, i) => (
            <a
              key={r.name}
              href={r.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-secondary p-4 sm:p-6 hover:bg-background transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="img-zoom">
                <img
                  src={r.image}
                  alt={`${r.name} refill pouch — renews the Jashika keepsake bottle`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between mt-5">
                <span className="font-display italic text-[var(--gold)]">0{i + 1}</span>
                <span className="font-display text-lg">£{r.price}</span>
              </div>
              <h3 className="font-display text-lg mt-2">{r.name}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 font-brand text-[0.58rem] tracking-[0.24em] uppercase text-[var(--gold-hover)] border border-[var(--gold)]/40 px-4 py-2 group-hover:bg-[var(--gold)] group-hover:text-white transition-colors">
                Buy Refill <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
