const UTM_SOURCE = 'sunstonelasvegas.com'
const UTM_MEDIUM = 'website'

export type CalendlyKind =
  | 'buyer'
  | 'seller'
  | 'showing'
  | 'market'
  | 'zoom'
  | 'inPerson'

const EVENT_PATHS: Record<CalendlyKind, string> = {
  buyer: 'buyer-consultation-30-min',
  seller: 'listing-consultation',
  showing: 'showing',
  market: '15min',
  zoom: 'meet-on-zoom',
  inPerson: 'appointment',
}

export const CALENDLY_LABELS: Record<CalendlyKind, string> = {
  buyer: 'Book a Capella buyer consultation',
  seller: 'Book a Sunstone listing consultation',
  showing: 'Schedule a Capella home showing',
  market: 'Book a 15-minute Sunstone market call',
  zoom: 'Meet Dr. Jan Duffy on Zoom',
  inPerson: 'Book an in-person consultation',
}

function withUtm(path: string, utmContent: string): string {
  const params = new URLSearchParams({
    utm_source: UTM_SOURCE,
    utm_medium: UTM_MEDIUM,
    utm_content: utmContent,
  })
  return `https://calendly.com/drjanduffy/${path}?${params.toString()}`
}

/** Calendly booking URL for a named event type, tagged to this site. */
export function calendlyUrl(kind: CalendlyKind, utmContent: string): string {
  return withUtm(EVENT_PATHS[kind], utmContent)
}

/** Seller listing consultation — Calendly only, with site UTM tags. */
export function listingConsultationUrl(utmContent: string): string {
  return calendlyUrl('seller', utmContent)
}

/** Buyer consultation for Capella / Sunstone tours. */
export function buyerConsultationUrl(utmContent: string): string {
  return calendlyUrl('buyer', utmContent)
}

/** On-site showing at a Capella or Sunstone address. */
export function showingUrl(utmContent: string): string {
  return calendlyUrl('showing', utmContent)
}

/** Short market strategy call. */
export function marketCallUrl(utmContent: string): string {
  return calendlyUrl('market', utmContent)
}
