import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'meta-externalfetcher',
  'YouBot',
  'Diffbot',
  'CCBot',
  'Bytespider',
] as const

const DISALLOW = ['/api/', '/.well-known/workflow/'] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/' as const,
        disallow: [...DISALLOW],
      })),
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [...DISALLOW],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [...DISALLOW],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
