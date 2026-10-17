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
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#org` },
  }
}

export function buildWebPage(input: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${input.path}#webpage`,
    url: `${SITE_URL}${input.path}`,
    name: input.name,
    description: input.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#place` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.answer'],
    },
  }
}

export const placeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': `${SITE_URL}/#place`,
  name: `${MASTER_PLAN} master plan`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: AREA_ZIP,
    addressCountry: 'US',
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

export const entityGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_LOGO,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#org`,
      name: BROKERAGE_NAME,
      url: SITE_URL,
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: AGENT_NAME,
      url: `${SITE_URL}/about`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      identifier: AGENT_LICENSE,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      worksFor: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'RealEstateAgent',
      '@id': `${SITE_URL}/#agent`,
      name: AGENT_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: postalAddress,
      areaServed,
      identifier: AGENT_LICENSE,
      worksFor: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_LOGO,
      url: SITE_URL,
      image: `${SITE_URL}/images/about/dr-jan-duffy.webp`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: postalAddress,
      areaServed,
      parentOrganization: { '@id': `${SITE_URL}/#org` },
    },
  ],
}
