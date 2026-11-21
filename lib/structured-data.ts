import {
  CAPELLA_CHECKED,
  CAPELLA_HOME_COUNT,
  CAPELLA_PRICE_HIGH,
  CAPELLA_PRICE_LOW,
  capellaHomes,
  hyperlocalServices,
} from '@/lib/area'
import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  AREA_NAME,
  AREA_ZIP,
  BROKERAGE_NAME,
  BUSINESS_HOURS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MASTER_PLAN,
  PRIMARY_KEYWORDS,
  SITE_BRAND,
  SITE_LOGO,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site'

type CapellaListedHome = (typeof capellaHomes)[number]

export { SITE_URL }

const AGENT_ID = `${SITE_URL}/#agent`
const WEBSITE_ID = `${SITE_URL}/#website`
const PLACE_ID = `${SITE_URL}/#place`
const CAPELLA_PLACE_ID = `${SITE_URL}/#capella`
const ORG_ID = `${SITE_URL}/#org`
const PERSON_ID = `${SITE_URL}/#person`
const BUSINESS_ID = `${SITE_URL}/#business`

export type BreadcrumbItem = {
  name: string
  path: string
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '10249 Celestial Pole St',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: AREA_ZIP,
  addressCountry: 'US',
}

const geo = {
  '@type': 'GeoCoordinates',
  latitude: 36.2825,
  longitude: -115.287,
}

const openingHoursSpecification = BUSINESS_HOURS.map((row) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: row.days,
  opens: row.opens,
  closes: row.closes,
}))

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function buildFaqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildArticle(input: {
  headline: string
  description: string
  path: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    image: [`${SITE_URL}/opengraph-image`],
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    about: [{ '@id': PLACE_ID }, { '@id': CAPELLA_PLACE_ID }],
    keywords: PRIMARY_KEYWORDS.join(', '),
  }
}

/** WebPage + speakable for AEO; keywords for GEO topical clarity. */
export function buildWebPage(path: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    keywords: PRIMARY_KEYWORDS.join(', '),
    isPartOf: { '@id': WEBSITE_ID },
    about: [{ '@id': PLACE_ID }, { '@id': CAPELLA_PLACE_ID }],
    primaryImageOfPage: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.answer', 'h1', 'h2'],
    },
    author: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
  }
}

export function buildProfilePage(path: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}${path}#profilepage`,
    url: `${SITE_URL}${path}`,
    name,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
  }
}

/** Service catalog for hyperlocal Capella / Sunstone offerings. */
export function buildServiceList() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sunstone Woodside Homes services by Dr. Jan Duffy',
    numberOfItems: hyperlocalServices.length,
    itemListElement: hyperlocalServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.summary,
        url: `${SITE_URL}${service.path}`,
        provider: { '@id': AGENT_ID },
        areaServed: [{ '@id': CAPELLA_PLACE_ID }, { '@id': PLACE_ID }],
      },
    })),
  }
}

const placeNode = {
  '@type': 'Place',
  '@id': PLACE_ID,
  name: `${MASTER_PLAN} master plan`,
  description:
    'Northwest Las Vegas master plan in ZIP 89143 with about 3,650 planned homes across ten neighborhoods.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: AREA_ZIP,
    addressCountry: 'US',
  },
  geo,
} as const satisfies Record<string, unknown>

export const placeJsonLd = {
  '@context': 'https://schema.org',
  ...placeNode,
}

const areaServed = [
  {
    '@type': 'Place',
    '@id': CAPELLA_PLACE_ID,
    name: AREA_NAME,
    description:
      'Woodside Homes single-story collection inside Sunstone, Las Vegas 89143.',
    address: postalAddress,
    geo,
  },
  {
    '@type': 'Place',
    name: 'Sunstone Woodside Homes',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: AREA_ZIP,
      addressCountry: 'US',
    },
  },
  placeNode,
]

