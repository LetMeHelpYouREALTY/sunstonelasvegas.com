import type { MetadataRoute } from 'next'

import { capellaHomes, collectionGuides, plans } from '@/lib/area'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/buyers',
    '/sell',
    '/communities',
    '/new-construction',
    '/trilogy',
    '/market-report',
    '/models',
    '/move-in-ready',
    '/faqs',
    '/about',
    '/contact',
    '/local-guide',
  ]

  const dynamicRoutes = [
    ...plans.map((plan) => `/models/${plan.slug}`),
    ...capellaHomes.map((home) => `/move-in-ready/${home.slug}`),
    ...collectionGuides.map((guide) => guide.path),
  ]

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
