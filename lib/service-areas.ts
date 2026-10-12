export type ServiceAreaSlug =
  | 'capella-at-sunstone'
  | 'sunstone-master-plan'
  | 'summerlin'
  | 'skye-canyon'
  | 'northwest-las-vegas'

export type ServiceArea = {
  slug: ServiceAreaSlug
  name: string
  headline: string
  description: string
  keyHighlights: string[]
  communityStats: {
    label: string
    value: string
  }[]
  buyerInsights: string[]
  conciergeNotes: string[]
  tourCta: {
    label: string
    mailSubject: string
  }
  localDetails: {
    label: string
    value: string
  }[]
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'capella-at-sunstone',
    name: 'Capella at Sunstone',
    headline: 'Sunstone’s single-story showpiece with curated Woodside designs',
    description:
      'Capella delivers three single-story floor plans engineered for flexible living, energy efficiency, and indoor-outdoor flow. Enjoy mountain-view backdrops, trail access, and a ready-made community vibe minutes from Mt. Charleston.',
    keyHighlights: [
      'Single-story plans from 1,970 to 2,295 square feet with optional multi-gen suites.',
      'Energy-efficient construction, smart-home wiring, and designer-curated finish packages.',
      'Lifestyle-driven amenities including parks, splash pads, and neighborhood events.',
    ],
    communityStats: [
      { label: 'Starting price', value: '$585,990' },
      { label: 'Move-in ready inventory', value: 'Aries Plan 1 lots 49 & 93' },
      { label: 'HOA dues', value: '$75 / month (Sunstone master HOA)' },
      { label: 'Build timeline', value: '6 months average from contract to close' },
    ],
    buyerInsights: [
      'Ideal for buyers seeking one-level living with modern finishes and low maintenance.',
      'Flex rooms accommodate home offices, playrooms, or fitness spaces without adding square footage.',
      'Demand is strong among relocation and second-home buyers—tour quickly for best homesite selection.',
    ],
    conciergeNotes: [
      'Design studio appointments fill fast—pre-plan structural upgrades with Dr. Duffy before reservation.',
      'Ask about appliance packages and landscape credits for quick move-ins.',
      'Weekly construction updates include photos, milestone reminders, and punch-list prep.',
    ],
    tourCta: {
      label: 'Book a Capella model tour',
      mailSubject: 'Capella at Sunstone Model Tour Request',
    },
    localDetails: [
      { label: 'Zip code', value: '89143' },
      { label: 'Commute', value: '20 min to Downtown Summerlin • 25 min to the Strip' },
      { label: 'Outdoor access', value: 'Floyd Lamb Park + Mt. Charleston trailheads' },
    ],
  },
  {
    slug: 'sunstone-master-plan',
    name: 'Sunstone Master Plan',
    headline: 'Connected desert living with miles of trails and emerging amenities',
    description:
      'Sunstone blends desert-modern architecture with community programming, future retail, and expansive outdoor recreation. Settle into a Northwest Las Vegas enclave that celebrates active lifestyles and neighborhood connection.',
    keyHighlights: [
      'Planned community center with co-working, fitness, and event spaces.',
      '15+ miles of trails linking pocket parks, dog runs, and play areas.',
      'Convenient access to US-95, Skye Canyon marketplace, and Centennial Hills services.',
    ],
    communityStats: [
      { label: 'Primary builders', value: 'Woodside Homes, Toll Brothers, Richmond American' },
      { label: 'Planned residences', value: 'Approximately 3,300 homes' },
      { label: 'Amenity completion', value: 'Trail network complete; community center in planning' },
      { label: 'School zoning', value: 'Clark County SD – Henry & Evelyn Bozarth ES, Edmundo Escobedo MS, Centennial HS' },
    ],
    buyerInsights: [
      'Sunstone appeals to outdoor enthusiasts seeking new construction with trail access.',
      'Early buyers benefit from appreciation as amenities deliver and retail pad sites fill.',
      'Home sizes range widely—compare Capella’s single-story designs with multi-story options nearby.',
    ],
    conciergeNotes: [
      'Schedule a neighborhood drive that covers current villages plus future development pads.',
      'Review HOA documents for design guidelines, landscaping requirements, and upcoming amenities.',
      'Coordinate with Dr. Duffy for Sunstone event calendars and builder release schedules.',
    ],
    tourCta: {
      label: 'Schedule a Sunstone discovery tour',
      mailSubject: 'Sunstone Master Plan Tour Request',
    },
    localDetails: [
      { label: 'Zip code', value: '89143' },
      { label: 'Retail nearby', value: 'Skye Canyon Marketplace, Centennial Center' },
      { label: 'Outdoor perks', value: 'Sunstone Loop Trail, Gilcrease Orchard 10 minutes' },
    ],
  },
  {
    slug: 'summerlin',
    name: 'Summerlin',
    headline: 'Las Vegas’ premier master plan with resort-level amenities and top-tier schools',
    description:
      'Summerlin spans 22,500+ acres on the western rim of Las Vegas. Experience upscale villages, golf courses, Downtown Summerlin retail, and proximity to Red Rock Canyon—ideal for buyers seeking luxury convenience.',
    keyHighlights: [
      'Diverse neighborhoods including The Ridges, Redpoint, and Stonebridge.',
      'Access to TPC Summerlin golf, Red Rock Casino Resort, and Downtown Summerlin shopping.',
      'Award-winning parks, trail system, and top-ranked Clark County schools.',
    ],
    communityStats: [
      { label: 'Villages', value: '26+ established villages' },
      { label: 'Recreation centers', value: '10+ community pools and fitness centers' },
      { label: 'Median single-family price', value: '$800K+' },
      { label: 'HOA range', value: '$50–$200 / month (village + master)' },
    ],
    buyerInsights: [
      'Luxury and resale inventory moves quickly—secure pre-approval and be tour-ready.',
      'Consider CDD and SID balances when comparing new versus resale homes.',
      'Earnest money and due diligence timelines vary; Dr. Duffy negotiates buyer-friendly terms.',
    ],
    conciergeNotes: [
      'Plan a half-day tour covering favorite villages and lifestyle hubs.',
      'Coordinate golf, tennis, or club previews when evaluating membership amenities.',
      'Use Dr. Duffy’s vendor network for moving services, designers, and school introductions.',
    ],
    tourCta: {
      label: 'Plan a Summerlin lifestyle tour',
      mailSubject: 'Summerlin Discovery Tour Request',
    },
    localDetails: [
      { label: 'Zip codes', value: '89135 • 89138 • 89144' },
      { label: 'Commute', value: '20 min to Harry Reid Int’l via Summerlin Pkwy/I-215' },
      { label: 'Lifestyle hubs', value: 'Downtown Summerlin, City National Arena, Red Rock Canyon' },
    ],
  },
  {
    slug: 'skye-canyon',
    name: 'Skye Canyon',
    headline: 'Adventure-forward community with built-in fitness and social programming',
    description:
      'Skye Canyon bridges city and mountain life with a community lodge, fitness center, and frequent resident events. Its trail system and easy access to Mt. Charleston attract outdoor enthusiasts and young families.',
    keyHighlights: [
      'Skye Center clubhouse with fitness, pool, and Skye Bistro cafè.',
      'Skye Canyon Marketplace for daily conveniences and local hangouts.',
      'Five neighborhood parks, dog areas, and sports courts.',
    ],
    communityStats: [
      { label: 'Elevation', value: '3,000+ feet above sea level' },
      { label: 'Home styles', value: 'Townhomes to luxury single-family' },
      { label: 'HOA dues', value: '$49 / month master + neighborhood fees' },
      { label: 'Travel time', value: '25 minutes to The Strip, 40 minutes to Mt. Charleston' },
    ],
    buyerInsights: [
      'Appeals to buyers wanting cooler temps and outdoor amenities without sacrificing commute times.',
      'New releases often include quick move-in options—compare incentives versus Capella.',
      'Expect active social calendars—perfect for buyers who value community engagement.',
    ],
    conciergeNotes: [
      'Schedule tours around resident events to experience the community energy firsthand.',
      'Review Skye Canyon “Skye Pass” program for local discounts and partner perks.',
      'Coordinate lender lock strategies with potential rate buy-down incentives.',
    ],
    tourCta: {
      label: 'Schedule a Skye Canyon tour',
      mailSubject: 'Skye Canyon Tour Request',
    },
    localDetails: [
      { label: 'Zip code', value: '89166' },
      { label: 'Commute', value: '30 min to the Strip • 45 min to Lee Canyon lifts' },
      { label: 'Community perks', value: 'Skye Fit, Skye Center, resident trail network' },
    ],
  },
  {
    slug: 'northwest-las-vegas',
    name: 'Northwest Las Vegas',
    headline: 'Established neighborhoods with larger lots, gated enclaves, and suburban convenience',
    description:
      'Northwest Las Vegas spans Centennial Hills to Tule Springs, offering gated communities, equestrian zoning, and new retail growth. Ideal for move-up buyers seeking space and proximity to medical and business hubs.',
    keyHighlights: [
      'Diverse housing from custom estates to new construction and age-qualified communities.',
      'Close to Centennial Hills Hospital, VA Medical Center, and major employment corridors.',
      'Easy access to US-95 and 215 Beltway for commuting across the valley.',
    ],
    communityStats: [
      { label: 'Average lot size', value: 'Up to 1/3 acre in select enclaves' },
      { label: 'Median price', value: '$550K (single-family, 2024 YTD)' },
      { label: 'New development hubs', value: 'Tule Springs, Valley Vista, Skye Hills' },
      { label: 'School zoning', value: 'Varies—Edith Garehime ES, Anthony Saville MS, Shadow Ridge HS' },
    ],
    buyerInsights: [
      'Expect competition for homes with RV parking, casitas, or oversized garages.',
      'Consider long-term appreciation with the pending 215 Beltway expansion and retail growth.',
      'Blend resale and new-build comparisons to balance timeline and customization.',
    ],
    conciergeNotes: [
      'Dr. Duffy curates tour routes that include established neighborhoods and new-build hotspots.',
      'Explore future development maps to understand growth trajectories.',
      'Coordinate with lenders familiar with jumbo financing and renovation loans if needed.',
    ],
    tourCta: {
      label: 'Book a Northwest Las Vegas preview',
      mailSubject: 'Northwest Las Vegas Tour Request',
    },
    localDetails: [
      { label: 'Zip codes', value: '89131 • 89130 • 89149' },
      { label: 'Medical corridor', value: 'Centennial Hills Hospital + VA Medical Center within 10 min' },
      { label: 'Growth focus', value: 'Villages at Tule Springs, Skye Hills retail expansion' },
    ],
  },
]

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((area) => area.slug === slug)
}