export const entityGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_LOGO,
      alternateName: [
        SITE_BRAND,
        'Sunstone Woodside Homes',
        'Capella at Sunstone by Dr. Jan Duffy',
      ],
      description: `${SITE_BRAND} — ${SITE_TAGLINE}. Capella at Sunstone and Sunstone Woodside Homes guidance in Las Vegas ZIP ${AREA_ZIP}.`,
      inLanguage: 'en-US',
      keywords: PRIMARY_KEYWORDS.join(', '),
      publisher: { '@id': BUSINESS_ID },
      about: [{ '@id': PLACE_ID }, { '@id': CAPELLA_PLACE_ID }],
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: BROKERAGE_NAME,
      url: SITE_URL,
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: AGENT_NAME,
      jobTitle: AGENT_CREDENTIAL,
      description: `${AGENT_CREDENTIAL}, Nevada license ${AGENT_LICENSE}, ${BROKERAGE_NAME}. Capella at Sunstone and Sunstone Woodside Homes specialist.`,
      url: `${SITE_URL}/about`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: postalAddress,
      identifier: AGENT_LICENSE,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      worksFor: { '@id': ORG_ID },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: `Nevada real estate license ${AGENT_LICENSE}`,
      },
      knowsAbout: [
        ...PRIMARY_KEYWORDS,
        `${MASTER_PLAN} master plan, Las Vegas, NV ${AREA_ZIP}`,
        'Trilogy Sunstone 55+ rules',
        'New construction in Sunstone',
      ],
    },
    {
      '@type': 'RealEstateAgent',
      '@id': AGENT_ID,
      name: AGENT_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: postalAddress,
      areaServed,
      identifier: AGENT_LICENSE,
      priceRange: `${CAPELLA_PRICE_LOW}–${CAPELLA_PRICE_HIGH}`,
      knowsAbout: [...PRIMARY_KEYWORDS, 'New construction buyer representation'],
      worksFor: { '@id': ORG_ID },
      founder: { '@id': PERSON_ID },
      openingHoursSpecification,
    },
    {
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      '@id': BUSINESS_ID,
      name: SITE_BRAND,
      alternateName: SITE_LOGO,
      description: `${SITE_TAGLINE}. Hyperlocal Capella at Sunstone and Sunstone Woodside Homes representation in Las Vegas ${AREA_ZIP}.`,
      url: SITE_URL,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      logo: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: postalAddress,
      geo,
      areaServed,
      parentOrganization: { '@id': ORG_ID },
      employee: { '@id': PERSON_ID },
      openingHoursSpecification,
      priceRange: `${CAPELLA_PRICE_LOW}–${CAPELLA_PRICE_HIGH}`,
      hasMap: 'https://www.google.com/maps/search/?api=1&query=10249+Celestial+Pole+St+Las+Vegas+NV+89143',
    },
  ],
}

function parseUsdPrice(priceLabel: string): number {
  const digits = priceLabel.replace(/[^0-9]/g, '')
  return Number.parseInt(digits, 10)
}

export function buildCapellaInventoryList() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Capella at Sunstone homes listed by Woodside (${CAPELLA_CHECKED})`,
    description: `Builder asking prices for ${CAPELLA_HOME_COUNT} Capella lots on Woodside’s community page—not MLS or closed sales.`,
    numberOfItems: capellaHomes.length,
    itemListElement: capellaHomes.map((home, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${home.plan} ${home.lot}`,
      url: `${SITE_URL}/move-in-ready/${home.slug}`,
    })),
  }
}

export function buildCapellaListedHomeOffer(
  home: CapellaListedHome,
  path: string,
) {
  const sqft = Number.parseInt(home.sqft.replace(/[^0-9]/g, ''), 10)
  const bedrooms =
    home.beds === 'Not on card' ? undefined : Number.parseInt(home.beds, 10)

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `${home.plan} ${home.lot}`,
    url: `${SITE_URL}${path}`,
    price: parseUsdPrice(home.price),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': AGENT_ID },
    offeredBy: {
      '@type': 'Organization',
      name: 'Woodside Homes',
      url: 'https://www.woodsidehomes.com/findmyhome/nevada/las-vegas/capella-at-sunstone',
    },
    itemOffered: {
      '@type': 'SingleFamilyResidence',
      name: `Capella at Sunstone ${home.plan} ${home.lot}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: AREA_ZIP,
        addressCountry: 'US',
      },
      floorSize: {
        '@type': 'QuantitativeValue',
        value: sqft,
        unitCode: 'FTK',
      },
      ...(bedrooms ? { numberOfRooms: bedrooms } : {}),
    },
  }
}
