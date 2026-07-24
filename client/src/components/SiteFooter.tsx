/* Gilded Ritual, espresso footer with nav, contact, legal dialogs */
import { useState } from "react";
import { Instagram } from "lucide-react";
import { IMG, CONTACT } from "@/lib/data";
import LegalDialog, { type LegalKey } from "@/components/LegalDialogs";

export default function SiteFooter() {
  const [legal, setLegal] = useState<LegalKey>(null);

  return (
    <footer className="bg-[var(--espresso)] text-white/80 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img src={IMG.logo} alt="Jashika emblem" className="h-14 w-14 object-contain brightness-[1.35]" />
              <span>
                <span className="block font-brand text-2xl tracking-[0.34em] text-white">JASHIKA</span>
                <span className="block font-brand text-[0.6rem] tracking-[0.2em] text-[#D4AF37] mt-1.5">
                  Maison of Gifting Rituals
                </span>
              </span>
            </div>
            <p className="text-sm text-white/60 mt-5 max-w-sm leading-relaxed">
              Unforgettable luxury gifting experiences. Crafted with care in the UK,
              made to give and to keep.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="font-brand text-[0.62rem] tracking-[0.28em] uppercase text-[#D4AF37] mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#collection" className="hover:text-[#D4AF37] transition-colors">The Collection</a></li>
              <li><a href="#refills" className="hover:text-[#D4AF37] transition-colors">Refills</a></li>
              <li><a href="#story" className="hover:text-[#D4AF37] transition-colors">Our Heritage</a></li>
              <li><a href="#gifting" className="hover:text-[#D4AF37] transition-colors">Gifting</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-brand text-[0.62rem] tracking-[0.28em] uppercase text-[#D4AF37] mb-4">Service</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#enquiry" className="hover:text-[#D4AF37] transition-colors">Bespoke Enquiry</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              <li>
                <button onClick={() => setLegal("delivery")} className="hover:text-[#D4AF37] transition-colors">
                  Delivery &amp; Returns
                </button>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-brand text-[0.62rem] tracking-[0.28em] uppercase text-[#D4AF37] mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  WhatsApp Concierge
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#D4AF37] transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Instagram className="h-3.5 w-3.5" /> {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7 text-xs text-white/50">
          <p>© 2026 Jashika Premium Gifting. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => setLegal("privacy")} className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setLegal("terms")} className="hover:text-[#D4AF37] transition-colors">
              Terms &amp; Conditions
            </button>
            <button onClick={() => setLegal("delivery")} className="hover:text-[#D4AF37] transition-colors">
              Delivery &amp; Returns
            </button>
          </div>
        </div>
      </div>
      <LegalDialog legal={legal} onClose={() => setLegal(null)} />
    </footer>
  );
}
