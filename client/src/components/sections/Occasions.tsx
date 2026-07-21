/* Maison of Moments — Chapter V: occasions as full editorial split with generated gifting imagery */
import { ArrowRight } from "lucide-react";
import { IMG, OCCASIONS } from "@/lib/data";

export default function Occasions() {
  return (
    <section id="gifting" className="py-24 lg:py-32">
      <div className="container">
        <div className="reveal flex items-center gap-6 mb-12">
          <span className="chapter-marker">Chapter V</span>
          <div className="gold-rule flex-1" />
          <span className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground">
            Moments Worth Marking
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Editorial image column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="reveal img-zoom shadow-[0_30px_70px_-30px_rgba(36,30,22,0.45)]">
              <img
                src={IMG.genGifting}
                alt="The moment of giving — hands presenting a Jashika gift box tied with gold ribbon"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <p className="reveal font-display italic text-muted-foreground text-sm mt-4">
              The moment of giving — the reason we exist.
            </p>
            <div className="reveal img-zoom mt-8 shadow-[0_30px_70px_-30px_rgba(36,30,22,0.45)] hidden lg:block">
              <img
                src={IMG.genFestive}
                alt="Festive celebration table with a Jashika gift box among candlelight"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>

          {/* Occasions list as editorial index */}
          <div className="lg:col-span-7">
            <h2 className="reveal font-display text-3xl md:text-4xl mb-4">
              Whatever the moment,
              <br />
              <em className="text-[var(--gold-hover)]">arrive with meaning.</em>
            </h2>
            <p className="reveal text-muted-foreground text-sm max-w-lg mb-10">
              Bespoke packaging, customised ribbon accents and personalised message
              cards — tailored to the occasion, carried in your words.
            </p>
            <div>
              {OCCASIONS.map((o, i) => (
                <a
                  key={o.title}
                  href="#enquiry"
                  className="reveal group flex items-baseline gap-6 py-7 border-t border-border last:border-b hover:bg-card/60 transition-colors px-2 -mx-2"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="font-display italic text-2xl text-[var(--gold)]/60 w-10 shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl group-hover:text-[var(--gold-hover)] transition-colors">
                      {o.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1.5 max-w-md">{o.text}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[var(--gold-hover)] group-hover:translate-x-1 transition-all shrink-0 self-center" />
                </a>
              ))}
            </div>

            <div className="reveal mt-10 bg-[var(--espresso)] text-white p-8 lg:p-10">
              <p className="font-brand text-[0.6rem] tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
                Corporate &amp; Bulk Gifting
              </p>
              <h3 className="font-display text-2xl leading-snug">
                Clients forget hampers. They keep Jashika.
              </h3>
              <p className="text-white/70 text-sm mt-3 max-w-xl">
                Volume orders, branded message cards and bespoke presentation for
                executive gifting, events and festive seasons. Our concierge
                responds within 24 hours.
              </p>
              <a href="#enquiry" className="btn-gold mt-7 !py-3.5">
                Start a Corporate Enquiry <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
