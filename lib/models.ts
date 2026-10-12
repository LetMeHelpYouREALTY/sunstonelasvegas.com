import { CONTACT_EMAIL } from './site'

export type ModelSlug = 'aries' | 'taurus' | 'virgo'

export type ModelSpec = {
  slug: ModelSlug
  name: string
  headline: string
  description: string
  /** Builder-sourced starting price when published on Woodside Homes (optional per plan). */
  priceFrom?: string
  size: string
  beds: string
  baths: string
  garage: string
  outdoor: string
  highlights: string[]
  lifestyle: string[]
  brochureUrl?: string
}

export const models: ModelSpec[] = [
  {
    slug: 'aries',
    name: 'Aries Plan 1',
    headline: 'Open-concept living with flexible space for work or play',
    description:
      'The Aries Plan 1 brings Sunstone flair to a single-story layout, pairing a bright great room with a generous kitchen island and a flex suite that can morph into a study, hobby zone, or lounge.',
    priceFrom: '$585,990',
    size: '1,970 Sq Ft',
    beds: '3 Bedrooms',
    baths: '2.5 Baths',
    garage: '2-Car Garage',
    outdoor: 'Covered patio with optional outdoor kitchen rough-in',
    highlights: [
      'Expansive kitchen island anchored by a walk-in pantry and included appliances.',
      'Retreat-worthy primary suite with dual vanities and oversized shower.',
      'Dedicated flex room ideal for a den, home office, or gaming zone.',
      'Energy-efficient construction tailored for Las Vegas summers.',
    ],
    lifestyle: [
      'Perfect for up-sizing families needing distinct kid and adult hangouts.',
      'Works beautifully for remote workers who crave separation of spaces.',
      'Low-maintenance footprint keeps weekend schedules free for adventure.',
    ],
  },
  {
    slug: 'taurus',
    name: 'Taurus Plan 2',
    headline: 'Room to gather with multi-gen and entertaining options',
    description:
      'The Taurus Plan 2 stretches out with an expansive great room, a culinary-forward kitchen, and an optional multi-gen suite that keeps guests close by with privacy intact.',
    size: '2,093 Sq Ft',
    beds: '3 Bedrooms + Flex Suite',
    baths: '2.5 Baths',
    garage: '2-Car Garage',
    outdoor: 'Extended patio with sliding glass wall upgrade available',
    highlights: [
      'Statement kitchen with chef’s appliances, drop zone, and command-center island.',
      'Multi-gen suite option with private bath for live-in family or guests.',
      'Vaulted volume ceiling in the great room delivers dramatic natural light.',
      'Smart-home ready wiring with energy monitoring and security pre-wire.',
    ],
    lifestyle: [
      'Ideal for families welcoming parents, college students, or extended stays.',
      'Hosts who love dinner parties and game nights will appreciate the flow.',
      'Seamless indoor-outdoor connection suits Sunstone’s desert evenings.',
    ],
  },
  {
    slug: 'virgo',
    name: 'Virgo Plan 3',
    headline: 'Luxury primary retreat with spa bath and bonus lounge',
    description:
      'The Virgo Plan 3 elevates single-level living with an optional fourth bedroom, a media-ready retreat, and a spa-inspired primary suite anchored by dual walk-in closets.',
    size: '2,295 Sq Ft',
    beds: '3–4 Bedrooms',
    baths: '3.5 Baths',
    garage: '2-Car Garage',
    outdoor: 'Expansive patio with optional fireplace and sliding glass wall',
    highlights: [
      'Primary ensuite with soaking tub, dual closets, and designer finishes.',
      'Secondary bedrooms each feature private baths for ultimate privacy.',
      'Bonus retreat space flexes into a media room, gym, or homework hub.',
      'Oversized laundry and drop zone keep daily life organized with ease.',
    ],
    lifestyle: [
      'Great for move-up buyers wanting luxury finishes without stairs.',
      'Balances privacy and community with en-suite bedrooms and shared retreat.',
      'Outdoor entertaining is effortless thanks to the covered patio expansion.',
    ],
    brochureUrl: `mailto:${CONTACT_EMAIL}?subject=Virgo%20Plan%203%20Brochure%20Request`,
  },
]

export function getModelBySlug(slug: string) {
  return models.find((model) => model.slug === slug)
}

