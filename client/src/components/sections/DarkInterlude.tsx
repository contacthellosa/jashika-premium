/* Maison of Moments, cinematic dark interlude: full-bleed pour image with a single line (Dior-style pause) */
import { IMG } from "@/lib/data";

export default function DarkInterlude() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <img
        src={IMG.genDark}
        alt="Amber tea poured into porcelain against deep espresso shadow, the Jashika evening ritual"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#241E16]/80 via-[#241E16]/30 to-transparent" />
      <div className="container relative z-10 flex justify-end">
        <div className="reveal max-w-xl text-right py-24">
          <p className="font-brand text-[0.62rem] tracking-[0.34em] uppercase text-[#D4AF37] mb-6">
            The Experience
          </p>
          <p className="font-display text-white text-3xl md:text-[2.6rem] leading-[1.3]">
            Some gifts are opened once.
            <br />
            <em className="text-[#D4AF37]">This one is opened every evening.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
