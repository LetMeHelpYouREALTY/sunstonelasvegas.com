import type { Metadata } from 'next'

import { SITE_URL } from '@/lib/site'

type PageMetaInput = {
  title: string
  description: string
  path: string
}

export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: 'Dr. Jan Duffy | Capella at Sunstone',
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
