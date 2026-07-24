/* Gilded Ritual, enquiry: WhatsApp concierge + validated form that posts to the Jashika Google Form. */
import { useState } from "react";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/lib/data";

// Enquiry form → Google Forms (same flow as the original site).
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSey5C3qmY1KKu1XGEqZQFWlaf747zVQ1ULMVAr4orT88V6N8g/formResponse";
const GOOGLE_FORM_ENTRIES: Record<string, string> = {
  name: "entry.338156559",
  phone: "entry.379834478",
  email: "entry.1538286285",
  type: "entry.1235472603",
  message: "entry.773145666",
};

export default function Enquiry() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently drop bots.
    if (String(data.get("_gotcha") || "")) return;

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !phone || !email) {
      toast.error("Please complete your name, phone and email.");
      return;
    }

    setSending(true);
    const body = new FormData();
    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([field, entryId]) => {
      body.append(entryId, String(data.get(field) || ""));
    });

    // Google Forms sends no CORS headers, so we use no-cors: the submission is
    // still recorded, we just can't read the response.
    fetch(GOOGLE_FORM_ACTION, { method: "POST", mode: "no-cors", body })
      .then(() => {
        toast.success(
          "Thank you! We've received your enquiry and will be in touch within 24 hours.",
        );
        form.reset();
      })
      .catch(() => {
        toast.error(
          "Sorry, something went wrong. Please message us on WhatsApp instead.",
        );
      })
      .finally(() => setSending(false));
  };

  const inputCls =
    "w-full bg-background border border-input px-4 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--gold)] transition-colors";

  return (
    <section id="enquiry" className="bg-secondary py-24 lg:py-28">
      <div className="container">
        <div className="reveal max-w-2xl mb-14">
          <p className="eyebrow mb-5">Bespoke Enquiry</p>
          <h2 className="text-3xl md:text-4xl">Let us assist your gifting.</h2>
          <p className="text-muted-foreground mt-4">
            Planning a custom order, wedding favours or corporate gifting? Reach our
            concierge on WhatsApp for an instant reply, or send an enquiry below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-[var(--espresso)] text-white p-8 lg:p-9 flex-1"
            >
              <MessageCircle className="h-6 w-6 text-[#D4AF37]" />
              <h3 className="font-display text-xl mt-5">WhatsApp Concierge</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Chat directly with our team for immediate answers, quick customisation
                requests, or order support.
              </p>
              <span className="inline-flex items-center gap-2 mt-6 font-brand text-[0.62rem] tracking-[0.26em] uppercase text-[#D4AF37]">
                Chat on WhatsApp
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="reveal group bg-background border border-border p-8 lg:p-9"
            >
              <Mail className="h-6 w-6 text-[var(--gold)]" />
              <h3 className="font-display text-xl mt-5">Email the Concierge</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {CONTACT.email}, we respond within 24 hours.
              </p>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal lg:col-span-7 bg-background border border-border p-8 lg:p-10 grid gap-5"
          >
            {/* Honeypot: hidden from users, catches bots */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="font-brand text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground block mb-2">
                  Name *
                </label>
                <input id="name" name="name" required placeholder="Your full name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="phone" className="font-brand text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground block mb-2">
                  Phone / WhatsApp *
                </label>
                <input id="phone" name="phone" type="tel" required placeholder="+44 7000 000000" className={inputCls} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="font-brand text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground block mb-2">
                  Email Address *
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
              </div>
              <div>
                <label htmlFor="type" className="font-brand text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground block mb-2">
                  Enquiry Type
                </label>
                <select id="type" name="type" className={inputCls} defaultValue="Custom Bespoke Gift">
                  <option>Custom Bespoke Gift</option>
                  <option>Bulk / Corporate Order</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-brand text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about the occasion, dates, or bespoke requests..."
                className={inputCls}
              />
            </div>
            <button type="submit" disabled={sending} className="btn-gold justify-center sm:justify-self-start disabled:opacity-60">
              {sending ? "Preparing…" : "Send Enquiry"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
