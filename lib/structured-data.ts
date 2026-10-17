import { capellaHomes } from '@/lib/area'
import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  SITE_LOGO,
  AREA_NAME,
  AREA_ZIP,
  BROKERAGE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MASTER_PLAN,
  SITE_URL,
} from '@/lib/site'

type CapellaListedHome = (typeof capellaHomes)[number]

export { SITE_URL }

const AGENT_ID = `${SITE_URL}/#agent`
const WEBSITE_ID = `${SITE_URL}/#website`
const PLACE_ID = `${SITE_URL}/#place`
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
  }
}

export function buildWebPage(path: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PLACE_ID },
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.answer'],
    },
  }
}

/**
 * ProfilePage for /about. Its mainEntity is the sitewide Person node from
 * entityGraphJsonLd, so the page is about one person tied to this site.
 */
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

const placeNode = {
  '@type': 'Place',
  '@id': PLACE_ID,
  name: `${MASTER_PLAN} master plan`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: AREA_ZIP,
    addressCountry: 'US',
  },
} as const satisfies Record<string, unknown>

/** Standalone Place JSON-LD for the Sunstone master plan. */
export const placeJsonLd = {
  '@context': 'https://schema.org',
  ...placeNode,
}

const areaServed = [
  {
    '@type': 'Place',
    name: AREA_NAME,
    address: postalAddress,
  },
  {
    '@type': 'Place',
    name: `${MASTER_PLAN} master plan`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: AREA_ZIP,
      addressCountry: 'US',
    },
  },
]

export const entityGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_LOGO,
      description:
        'Sunstone Las Vegas homes for sale in ZIP 89143 with buyer and seller guidance from Dr. Jan Duffy.',
      inLanguage: 'en-US',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: BROKERAGE_NAME,
      url: SITE_URL,
    },
    {
      // No sameAs: the repo holds no verified profile URL for the agent.
      '@type': 'Person',
      '@id': PERSON_ID,
      name: AGENT_NAME,
      jobTitle: AGENT_CREDENTIAL,
      description: `${AGENT_CREDENTIAL}, Nevada license ${AGENT_LICENSE}, ${BROKERAGE_NAME}`,
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
        `${MASTER_PLAN} master plan, Las Vegas, NV ${AREA_ZIP}`,
        AREA_NAME,
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
      knowsAbout: [
        'Sunstone master plan Las Vegas',
        'Capella at Sunstone Woodside Homes',
        'New construction buyer representation',
      ],
      worksFor: { '@id': ORG_ID },
      founder: { '@id': PERSON_ID },
    },
    {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: SITE_LOGO,
      url: SITE_URL,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: postalAddress,
      areaServed,
      parentOrganization: { '@id': ORG_ID },
    },
  ],
}

function parseUsdPrice(priceLabel: string): number {
  const digits = priceLabel.replace(/[^0-9]/g, '')
  return Number.parseInt(digits, 10)
}

/** Index of Woodside Capella quick-move-in pages (AEO / rich results). */
export function buildCapellaInventoryList() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Capella at Sunstone homes listed by Woodside (October 12, 2026)',
    description:
      'Builder asking prices for six Capella lots on Woodside’s community page—not MLS or closed sales.',
    numberOfItems: capellaHomes.length,
    itemListElement: capellaHomes.map((home, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${home.plan} ${home.lot}`,
      url: `${SITE_URL}/move-in-ready/${home.slug}`,
    })),
  }
}

/** Builder asking-price record for one Capella lot page. */
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
