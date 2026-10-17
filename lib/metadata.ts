import type { Metadata } from 'next'

import { SITE_LOGO, SITE_URL } from '@/lib/site'

type PageMetaInput = {
  title: string
  description: string
  path: string
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
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
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
