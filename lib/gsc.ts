/**
 * Google Search Console readiness for the canonical property.
 *
 * Primary property (URL-prefix or Domain): https://www.sunstonelasvegas.com
 * Alias hosts (sunstonewoodsidehomes.com, etc.) 308 → SITE_URL — verify those
 * only as Domain properties to monitor redirects, not as separate sitemaps.
 *
 * DNS TXT already published on sunstonelasvegas.com:
 *   google-site-verification=uSqROn6a2DxQxpCmPnpud6VHuzqMoALmvmhFAR5NZf8
 *
 * After deploy: Search Console → Sitemaps → submit
 *   https://www.sunstonelasvegas.com/sitemap.xml
 */
import { SITE_URL } from '@/lib/site'

/** Matches the live DNS TXT on sunstonelasvegas.com (Domain / URL-prefix). */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
  'uSqROn6a2DxQxpCmPnpud6VHuzqMoALmvmhFAR5NZf8'

export const GSC_SITEMAP_URL = `${SITE_URL}/sitemap.xml`
export const GSC_PROPERTY_URL = SITE_URL
