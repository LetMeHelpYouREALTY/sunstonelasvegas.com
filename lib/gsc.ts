/**
 * Google Search Console — sunstonelasvegas.com only.
 *
 * Property: Domain `sunstonelasvegas.com` (preferred) or URL-prefix SITE_URL.
 * DNS TXT (Domain verify): google-site-verification=uSqROn6a2DxQxpCmPnpud6VHuzqMoALmvmhFAR5NZf8
 * Also: meta tag + public/googleuSqR….html for URL-prefix fallback.
 *
 * After verify → Sitemaps → submit GSC_SITEMAP_URL.
 * Do not submit woodside hostnames under this property.
 */
import { SITE_URL } from '@/lib/site'

/** Matches the live DNS TXT on sunstonelasvegas.com. */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
  'uSqROn6a2DxQxpCmPnpud6VHuzqMoALmvmhFAR5NZf8'

export const GSC_SITEMAP_URL = `${SITE_URL}/sitemap.xml`
export const GSC_PROPERTY_URL = SITE_URL
export const GSC_DOMAIN = 'sunstonelasvegas.com'
