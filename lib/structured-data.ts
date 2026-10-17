import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  SITE_LOGO,
  AREA_NAME,
  AREA_ZIP,
  BROKERAGE_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MASTER_PLAN,
  SITE_URL,
} from '@/lib/site'

export { SITE_URL }

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

const PERSON_ID = `${SITE_URL}/#person`

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

/**
 * The one Person entity for the agent. Every name, license, phone, and address
 * value comes from lib/site.ts. No sameAs: the repo holds no profile URL.
 */
const personEntity = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: AGENT_NAME,
  jobTitle: AGENT_CREDENTIAL,
  description: `${AGENT_CREDENTIAL}, Nevada license ${AGENT_LICENSE}, ${BROKERAGE_NAME}`,
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: postalAddress,
  worksFor: {
    '@type': 'Organization',
    name: BROKERAGE_NAME,
  },
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
  areaServed,
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
      '@id': PERSON_ID,
      name: AGENT_NAME,
      jobTitle: AGENT_CREDENTIAL,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: BROKERAGE_NAME,
    },
  }
}

/** ProfilePage for /about. The page is about one person tied to this site. */
export function buildProfilePage(input: { path: string; name: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}${input.path}#profilepage`,
    url: `${SITE_URL}${input.path}`,
    name: input.name,
    mainEntity: personEntity,
  }
}

export const placeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: AREA_NAME,
  address: postalAddress,
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
}

export const realEstateAgentJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_URL}/#realestateagent`,
  name: AGENT_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: postalAddress,
  areaServed,
  identifier: AGENT_LICENSE,
  worksFor: {
    '@type': 'Organization',
    name: BROKERAGE_NAME,
  },
  founder: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: AGENT_NAME,
    jobTitle: AGENT_CREDENTIAL,
    url: `${SITE_URL}/about`,
  },
}

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_LOGO,
  url: SITE_URL,
  image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: postalAddress,
  areaServed,
  parentOrganization: {
    '@type': 'Organization',
    name: BROKERAGE_NAME,
  },
}
