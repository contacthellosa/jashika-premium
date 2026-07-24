/* Gilded Ritual: Jashika single landing page composition */
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import QuickShop from "@/components/QuickShop";
import TrustStrip from "@/components/sections/TrustStrip";
import Collection from "@/components/sections/Collection";
import DarkInterlude from "@/components/sections/DarkInterlude";
import Refills from "@/components/sections/Refills";
import Craft from "@/components/sections/Craft";
import Story from "@/components/sections/Story";
import Occasions from "@/components/sections/Occasions";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Enquiry from "@/components/sections/Enquiry";
import { useRevealOnScroll } from "@/hooks/useReveal";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Manifesto />
        <Collection />
        <DarkInterlude />
        <Refills />
        <Story />
        <Occasions />
        <Craft />
        <Testimonials />
        <Faq />
        <Enquiry />
      </main>
      <QuickShop />
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
