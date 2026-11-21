export type Fact = {
  label: string
  value: string
  source: string
  href: string
  date: string
}

export const WOODSIDE =
  'https://www.woodsidehomes.com/findmyhome/nevada/las-vegas/capella-at-sunstone'
export const SUNSTONE = 'https://sunstonelv.com/'
export const HOA = 'https://www.sunstonemca.com/home/'
export const SHEA =
  'https://www.sheahomes.com/new-homes/nevada/las-vegas-area/las-vegas/trilogy-sunstone'
export const LENNAR =
  'https://www.lennar.com/new-homes/nevada/las-vegas/las-vegas/sunstone/axel'
export const LYRA_NOTE =
  'https://www.nevadarealestategroup.com/blog/woodside-oakley-lyra-sunstone-northwest-las-vegas'
export const DRIVES =
  'https://www.nevadarealestategroup.com/north-las-vegas/sunstone'
export const HOMES_GUIDE =
  'https://www.homes.com/local-guide/las-vegas-nv/sunstone-neighborhood/'

/** Retrieval date for the live Woodside Capella inventory used on this site. */
export const CAPELLA_CHECKED = 'November 20, 2026'

/**
 * Former Capella lot URLs that no longer appear on Woodside’s Capella page.
 * Keep permanent redirects so Google consolidates signals to /move-in-ready.
 */
export const retiredCapellaSlugs = [
  'taurus-lot-12',
  'virgo-lot-13',
  'virgo-lot-14',
] as const

/** `planSlug` matches `plans[].slug` so a listed home links to its plan page. */
export const capellaHomes = [
  {
    slug: 'aries-lot-63',
    plan: 'Aries',
    planSlug: 'aries',
    lot: 'Lot 63',
    price: '$560,950',
    beds: '3',
    baths: '2.5',
    sqft: '1,970',
    garage: '2',
  },
  {
    slug: 'aries-lot-4',
    plan: 'Aries',
    planSlug: 'aries',
    lot: 'Lot 4',
    price: '$578,950',
    beds: 'Not on card',
    baths: '2.5',
    sqft: '1,970',
    garage: '2',
  },
  {
    slug: 'virgo-lot-15',
    plan: 'Virgo',
    planSlug: 'virgo',
    lot: 'Lot 15',
    price: '$641,950',
    beds: 'Not on card',
    baths: '3.5',
    sqft: '2,295',
    garage: '2',
  },
] as const

export const CAPELLA_PRICE_LOW = capellaHomes[0].price
export const CAPELLA_PRICE_HIGH = capellaHomes[capellaHomes.length - 1].price
export const CAPELLA_HOME_COUNT = capellaHomes.length

export function capellaInventorySentence(): string {
  return `On ${CAPELLA_CHECKED}, Woodside listed ${CAPELLA_HOME_COUNT} Capella homes from ${CAPELLA_PRICE_LOW} to ${CAPELLA_PRICE_HIGH}.`
}

export const plans = [
  {
    slug: 'aries',
    name: 'Aries Plan 1',
    beds: '3 bedrooms',
    baths: '2.5 baths',
    sqft: '1,970 sq ft',
    stories: '1 story',
    garage: '2-car garage',
    notes: 'Covered patio, flex room, and an extended-garage option.',
    href: 'https://www.woodsidehomes.com/findmyhome/nevada/las-vegas/capella-at-sunstone/aries-1048a',
  },
  {
    slug: 'taurus',
    name: 'Taurus Plan 2',
    beds: '3 bedrooms',
    baths: '2.5 baths',
    sqft: '2,093 sq ft',
    stories: '1 story',
    garage: '2-car garage',
    notes: 'Covered patio, flex room, and an extended-garage option.',
    href: 'https://www.woodsidehomes.com/findmyhome/nevada/las-vegas/capella-at-sunstone/taurus-1049a',
  },
  {
    slug: 'virgo',
    name: 'Virgo Plan 3',
    beds: '3–4 bedrooms',
    baths: '3.5 baths',
    sqft: '2,295 sq ft',
    stories: '1 story',
    garage: '2-car garage',
    notes: 'Covered patio, optional fourth bedroom, and an extended-garage option.',
    href: 'https://www.woodsidehomes.com/findmyhome/nevada/las-vegas/capella-at-sunstone/virgo-1050a',
  },
] as const

