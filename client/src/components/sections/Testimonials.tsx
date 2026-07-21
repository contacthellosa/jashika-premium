/* Gilded Ritual — testimonials carried verbatim from the live site */
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-secondary py-24 lg:py-28">
      <div className="container">
        {/* Editorial asymmetric testimonial spread: heading column + staggered quotes */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow mb-5">Kind Words</p>
            <h2 className="text-3xl md:text-4xl">
              Gestures,
              <br />
              <em className="text-[var(--gold-hover)]">remembered.</em>
            </h2>
            <p className="text-muted-foreground text-sm mt-5 max-w-xs">
              From milestone birthdays to executive gifting — in the words of the
              people who gave Jashika.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name}
                className={`reveal bg-background p-8 lg:p-9 shadow-[0_16px_40px_-20px_rgba(36,30,22,0.3)] lg:max-w-[85%] ${
                  i % 2 === 1 ? "lg:ml-auto" : ""
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-display italic text-2xl text-[var(--gold)]/45">
                    0{i + 1}
                  </span>
                </div>
                <blockquote className="font-display italic text-[1.05rem] leading-relaxed mt-4">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[var(--gold)]/25 flex items-baseline justify-between">
                  <p className="font-brand text-[0.68rem] tracking-[0.22em] uppercase">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
