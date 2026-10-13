import type { MetadataRoute } from 'next'

import { capellaHomes, plans } from '@/lib/area'
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
  ]

  const dynamicRoutes = [
    ...plans.map((plan) => `/models/${plan.slug}`),
    ...capellaHomes.map((home) => `/move-in-ready/${home.slug}`),
  ]

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
