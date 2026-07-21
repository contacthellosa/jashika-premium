/**
 * Jashika brand data — sourced verbatim from jashika.co.uk (Jul 2026).
 * Prices, Stripe links, contact details and testimonials must stay exact.
 */

export const IMG = {
  logo: "/images/logo.webp",
  hero2: "/images/hero-2.webp",
  hero3: "/images/hero-3.webp",
  noor: "/images/noor.webp",
  neelam: "/images/neelam.webp",
  triveni: "/images/triveni.webp",
  triRasa: "/images/tri-rasa.webp",
  chaarRatna: "/images/chaar_ratna.webp",
  refillSaffron: "/images/refill_saffron_rose.webp",
  refillJasmine: "/images/refill_himalayan_jasmine.webp",
  refillOolong: "/images/refill_royal_blue_oolong.webp",
  refillChai: "/images/refill_midnight_vanilla_chai.webp",
  storyCraft: "/images/story-craft.webp",
  // Generated luxury campaign imagery
  genHero: "/images/gen-hero-branded.webp",
  genGifting: "/images/gen-gifting-hands.webp",
  genDark: "/images/gen-dark-texture.webp",
  genAtelier: "/images/gen-atelier-craft.webp",
  genFlatlay: "/images/gen-occasions-flatlay.webp",
  genFestive: "/images/gen-festive-scene.webp",
} as const;

export const CONTACT = {
  whatsapp: "https://wa.me/447721234922",
  email: "contact.hellosa@gmail.com",
  instagram: "https://www.instagram.com/jashikauk",
  instagramHandle: "@jashikauk",
} as const;

export interface Product {
  index: string;
  slug: string;
  name: string;
  fullName: string;
  tier: string;
  badge?: string;
  price: number;
  buyUrl: string;
  buyLabel: string;
  image: string;
  story: string;
  tastingNotes?: string;
  includes: string[];
  note?: string;
}

export const PRODUCTS: Product[] = [
  {
    index: "01",
    slug: "noor",
    name: "Noor",
    fullName: "Noor — The Himalayan Jasmine Ritual",
    tier: "The Ritual Sets",
    price: 51,
    buyUrl: "https://buy.stripe.com/bJeaEWfyS1JQd4Kd6W9oc00",
    buyLabel: "Buy Noor",
    image: IMG.noor,
    story:
      "Named for radiant light. A gift of stillness — high-altitude jasmine gathered at peak bloom, sealed in glass, given to someone who deserves a quieter hour.",
    tastingNotes: "Soft jasmine blossom, honeyed notes, clean finish.",
    includes: [
      "1 Keepsake glass bottle of loose-leaf blend",
      "Refill pouch of the same blend",
      "Stainless-steel infuser",
      "Personalised message card",
      "Brewing guide & luxury presentation box",
    ],
  },
  {
    index: "02",
    slug: "neelam",
    name: "Neelam",
    fullName: "Neelam — The Royal Blue Oolong Ritual",
    tier: "The Ritual Sets",
    price: 51,
    buyUrl: "https://buy.stripe.com/cNi28q5Yi74a5Ci3wm9oc01",
    buyLabel: "Buy Neelam",
    image: IMG.neelam,
    story:
      "“Sapphire.” A gift of depth — oolong slowly roasted over charcoal, made for the person whose taste needs no explanation.",
    tastingNotes: "Orchid and stone fruit, creamy body, mellow finish.",
    includes: [
      "1 Keepsake glass bottle of loose-leaf blend",
      "Refill pouch of the same blend",
      "Stainless-steel infuser",
      "Personalised message card",
      "Brewing guide & luxury presentation box",
    ],
  },
  {
    index: "03",
    slug: "triveni",
    name: "Triveni",
    fullName: "Triveni — A Trio of Three Blends",
    tier: "The Trio Collections",
    badge: "Most Loved",
    price: 36,
    buyUrl: "https://buy.stripe.com/4gM6oG3QagEK7Kqgj89oc02",
    buyLabel: "Buy Triveni",
    image: IMG.triveni,
    story:
      "Where three journeys meet. Saffron Rose warmth, Himalayan Jasmine serenity, Royal Blue Oolong refinement — one gesture, three worlds to return to.",
    includes: [
      "3 Keepsake glass bottles of loose-leaf blends",
      "Thoughtfully combined flavour profiles",
      "Brewing guide & luxury presentation box",
    ],
    note: "Optional stainless-steel infuser add-on available at checkout (+£15)",
  },
  {
    index: "04",
    slug: "tri-rasa",
    name: "Tri-Rasa",
    fullName: "Tri-Rasa — A Trio of Three Essences",
    tier: "The Trio Collections",
    price: 36,
    buyUrl: "https://buy.stripe.com/cNi14m2M66062q66Iy9oc03",
    buyLabel: "Buy Tri-Rasa",
    image: IMG.triRasa,
    story:
      "Three moods, one exquisite gesture. Royal Blue Oolong for morning clarity, Midnight Vanilla Chai for evening calm, Saffron Rose for everything between.",
    includes: [
      "3 Keepsake glass bottles of loose-leaf blends",
      "Thoughtfully combined flavour profiles",
      "Brewing guide & luxury presentation box",
    ],
    note: "Optional stainless-steel infuser add-on available at checkout (+£15)",
  },
  {
    index: "05",
    slug: "chaar-ratna",
    name: "Chaar Ratna",
    fullName: "Chaar Ratna — The Complete Collection",
    tier: "The Grand Set",
    badge: "The Ultimate Gift",
    price: 58,
    buyUrl: "https://buy.stripe.com/8x2aEW1I2cou0hYaYO9oc04",
    buyLabel: "Buy the Grand Set",
    image: IMG.chaarRatna,
    story:
      "Four jewels. The complete Jashika expression — every signature blend in keepsake glass, presented in a deluxe rigid box. For the moment that outranks all others.",
    includes: [
      "All 4 signature blends in keepsake bottles",
      "Personalised message card & brewing guide",
      "Deluxe rigid keepsake gift presentation box",
    ],
  },
];

