import type { MetadataRoute } from 'next'

import { capellaHomes, collectionGuides, plans } from '@/lib/area'
import { SITE_URL } from '@/lib/site'

/**
 * Indexable URLs only (canonical SITE_URL). Retired redirect routes
 * (/buyers-guide, /financing, /service-areas*) stay out of the sitemap.
 * lastmod is a content-revision date — not build time — so Google trusts it.
 */
const UPDATED = new Date('2026-11-21')

const staticRoutes: Array<{
  path: string
  lastModified: Date
  priority: number
}> = [
  { path: '/', lastModified: UPDATED, priority: 1 },
  { path: '/services', lastModified: UPDATED, priority: 0.9 },
  { path: '/woodside', lastModified: UPDATED, priority: 0.9 },
  { path: '/communities', lastModified: UPDATED, priority: 0.9 },
  { path: '/move-in-ready', lastModified: UPDATED, priority: 0.9 },
  { path: '/models', lastModified: UPDATED, priority: 0.8 },
  { path: '/buyers', lastModified: UPDATED, priority: 0.8 },
  { path: '/sell', lastModified: UPDATED, priority: 0.8 },
  { path: '/new-construction', lastModified: UPDATED, priority: 0.8 },
  { path: '/touring', lastModified: UPDATED, priority: 0.8 },
  { path: '/contact', lastModified: UPDATED, priority: 0.8 },
  { path: '/about', lastModified: UPDATED, priority: 0.7 },
  { path: '/amenities', lastModified: UPDATED, priority: 0.7 },
  { path: '/hoa', lastModified: UPDATED, priority: 0.7 },
  { path: '/faqs', lastModified: UPDATED, priority: 0.7 },
  { path: '/local-guide', lastModified: UPDATED, priority: 0.7 },
  { path: '/market-report', lastModified: UPDATED, priority: 0.7 },
  { path: '/trilogy', lastModified: UPDATED, priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...plans.map((plan) => ({
      url: `${SITE_URL}/models/${plan.slug}`,
      lastModified: UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...capellaHomes.map((home) => ({
      url: `${SITE_URL}/move-in-ready/${home.slug}`,
      lastModified: UPDATED,
      changeFrequency: 'daily' as const,
      priority: 0.85,
    })),
    ...collectionGuides.map((guide) => ({
      url: `${SITE_URL}${guide.path}`,
      lastModified: UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ]

  return [
    ...staticRoutes.map(({ path, lastModified, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority,
    })),
    ...dynamicRoutes,
  ]
}
