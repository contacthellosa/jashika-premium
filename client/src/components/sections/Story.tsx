/* Maison of Moments: Chapter IV: atelier band, sharp full-height split on espresso */
import { IMG } from "@/lib/data";

export default function Story() {
  return (
    <section id="story" className="bg-[var(--espresso)] text-white/90 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <img
            src={IMG.genAtelier}
            alt="Jashika atelier, artisan hands preparing a keepsake glass bottle by hand"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#241E16]/30 hidden lg:block" />
        </div>
        <div className="flex items-center py-20 lg:py-28">
          <div className="px-6 sm:px-12 lg:px-16 xl:px-24 max-w-2xl">
            <div className="reveal flex items-center gap-6 mb-10">
              <span className="chapter-marker !text-[#D4AF37]">Chapter IV</span>
              <div className="gold-rule flex-1" />
              <span className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-white/50">
                The Atelier
              </span>
            </div>
            <h2 className="reveal font-display text-3xl md:text-4xl text-white leading-[1.2]">
              No production line.
              <br />
              <em className="text-[#D4AF37]">A pair of hands, and time.</em>
            </h2>
            <p className="reveal mt-7 text-white/75">
              Every Jashika set is assembled by hand in England, in small batches -
              blended, weighed, sealed, ribboned and signed off one at a time.
              Drawing on rich Indian heritage and contemporary European restraint,
              we make gifts the way they were made when giving meant something.
            </p>
            <div className="reveal grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/12">
              {[
                ["Blended", "by hand, in small UK batches"],
                ["Sealed", "in keepsake glass, airtight"],
                ["Signed off", "one set at a time"],
              ].map(([a, b]) => (
                <div key={a}>
                  <p className="font-display italic text-[#D4AF37]">{a}</p>
                  <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