export interface Refill {
  name: string;
  price: number;
  buyUrl: string;
  image: string;
}

export const REFILLS: Refill[] = [
  {
    name: "Saffron Rose",
    price: 10,
    buyUrl: "https://buy.stripe.com/8x2aEWgCWdsy1m29UK9oc05",
    image: IMG.refillSaffron,
  },
  {
    name: "Himalayan Jasmine",
    price: 10,
    buyUrl: "https://buy.stripe.com/cNiaEW86qagmd4K9UK9oc06",
    image: IMG.refillJasmine,
  },
  {
    name: "Royal Blue Oolong",
    price: 10,
    buyUrl: "https://buy.stripe.com/00wbJ0gCWcouggWd6W9oc07",
    image: IMG.refillOolong,
  },
  {
    name: "Midnight Vanilla Chai",
    price: 10,
    buyUrl: "https://buy.stripe.com/6oU3cueuOewCfcS3wm9oc08",
    image: IMG.refillChai,
  },
];

/** Testimonials carried over verbatim from the live jashika.co.uk site. */
export const TESTIMONIALS = [
  {
    quote:
      "Gifted the Triveni set to my mother for her milestone birthday. She was genuinely moved by the presentation. The glass bottles are now proudly displayed on her counter.",
    name: "Priya S.",
    location: "London, UK",
  },
  {
    quote:
      "Ordered Tri-Rasa sets for our executive team end-of-year gifting. The attention to detail and packaging felt exceptionally high-end. Everyone asked where they were from.",
    name: "James M.",
    location: "Manchester, UK",
  },
  {
    quote:
      "Noor has become my signature gift for weddings and hostesses. The experience from opening the box to enjoying the ritual is unmatched.",
    name: "Aisha K.",
    location: "Birmingham, UK",
  },
];

export const FAQS = [
  {
    q: "What makes a Jashika set different from a standard gift?",
    a: "We craft complete sensory rituals, not simple tea tins. Each blend is loose-leaf, hand-blended in small batches in the UK, and encased in reusable keepsake glass bottles designed to be kept long after the tea is enjoyed.",
  },
  {
    q: "Do the Trio Collections include an infuser?",
    a: "Our Trio Collections feature three curated blends in keepsake glass bottles housed in a luxury presentation box. You can seamlessly add our stainless-steel infuser as a £15 upgrade during checkout.",
  },
  {
    q: "How do refills work?",
    a: "In line with our philosophy of longevity, we offer eco-friendly refill pouches for every signature blend (£10 each). You can easily top up your keepsake glass bottles while minimising waste.",
  },
  {
    q: "Can I customise a gift set for a wedding or corporate event?",
    a: "Absolutely. We provide bespoke packaging, customised ribbon accents, and personalised card messages for weddings, corporate clients, and special events. Reach out via our enquiry form or WhatsApp to discuss your vision.",
  },
  {
    q: "How long do the blends stay fresh in the glass bottles?",
    a: "Our airtight keepsake glass bottles preserve essential oils and natural aromatics for up to 12–18 months when stored out of direct sunlight in a cool place.",
  },
  {
    q: "What are your UK shipping timelines?",
    a: "Every set is handcrafted and prepared to order. Standard UK delivery takes 7–8 days to ensure flawless presentation and peak freshness.",
  },
];

export const OCCASIONS = [
  {
    title: "Weddings",
    text: "Bespoke favours and hostess gifts with customised ribbon accents and personalised cards.",
    image: IMG.genFlatlay,
  },
  {
    title: "Corporate Gratitude",
    text: "Elevated client and team gifting, in bulk, with your message carried on every card.",
    image: IMG.hero2,
  },
  {
    title: "Birthdays & Anniversaries",
    text: "A keepsake that remains on display long after the last cup is poured.",
    image: IMG.hero3,
  },
  {
    title: "Festive Celebrations",
    text: "Diwali, Christmas and seasonal moments, wrapped in gold-lined ceremony.",
    image: IMG.storyCraft,
  },
];
