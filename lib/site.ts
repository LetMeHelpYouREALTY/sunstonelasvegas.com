export const AGENT_NAME = 'Dr. Jan Duffy'
/** Primary brand lockup — keyword-forward for Sunstone Woodside Homes. */
export const SITE_BRAND = 'Sunstone Woodside'
/** Subline under the brand on every chrome surface. */
export const SITE_TAGLINE = 'Homes by Dr. Jan Duffy'
/** Combined lockup for OG / schema name fields. */
export const SITE_LOGO = `${SITE_BRAND} | ${SITE_TAGLINE}`
export const AGENT_CREDENTIAL = 'REALTOR®'
export const AGENT_LICENSE = 'S.0197614.LLC'
export const BROKERAGE_NAME =
  'Berkshire Hathaway HomeServices Nevada Properties'

export const CONTACT_EMAIL = 'DrDuffySells@SunstoneWoodsideHomes.com'
export const CONTACT_PHONE = '(702) 766-7950'
export const CONTACT_PHONE_LINK = 'tel:+17027667950'
export const REALSCOUT_AGENT_ID = 'QWdlbnQtMjI1MDUw'

export const CONTACT_ADDRESS = '10249 Celestial Pole St, Las Vegas, NV 89143'
export const SALES_OFFICE_ADDRESS = '9361 Blue Vega Ave., Las Vegas, NV 89143'
export const HOA_OFFICE_ADDRESS =
  '7575 Norman Rockwell Ln., Ste. 110, Las Vegas, NV 89143'

/** Hours match Capella / Sunstone sales cadence published on this site. */
export const BUSINESS_HOURS = [
  { days: 'Monday', opens: '14:00', closes: '17:00' },
  { days: 'Tuesday', opens: '10:00', closes: '17:00' },
  { days: 'Wednesday', opens: '10:00', closes: '17:00' },
  { days: 'Thursday', opens: '10:00', closes: '17:00' },
  { days: 'Friday', opens: '10:00', closes: '17:00' },
  { days: 'Saturday', opens: '10:00', closes: '17:00' },
  { days: 'Sunday', opens: '10:00', closes: '17:00' },
] as const

export const AGENT_PORTRAIT = '/images/about/dr-jan-duffy.webp'
export const AGENT_PORTRAIT_MARK = '/images/about/dr-jan-duffy-mark.webp'

export const SITE_URL = 'https://www.sunstonelasvegas.com'

/**
 * Google Search Console: use one primary URL-prefix property for SITE_URL.
 * Alias hosts below 301 to SITE_URL (see next.config.ts); verify aliases only
 * to confirm redirects, not as separate sitemap/index targets.
 */
export const ALIAS_HOSTS = [
  'sunstonelasvegas.com',
  'sunstonewoodsidehomes.com',
  'www.sunstonewoodsidehomes.com',
  'sunstonewoodsidehomescom.vercel.app',
  'sunstonelasvegashomes.com',
  'www.sunstonelasvegashomes.com',
] as const

export const AREA_NAME = 'Capella at Sunstone'
export const MASTER_PLAN = 'Sunstone'
export const AREA_ZIP = '89143'
export const PRIMARY_KEYWORDS = [
  'Sunstone Woodside Homes',
  'Capella at Sunstone',
  'Woodside Homes Las Vegas',
  'Sunstone Las Vegas 89143',
  'Capella Woodside Homes',
] as const
