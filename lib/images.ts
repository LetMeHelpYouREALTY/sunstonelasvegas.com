/**
 * Editorial photos generated for this Capella / Sunstone site.
 * Each file matches a primary H1 (or section H2) and is illustrative only —
 * not a specific MLS listing photo or builder marketing asset.
 */
export const pageImages = {
  home: {
    src: '/images/home/capella-at-sunstone-homes-for-sale.webp',
    alt: 'Single-story desert-modern home at Capella at Sunstone with Spring Mountains beyond',
    caption: 'Illustrative Capella at Sunstone exterior, northwest Las Vegas 89143',
  },
  sell: {
    src: '/images/sell/sell-my-sunstone-home.webp',
    alt: 'Polished single-story Sunstone home exterior ready for a seller valuation',
    caption: 'Illustrative Sunstone seller curb appeal in ZIP 89143',
  },
  buyers: {
    src: '/images/buyers/buy-in-sunstone.webp',
    alt: 'Gated Sunstone street of new single-story homes with mountain views',
    caption: 'Illustrative Sunstone buyer streetscape in northwest Las Vegas',
  },
  communities: {
    src: '/images/communities/sunstone-neighborhoods.webp',
    alt: 'Sunstone neighborhoods with trails, parks, and desert residential streets',
    caption: 'Illustrative Sunstone master-plan overview',
  },
  newConstruction: {
    src: '/images/new-construction/new-homes-in-sunstone.webp',
    alt: 'New-construction single-story homes under desert light in Sunstone',
    caption: 'Illustrative new homes in the Sunstone master plan',
  },
  trilogy: {
    src: '/images/trilogy/trilogy-sunstone-55-rules.webp',
    alt: 'Resort-style clubhouse courtyard and pool at a 55-plus Sunstone community',
    caption: 'Illustrative Trilogy Sunstone resort-club atmosphere',
  },
  marketReport: {
    src: '/images/market-report/sunstone-market-report.webp',
    alt: 'Quiet Sunstone residential street of comparable new single-story homes',
    caption: 'Illustrative inventory street for Sunstone market notes',
  },
  models: {
    src: '/images/models/capella-floor-plans.webp',
    alt: 'Covered patio and rear elevation of a Capella single-story plan at dusk',
    caption: 'Illustrative Capella covered-patio elevation',
  },
  modelsInterior: {
    src: '/images/models/capella-open-concept-interior.webp',
    alt: 'Open-concept Capella-style interior with tall ceilings and flex-room doors',
    caption: 'Illustrative Capella open-concept interior',
  },
  moveInReady: {
    src: '/images/move-in-ready/capella-homes-woodside-listed.webp',
    alt: 'Finished Capella move-in-ready single-story home with desert landscaping',
    caption: 'Illustrative Woodside Capella finished home',
  },
  localGuide: {
    src: '/images/local-guide/sunstone-local-guide.webp',
    alt: 'Sunstone multi-use trail and park path with mountain views',
    caption: 'Illustrative Sunstone parks and trails',
  },
  amenities: {
    src: '/images/amenities/sunstone-amenities.webp',
    alt: 'Sunstone community park path with desert open space and mountains',
    caption: 'Illustrative Sunstone amenities and open space',
  },
  services: {
    src: '/images/services/sunstone-services.webp',
    alt: 'Welcoming Capella model-home entry for buyer and seller consultations',
    caption: 'Illustrative Capella services entry',
  },
  woodside: {
    src: '/images/woodside/woodside-at-sunstone.webp',
    alt: 'Overhead view of a Woodside single-story Capella home and private yard',
    caption: 'Illustrative Woodside Homes Capella lot',
  },
  touring: {
    src: '/images/touring/capella-touring.webp',
    alt: 'Approach to a Capella model home for a scheduled Sunstone tour',
    caption: 'Illustrative Capella touring approach',
  },
  contact: {
    src: '/images/contact/contact-capella-sunstone.webp',
    alt: 'Desert residential street near Capella at Sunstone in Las Vegas 89143',
    caption: 'Illustrative Capella contact area streetscape',
  },
} as const

export type PageImageKey = keyof typeof pageImages
