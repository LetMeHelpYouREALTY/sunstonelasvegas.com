import type { MetadataRoute } from 'next'

import { capellaHomes, collectionGuides, plans } from '@/lib/area'
import { SITE_URL } from '@/lib/site'

const UPDATED = new Date('2026-11-20')

const staticDates: Record<string, Date> = {
  '/': UPDATED,
  '/about': UPDATED,
  '/amenities': UPDATED,
  '/buyers': UPDATED,
  '/communities': UPDATED,
  '/contact': UPDATED,
  '/faqs': UPDATED,
  '/hoa': UPDATED,
  '/local-guide': UPDATED,
  '/market-report': UPDATED,
  '/models': UPDATED,
  '/move-in-ready': UPDATED,
  '/new-construction': UPDATED,
  '/sell': UPDATED,
  '/services': UPDATED,
  '/touring': UPDATED,
  '/trilogy': UPDATED,
  '/woodside': UPDATED,
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
    lastModified: staticDates[path] ?? UPDATED,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : path === '/services' || path === '/woodside' ? 0.9 : 0.7,
  }))
}
