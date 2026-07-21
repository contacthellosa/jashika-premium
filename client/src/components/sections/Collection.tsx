/* Gilded Ritual — editorial product rows: index numerals, visible tasting notes & includes, dialog details */
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PRODUCTS, type Product } from "@/lib/data";

function ProductRow({ p, flip }: { p: Product; flip: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="reveal grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      {/* Boutique vitrine: larger image on layered cream panel with soft spotlight shadow */}
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <div className="relative bg-card p-3 sm:p-4 shadow-[0_40px_90px_-35px_rgba(36,30,22,0.5)]">
          <div className="img-zoom relative">
            <img
              src={p.image}
              alt={p.fullName}
              loading="lazy"
              className="w-full aspect-[3/2] object-cover"
            />
            {p.badge && (
              <span className="absolute top-4 left-4 bg-[var(--espresso)]/90 backdrop-blur px-4 py-2 font-brand text-[0.58rem] tracking-[0.28em] uppercase text-[#D4AF37]">
                {p.badge}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <span className="index-numeral block">{p.index}</span>
        <p className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-[var(--gold)] mt-4">
          {p.tier}
        </p>
        <h3 className="font-display text-3xl md:text-[2.1rem] leading-[1.2] mt-2">{p.fullName}</h3>
        <p className="text-muted-foreground mt-5 max-w-xl">{p.story}</p>
        {p.tastingNotes && (
          <p className="mt-4 text-sm">
            <span className="font-brand text-[0.6rem] tracking-[0.25em] uppercase text-[var(--gold-hover)] mr-2">
              Tasting Notes
            </span>
            <span className="font-display italic">{p.tastingNotes}</span>
          </p>
        )}
        <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-[var(--gold)]/25">
          <span className="font-display text-3xl">£{p.price}</span>
          <a
            href={p.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-3.5"
          >
            {p.buyLabel} <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="font-brand text-[0.62rem] tracking-[0.25em] uppercase text-muted-foreground hover:text-[var(--gold-hover)] transition-colors underline underline-offset-4 decoration-[var(--gold)]/40"
          >
            Full details
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg bg-background">
          <DialogHeader>
            <p className="font-brand text-[0.6rem] tracking-[0.3em] uppercase text-[var(--gold)]">
              {p.tier}
            </p>
            <DialogTitle className="font-display text-2xl font-normal">
              {p.fullName}
            </DialogTitle>
            <DialogDescription className="pt-1">
              Everything included in the {p.name} set.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p className="font-brand text-[0.6rem] tracking-[0.25em] uppercase text-[var(--gold-hover)] mb-2">
              What's Included
            </p>
            <ul className="space-y-1.5">
              {p.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-3.5 w-3.5 mt-1 text-[var(--gold)] shrink-0" />
                  {inc}
                </li>
              ))}
            </ul>
            {p.note && (
              <p className="text-xs text-muted-foreground mt-3 italic">{p.note}</p>
            )}
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="font-display text-2xl">£{p.price}</span>
            <a
              href={p.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !py-3 !px-6"
            >
              {p.buyLabel} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="py-24 lg:py-32">
      <div className="container">
        <div className="reveal flex items-center gap-6 mb-12">
          <span className="chapter-marker">Chapter II</span>
          <div className="gold-rule flex-1" />
          <span className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground">
            The Collection
          </span>
        </div>
        <div className="reveal max-w-2xl mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl">
            Five gifts. One <em className="text-[var(--gold-hover)]">unforgettable</em> gesture.
          </h2>
          <p className="text-muted-foreground mt-5">
            Each experience is hand-assembled in small batches — artisan blends
            sealed in keepsake glass, presented in gold-lined ceremony, remembered
            long after the moment has passed.
          </p>
        </div>
        <div className="space-y-24 lg:space-y-32">
          {PRODUCTS.map((p, i) => (
            <ProductRow key={p.slug} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
