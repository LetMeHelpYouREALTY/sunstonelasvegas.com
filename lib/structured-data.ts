import {
  AGENT_LICENSE,
  AGENT_NAME,
  SITE_LOGO,
  AREA_NAME,
  AREA_ZIP,
  BROKERAGE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MASTER_PLAN,
  SALES_OFFICE_ADDRESS,
  SITE_URL,
} from '@/lib/site'

export { SITE_URL }

const AGENT_ID = `${SITE_URL}/#realestateagent`
const WEBSITE_ID = `${SITE_URL}/#website`
const PLACE_ID = `${SITE_URL}/#capella-place`

const salesOfficeMapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  SALES_OFFICE_ADDRESS,
)}`

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
    author: {
      '@type': 'Person',
      name: AGENT_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: BROKERAGE_NAME,
    },
  }
}

const placeNode = {
  '@type': 'Place',
  '@id': PLACE_ID,
  name: AREA_NAME,
  description:
    'Woodside Homes new construction collection inside the Sunstone master plan, northwest Las Vegas, Nevada.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9361 Blue Vega Ave',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: AREA_ZIP,
    addressCountry: 'US',
  },
  hasMap: salesOfficeMapUrl,
  containedInPlace: {
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
} as const satisfies Record<string, unknown>

/** Standalone Place JSON-LD (prefer siteGraphJsonLd in layout). */
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

const agentNode = {
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  '@id': AGENT_ID,
  name: AGENT_NAME,
  alternateName: SITE_LOGO,
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
  worksFor: {
    '@type': 'Organization',
    name: BROKERAGE_NAME,
  },
} as const satisfies Record<string, unknown>

const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_LOGO,
  description:
    'Sunstone Las Vegas homes for sale in ZIP 89143 with buyer and seller guidance from Dr. Jan Duffy.',
  inLanguage: 'en-US',
  publisher: { '@id': AGENT_ID },
  about: { '@id': PLACE_ID },
} as const satisfies Record<string, unknown>

/** Single linked graph for SEO, local GEO, and answer-engine entity resolution. */
export const siteGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [websiteNode, agentNode, placeNode],
} as const satisfies Record<string, unknown>

export const realEstateAgentJsonLd = siteGraphJsonLd
export const localBusinessJsonLd = siteGraphJsonLd

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
  }
}
