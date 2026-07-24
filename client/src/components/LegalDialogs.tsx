/* Gilded Ritual, legal content in dialogs (single-page constraint), covering UK distance-selling info */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CONTACT } from "@/lib/data";

export type LegalKey = "privacy" | "terms" | "delivery" | null;

const CONTENT: Record<Exclude<LegalKey, null>, { title: string; body: React.ReactNode }> = {
  delivery: {
    title: "Delivery & Returns",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          <strong className="text-foreground">Delivery.</strong> Every Jashika set is
          handcrafted and prepared to order. Standard UK delivery takes 7–8 days from
          the date of order to ensure flawless presentation and peak freshness.
          Delivery costs, where applicable, are shown at checkout before payment.
        </p>
        <p>
          <strong className="text-foreground">Your right to cancel.</strong> Under the
          Consumer Contracts Regulations, you may cancel your order up to 14 days
          after the day your goods are delivered, without giving a reason. To
          exercise this right, contact us by email or WhatsApp with your order
          details. We will refund you within 14 days of receiving the goods back.
        </p>
        <p>
          <strong className="text-foreground">Returns.</strong> Please return items
          unused, in their original presentation packaging. Loose-leaf tea that has
          been unsealed cannot be returned for hygiene reasons, unless faulty.
        </p>
        <p>
          <strong className="text-foreground">Faulty or damaged items.</strong> If
          your gift arrives damaged, contact us within 48 hours with photographs and
          we will replace it or refund you in full.
        </p>
      </div>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Jashika Premium Gifting ("we") respects your privacy. We collect only the
          personal information you provide through our enquiry form, newsletter
          signup, or purchases (name, contact details, delivery address, and order
          details) and use it solely to fulfil orders, respond to enquiries, and -
          with your consent, send occasional updates.
        </p>
        <p>
          Payments are processed securely by Stripe; we never see or store your card
          details. We do not sell or share your data with third parties for
          marketing. Data is retained only as long as necessary for the purposes
          above and for legal record-keeping.
        </p>
        <p>
          Under UK GDPR, you have the right to access, correct, or request deletion
          of your personal data at any time. To exercise these rights, contact us at{" "}
          {CONTACT.email}.
        </p>
      </div>
    ),
  },
  terms: {
    title: "Terms & Conditions",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          These terms apply to purchases made from Jashika Premium Gifting, a
          UK-based business. By placing an order you agree to these terms.
        </p>
        <p>
          <strong className="text-foreground">Prices &amp; payment.</strong> All
          prices are shown in pounds sterling and include applicable taxes. Payment
          is taken securely at the time of order via Stripe.
        </p>
        <p>
          <strong className="text-foreground">Products.</strong> Each set is
          hand-blended in small batches; minor variations in presentation are a
          natural part of handcrafted goods. Product images are illustrative.
        </p>
        <p>
          <strong className="text-foreground">Delivery &amp; cancellation.</strong>{" "}
          Please see our Delivery &amp; Returns policy for timescales and your
          statutory 14-day right to cancel.
        </p>
        <p>
          <strong className="text-foreground">Contact.</strong> For any questions
          regarding these terms, contact {CONTACT.email} or message our WhatsApp
          concierge. These terms are governed by the laws of England and Wales.
        </p>
      </div>
    ),
  },
};

export default function LegalDialog({
  legal,
  onClose,
}: {
  legal: LegalKey;
  onClose: () => void;
}) {
  if (!legal) return null;
  const c = CONTENT[legal];
  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg bg-background max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-normal">
            {c.title}
          </DialogTitle>
        </DialogHeader>
        {c.body}
      </DialogContent>
    </Dialog>
  );
}
