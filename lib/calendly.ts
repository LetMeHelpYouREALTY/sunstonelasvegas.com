const UTM_SOURCE = 'sunstonelasvegas.com'
const UTM_MEDIUM = 'website'

/** Seller listing consultation — Calendly only, with site UTM tags. */
export function listingConsultationUrl(utmContent: string): string {
  const params = new URLSearchParams({
    utm_source: UTM_SOURCE,
    utm_medium: UTM_MEDIUM,
    utm_content: utmContent,
  })
  return `https://calendly.com/drjanduffy/listing-consultation?${params.toString()}`
}
