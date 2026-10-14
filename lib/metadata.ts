import type { Metadata } from 'next'

import { SITE_LOGO, SITE_URL } from '@/lib/site'

type PageMetaInput = {
  title: string
  description: string
  path: string
}

export const indexableRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

const hiddenRobots: Metadata['robots'] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
}

export function pageMeta({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: indexableRobots,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_LOGO,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

/** Metadata for a slug that will render the real 404. */
export function notFoundMeta({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: hiddenRobots,
  }
}