export type CollectionRow = {
  name: string
  builder: string
  sqft: string
  beds: string
  band: string
  path: string | null
}

/** Bands are labels on sunstonelv.com, retrieved October 12, 2026. */
export const collectionRows: CollectionRow[] = [
  {
    name: 'Capella',
    builder: 'Woodside',
    sqft: '1,970–2,295',
    beds: '3–4',
    band: 'From the $500s',
    path: '/communities/capella',
  },
  {
    name: 'Alia',
    builder: 'Lennar',
    sqft: '2,012–4,240',
    beds: '3–5',
    band: 'From the $600s',
    path: '/communities/alia',
  },
  {
    name: 'Asher',
    builder: 'Lennar',
    sqft: '1,248–1,724',
    beds: '3',
    band: 'Mid $400s',
    path: null,
  },
  {
    name: 'Lyra One',
    builder: 'Woodside',
    sqft: '2,488–2,752',
    beds: '3–5',
    band: 'From the $500s',
    path: '/communities/lyra',
  },
  {
    name: 'Lyra Two',
    builder: 'Woodside',
    sqft: '3,027–3,428',
    beds: '4–6',
    band: 'High $600s',
    path: '/communities/lyra',
  },
  {
    name: 'Axel',
    builder: 'Lennar',
    sqft: '1,807–1,927',
    beds: '2–4',
    band: 'High $300s',
    path: '/communities/axel',
  },
  {
    name: 'Solstice',
    builder: 'Not named',
    sqft: '2,640–3,280',
    beds: '4–5',
    band: 'From the $600s',
    path: null,
  },
  {
    name: 'Resort',
    builder: 'Shea',
    sqft: '1,342–1,678',
    beds: '2',
    band: 'From the $300s',
    path: null,
  },
  {
    name: 'Freedom 35',
    builder: 'Shea',
    sqft: '1,507–1,811',
    beds: '2–4',
    band: 'Mid $400s',
    path: null,
  },
  {
    name: 'Freedom 40',
    builder: 'Shea',
    sqft: '1,622–2,061',
    beds: '2–3',
    band: 'From the $500s',
    path: null,
  },
  {
    name: 'Freedom 50',
    builder: 'Shea',
    sqft: '2,041–2,579',
    beds: '2–3',
    band: 'High $500s',
    path: null,
  },
  {
    name: 'Modern',
    builder: 'Shea',
    sqft: '1,312–2,758',
    beds: '2–3',
    band: 'From the $300s',
    path: null,
  },
]

export type CollectionGuide = {
  slug: string
  name: string
  title: string
  description: string
  path: string
  builder: string
  sentences: readonly string[]
  sourceLabel: string
  sourceHref: string
  ctaHref: string
  ctaLabel: string
  /** Pages on this site that cover the same collection in more depth. */
  related: readonly { label: string; href: string }[]
}

