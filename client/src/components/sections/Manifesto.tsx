/* Maison of Moments — Chapter I: manifesto, centered editorial statement */

export default function Manifesto() {
  return (
    <section className="py-28 lg:py-36 overflow-hidden">
      <div className="container max-w-6xl">
        <div className="reveal flex items-center gap-6 mb-12">
          <span className="chapter-marker">Chapter I</span>
          <div className="gold-rule flex-1" />
          <span className="font-brand text-[0.6rem] tracking-[0.32em] uppercase text-muted-foreground">
            The Philosophy
          </span>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="reveal font-display text-3xl md:text-[3rem] leading-[1.25]">
            Anyone can send a present.
            <br />
            Very few can give <em className="text-[var(--gold-hover)]">an experience
            that stays.</em>
          </h2>
          <p className="reveal text-muted-foreground mt-8">
            Jashika exists for the moments that deserve more than ordinary — the
            milestone, the thank-you, the apology, the celebration. Each set is a
            complete ritual: hand-blended, sealed in glass made to be kept, and
            presented with the gravity the moment deserves.
          </p>
        </div>
        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 text-center">
          {[
            ["Given", "with intention — every set carries a personalised message in your words"],
            ["Kept", "for years — keepsake glass bottles remain on display long after"],
            ["Remembered", "always — the unboxing is designed as ceremony, not packaging"],
          ].map(([word, rest]) => (
            <div key={word}>
              <p className="font-display italic text-2xl text-[var(--gold-hover)]">{word}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{rest}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
