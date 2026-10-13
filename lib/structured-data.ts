import {
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
