/* Gilded Ritual: FAQ accordion, copy corrected to British English */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export default function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-28">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 reveal">
          <p className="eyebrow mb-5">Questions</p>
          <h2 className="text-3xl md:text-4xl">Considered answers.</h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-xs">
            Anything else? Our concierge replies within 24 hours on WhatsApp or by
            email.
          </p>
        </div>
        <div className="lg:col-span-8 reveal">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-left text-base lg:text-lg hover:no-underline hover:text-[var(--gold-hover)] py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