export const collectionGuides: readonly CollectionGuide[] = [
  {
    slug: 'capella',
    name: 'Capella',
    title: 'Capella at Sunstone Las Vegas | Woodside Homes',
    description: `Capella is Woodside’s single-story collection in Sunstone Las Vegas 89143. ${capellaInventorySentence()} Asking prices, not closed sales.`,
    path: '/communities/capella',
    builder: 'Woodside Homes',
    sentences: [
      'Capella is a Woodside collection inside Sunstone in Las Vegas, ZIP 89143.',
      'The plans are single story and run 1,970 to 2,295 square feet.',
      capellaInventorySentence(),
      'Those figures are builder asking prices, and they are not closed sales.',
      'Woodside labeled Capella a final opportunity and sells from 9361 Blue Vega Ave.',
    ],
    sourceLabel: `Woodside Capella page, retrieved ${CAPELLA_CHECKED}`,
    sourceHref: WOODSIDE,
    ctaHref: '/move-in-ready',
    ctaLabel: `See the ${CAPELLA_CHECKED} list`,
    related: [
      {
        label: 'Capella floor plans: Aries, Taurus, and Virgo',
        href: '/models',
      },
      {
        label: 'Capella homes Woodside listed now',
        href: '/move-in-ready',
      },
      { label: 'Woodside Homes at Sunstone', href: '/woodside' },
      { label: 'New homes in Sunstone by builder', href: '/new-construction' },
    ],
  },
  {
    slug: 'lyra',
    name: 'Lyra',
    title: 'Lyra at Sunstone Las Vegas | Woodside Homes',
    description:
      'Lyra is a Woodside collection in Sunstone Las Vegas 89143. Lyra One and Lyra Two square-foot bands were read on October 12, 2026.',
    path: '/communities/lyra',
    builder: 'Woodside Homes',
    sentences: [
      'Lyra is a Woodside collection inside the Sunstone master plan in Las Vegas, ZIP 89143.',
      'Lyra One runs 2,488 to 2,752 square feet with three to five bedrooms.',
      'Lyra Two runs 3,027 to 3,428 square feet with four to six bedrooms.',
      'The master-plan site labeled Lyra One from the $500s on October 12, 2026.',
      'That same page labeled Lyra Two in the high $600s.',
    ],
    sourceLabel: 'sunstonelv.com collection cards, retrieved October 12, 2026',
    sourceHref: SUNSTONE,
    ctaHref: '/contact',
    ctaLabel: 'Ask about Lyra',
    related: [
      { label: 'Lyra HOA quote in the buyer guide', href: '/buyers' },
      { label: 'Woodside Homes at Sunstone', href: '/woodside' },
      { label: 'New homes in Sunstone by builder', href: '/new-construction' },
    ],
  },
  {
    slug: 'axel',
    name: 'Axel',
    title: 'Axel at Sunstone Las Vegas | Lennar',
    description:
      'Axel is a Lennar collection in Sunstone Las Vegas 89143. Townhomes were listed from $383,990 to $462,565 on October 12, 2026.',
    path: '/communities/axel',
    builder: 'Lennar',
    sentences: [
      'Axel is a Lennar collection inside Sunstone in Las Vegas, ZIP 89143.',
      'Plans run 1,807 to 1,927 square feet with two to four bedrooms.',
      'Lennar listed Axel townhomes from $383,990 to $462,565 on October 12, 2026.',
      'That page showed an approximate monthly HOA of $210.',
    ],
    sourceLabel: 'Lennar Sunstone page, retrieved October 12, 2026',
    sourceHref: LENNAR,
    ctaHref: '/contact',
    ctaLabel: 'Ask about Axel',
    related: [
      { label: 'Axel HOA figure in the buyer guide', href: '/buyers' },
      { label: 'New homes in Sunstone by builder', href: '/new-construction' },
    ],
  },
  {
    slug: 'alia',
    name: 'Alia',
    title: 'Alia at Sunstone Las Vegas | Lennar',
    description:
      'Alia is a Lennar collection in Sunstone, Las Vegas 89143. Lennar listed Alia Estates from $862,990 on October 12, 2026.',
    path: '/communities/alia',
    builder: 'Lennar',
    sentences: [
      'Alia is a Lennar collection inside the Sunstone master plan in Las Vegas, ZIP 89143.',
      'Plans run 2,012 to 4,240 square feet with three to five bedrooms.',
      'The master-plan site labeled Alia from the $600s on October 12, 2026.',
      'Lennar listed Alia Estates from $862,990 on that same day.',
    ],
    sourceLabel: 'Lennar Sunstone page, retrieved October 12, 2026',
    sourceHref: LENNAR,
    ctaHref: '/contact',
    ctaLabel: 'Ask about Alia',
    related: [
      {
        label: 'Lennar prices in the market report',
        href: '/market-report',
      },
      { label: 'New homes in Sunstone by builder', href: '/new-construction' },
    ],
  },
]

