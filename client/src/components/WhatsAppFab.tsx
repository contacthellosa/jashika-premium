/* Gilded Ritual — brand-gold concierge floating button (replaces off-brand green bubble) */
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with our WhatsApp concierge"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[var(--espresso)] text-white pl-4 pr-5 py-3.5 shadow-[0_16px_40px_-12px_rgba(36,30,22,0.6)] hover:bg-[var(--gold-hover)] transition-colors duration-300"
    >
      <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
      <span className="font-brand text-[0.6rem] tracking-[0.24em] uppercase">Concierge</span>
    </a>
  );
}
