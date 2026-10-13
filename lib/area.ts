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