export const featuredPlaces = [
  {
    name: 'Capella',
    builder: 'Woodside Homes',
    band: `Listed from ${CAPELLA_PRICE_LOW}`,
    path: '/communities/capella',
  },
  {
    name: 'Lyra',
    builder: 'Woodside Homes',
    band: 'From the $500s',
    path: '/communities/lyra',
  },
  {
    name: 'Axel',
    builder: 'Lennar',
    band: 'From $383,990',
    path: '/communities/axel',
  },
  {
    name: 'Alia',
    builder: 'Lennar',
    band: 'From $862,990',
    path: '/communities/alia',
  },
  {
    name: 'Trilogy',
    builder: 'Shea Homes',
    band: 'From $399,990',
    path: '/trilogy',
  },
]

/** Hyperlocal services unique to this Capella / Sunstone site. */
export const hyperlocalServices = [
  {
    slug: 'buyer-representation',
    name: 'Capella buyer representation',
    path: '/services#buyer-representation',
    summary:
      'Compare Woodside Capella lots against Lyra, Axel, Alia, and Trilogy with dated builder cards, not ZIP averages.',
  },
  {
    slug: 'seller-valuation',
    name: 'Sunstone seller valuation',
    path: '/services#seller-valuation',
    summary:
      'Price a Sunstone resale against the Capella asking list and other builder bands inside 89143.',
  },
  {
    slug: 'new-construction',
    name: 'New-construction walkthroughs',
    path: '/services#new-construction',
    summary:
      'Tour Capella with the Woodside sales office at 9361 Blue Vega Ave. and confirm options before you reserve.',
  },
  {
    slug: 'trilogy-55',
    name: 'Trilogy 55+ document review',
    path: '/services#trilogy-55',
    summary:
      'Read Shea’s 55+ rules for Trilogy Sunstone before you write, separate from Capella’s age policy.',
  },
] as const

export type AreaFaq = { question: string; answer: string }

export const sharedFaqs: AreaFaq[] = [
  {
    question: 'What are HOA fees in Capella at Sunstone?',
    answer: `Woodside did not print a Capella dues amount on ${CAPELLA_CHECKED}. The master association page also omitted a dollar figure. Ask for the current budget before you offer.`,
  },
  {
    question: 'How much are Capella at Sunstone homes?',
    answer: `${capellaInventorySentence()} Those figures are builder asking prices, and they are not closed sales.`,
  },
  {
    question: 'Is Sunstone a 55+ community?',
    answer:
      'Sunstone includes Trilogy, which Shea labels 55+. Woodside does not label Capella as 55+. Read the recorded rule for the neighborhood you tour.',
  },
  {
    question: 'Is Capella at Sunstone gated?',
    answer:
      'The master association says most Sunstone neighborhoods have private entry gates. That page does not name Capella’s gate. Confirm the entry on your tour.',
  },
  {
    question: 'Does Sunstone charge a SID or LID?',
    answer:
      'A September 28, 2026 Lyra article cites city SID 611 and SID 613. An October 7, 2026 district list did not name Sunstone. Check the parcel before you rely on either note.',
  },
  {
    question: 'How far is Sunstone from the Strip?',
    answer:
      'Off-peak routing on September 30, 2026 put Bellagio about 29 minutes away. Harry Reid International Airport was about 49 minutes. Peak traffic can add time.',
  },
  {
    question: 'Which builders are in the Sunstone master plan?',
    answer: `Sunstone’s site names Lennar, Shea Homes, Woodside Homes, and Richmond American Homes. Capella is a Woodside neighborhood. Capella inventory checked ${CAPELLA_CHECKED}.`,
  },
  {
    question: 'How fast are Sunstone homes selling?',
    answer: `A Sunstone-only days-on-market figure for the last 90 days was not in the sources checked ${CAPELLA_CHECKED}. Do not treat a ZIP 89143 average as a Sunstone number.`,
  },
  {
    question: 'Who represents buyers at Capella at Sunstone?',
    answer:
      'Dr. Jan Duffy, REALTOR®, works Capella at Sunstone and the Sunstone master plan from this site. Call (702) 766-7950 for a Capella tour or valuation.',
  },
]
