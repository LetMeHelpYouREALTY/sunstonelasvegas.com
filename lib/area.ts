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

export const capellaHomes = [
  { slug: 'aries-lot-63', plan: 'Aries', lot: 'Lot 63', price: '$599,950', beds: '3', baths: '2.5', sqft: '1,970', garage: '2' },
  { slug: 'taurus-lot-12', plan: 'Taurus', lot: 'Lot 12', price: '$608,950', beds: '3', baths: '2.5', sqft: '2,093', garage: '2' },
  { slug: 'aries-lot-4', plan: 'Aries', lot: 'Lot 4', price: '$616,950', beds: 'Not on card', baths: '2.5', sqft: '1,970', garage: '2' },
  { slug: 'virgo-lot-13', plan: 'Virgo', lot: 'Lot 13', price: '$657,950', beds: 'Not on card', baths: '3.5', sqft: '2,295', garage: '2' },
  { slug: 'virgo-lot-14', plan: 'Virgo', lot: 'Lot 14', price: '$659,950', beds: 'Not on card', baths: '3.5', sqft: '2,295', garage: '2' },
  { slug: 'virgo-lot-15', plan: 'Virgo', lot: 'Lot 15', price: '$679,950', beds: 'Not on card', baths: '3.5', sqft: '2,295', garage: '2' },
] as const

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
    band: 'From the $600s',
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
}

export const collectionGuides: readonly CollectionGuide[] = [
  {
    slug: 'capella',
    name: 'Capella',
    title: 'Capella at Sunstone Las Vegas',
    description:
      'Capella is a Woodside collection in Sunstone Las Vegas 89143. On October 12, 2026, six homes were listed from $599,950 to $679,950.',
    path: '/communities/capella',
    builder: 'Woodside Homes',
    sentences: [
      'Capella is a Woodside collection inside Sunstone in ZIP 89143.',
      'The plans are single story and run 1,970 to 2,295 square feet.',
      'On October 12, 2026, Woodside listed six homes from $599,950 to $679,950.',
      'Those figures are builder asking prices, and they are not closed sales.',
    ],
    sourceLabel: 'Woodside Capella page, retrieved October 12, 2026',
    sourceHref: WOODSIDE,
    ctaHref: '/move-in-ready',
    ctaLabel: 'See the October 12 list',
  },
  {
    slug: 'lyra',
    name: 'Lyra',
    title: 'Lyra at Sunstone Las Vegas',
    description:
      'Lyra is a Woodside collection in Sunstone Las Vegas 89143. Lyra One and Lyra Two square-foot bands were read on October 12, 2026.',
    path: '/communities/lyra',
    builder: 'Woodside Homes',
    sentences: [
      'Lyra is a Woodside collection inside the Sunstone master plan.',
      'Lyra One runs 2,488 to 2,752 square feet with three to five bedrooms.',
      'Lyra Two runs 3,027 to 3,428 square feet with four to six bedrooms.',
      'The master-plan site labeled Lyra One from the $500s on October 12, 2026.',
      'That same page labeled Lyra Two in the high $600s.',
    ],
    sourceLabel: 'sunstonelv.com collection cards, retrieved October 12, 2026',
    sourceHref: SUNSTONE,
    ctaHref: '/contact',
    ctaLabel: 'Ask about Lyra',
  },
  {
    slug: 'axel',
    name: 'Axel',
    title: 'Axel at Sunstone Las Vegas',
    description:
      'Axel is a Lennar collection in Sunstone Las Vegas 89143. Townhomes were listed from $383,990 to $462,565 on October 12, 2026.',
    path: '/communities/axel',
    builder: 'Lennar',
    sentences: [
      'Axel is a Lennar collection inside Sunstone in ZIP 89143.',
      'Plans run 1,807 to 1,927 square feet with two to four bedrooms.',
      'Lennar listed Axel townhomes from $383,990 to $462,565 on October 12, 2026.',
      'That page showed an approximate monthly HOA of $210.',
    ],
    sourceLabel: 'Lennar Sunstone page, retrieved October 12, 2026',
    sourceHref: LENNAR,
    ctaHref: '/contact',
    ctaLabel: 'Ask about Axel',
  },
  {
    slug: 'alia',
    name: 'Alia',
    title: 'Alia at Sunstone Las Vegas',
    description:
      'Alia is a Lennar collection in Sunstone, Las Vegas 89143. Lennar listed Alia Estates from $862,990 on October 12, 2026.',
    path: '/communities/alia',
    builder: 'Lennar',
    sentences: [
      'Alia is a Lennar collection inside the Sunstone master plan.',
      'Plans run 2,012 to 4,240 square feet with three to five bedrooms.',
      'The master-plan site labeled Alia from the $600s on October 12, 2026.',
      'Lennar listed Alia Estates from $862,990 on that same day.',
    ],
    sourceLabel: 'Lennar Sunstone page, retrieved October 12, 2026',
    sourceHref: LENNAR,
    ctaHref: '/contact',
    ctaLabel: 'Ask about Alia',
  },
]

export const featuredPlaces = [
  {
    name: 'Capella',
    builder: 'Woodside Homes',
    band: 'Listed from $599,950',
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

export type AreaFaq = { question: string; answer: string }

export const sharedFaqs: AreaFaq[] = [
  {
    question: 'What are HOA fees in Capella at Sunstone?',
    answer:
      'Woodside did not print a Capella dues amount on October 12, 2026. The master association page also omitted a dollar figure. Ask for the current budget before you offer.',
  },
  {
    question: 'How much are Capella at Sunstone homes?',
    answer:
      'On October 12, 2026, Woodside listed six homes from $599,950 to $679,950. Those figures are builder asking prices, and they are not closed sales.',
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
    answer:
      'Sunstone’s site names Lennar, Shea Homes, Woodside Homes, and Richmond American Homes. Capella is a Woodside neighborhood. Retrieved October 12, 2026.',
  },
  {
    question: 'How fast are Sunstone homes selling?',
    answer:
      'A Sunstone-only days-on-market figure for the last 90 days was not in the sources checked October 12, 2026. Do not treat a ZIP 89143 average as a Sunstone number.',
  },
]
