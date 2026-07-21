/* Maison of Moments — cinematic full-bleed hero: generated campaign image, sharp geometry, gifting-experience voice */
import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <img
        src={IMG.genHero}
        alt="Jashika luxury gift set opened to reveal keepsake glass bottles and gold-lined presentation"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* cinematic gradient for guaranteed text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#241E16]/78 via-[#241E16]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#241E16]/70 via-transparent to-transparent" />

      {/* vertical side caption — signature element */}
      <span className="vertical-caption !text-white/50 absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        Maison of Gifting Rituals · England
      </span>

      <div className="container relative z-10 pb-20 lg:pb-28 pt-44">
        <div className="max-w-2xl">
          <p className="eyebrow !text-[#D4AF37] mb-7">Jashika · Maison of Gifting Rituals</p>
          <h1 className="font-display text-white text-[2.6rem] md:text-6xl xl:text-[4.4rem] leading-[1.08]">
            You are not sending a gift.
            <br />
            <em className="text-[#D4AF37]">You are marking a moment.</em>
          </h1>
          <p className="font-display italic text-white/75 text-lg mt-8 max-w-md">
            Handcrafted in England. Kept for years.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-12">
            <a href="#collection" className="btn-gold">
              Discover the Collection <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#gifting"
              className="font-brand text-[0.72rem] tracking-[0.22em] uppercase text-white/80 hover:text-[#D4AF37] transition-colors underline underline-offset-8 decoration-[#D4AF37]/50"
            >
              Bespoke Gifting
            </a>
          </div>
          <p className="font-brand text-[0.6rem] tracking-[0.3em] uppercase text-white/50 mt-10">
            Gift sets from £36 · Complimentary personalised card
          </p>
        </div>
      </div>
    </section>
  );
}
