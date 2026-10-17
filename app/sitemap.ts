import type { MetadataRoute } from 'next'

import { capellaHomes, collectionGuides, plans } from '@/lib/area'
import { SITE_URL } from '@/lib/site'

const UPDATED_OCTOBER_13 = new Date('2026-10-13')
const SOURCED_OCTOBER_12 = new Date('2026-10-12')

const staticDates: Record<string, Date> = {
  '/': UPDATED_OCTOBER_13,
  '/communities': UPDATED_OCTOBER_13,
  '/local-guide': UPDATED_OCTOBER_13,
  '/about': UPDATED_OCTOBER_13,
  '/contact': UPDATED_OCTOBER_13,
  '/buyers': SOURCED_OCTOBER_12,
  '/sell': SOURCED_OCTOBER_12,
  '/new-construction': SOURCED_OCTOBER_12,
  '/trilogy': SOURCED_OCTOBER_12,
  '/market-report': SOURCED_OCTOBER_12,
  '/models': SOURCED_OCTOBER_12,
  '/move-in-ready': SOURCED_OCTOBER_12,
  '/faqs': SOURCED_OCTOBER_12,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.keys(staticDates)
  const dynamicRoutes = [
    ...plans.map((plan) => `/models/${plan.slug}`),
    ...capellaHomes.map((home) => `/move-in-ready/${home.slug}`),
    ...collectionGuides.map((guide) => guide.path),
  ]

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: staticDates[path] ?? SOURCED_OCTOBER_12,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
