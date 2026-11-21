import Image from 'next/image'
import Link from 'next/link'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  AGENT_PORTRAIT,
  BROKERAGE_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SITE_BRAND,
  SITE_TAGLINE,
} from '@/lib/site'

const links = [
  { href: '/buyers', label: 'Buy Capella at Sunstone' },
  { href: '/sell', label: 'Sell my Sunstone home' },
  { href: '/services', label: 'Hyperlocal Sunstone services' },
  { href: '/woodside', label: 'Woodside Homes at Sunstone' },
  { href: '/communities', label: 'Sunstone neighborhoods' },
  { href: '/communities/capella', label: 'Capella at Sunstone' },
  { href: '/amenities', label: 'Sunstone parks and trails' },
  { href: '/touring', label: 'Tour Capella homes' },
  { href: '/hoa', label: 'Sunstone HOA notes' },
  { href: '/local-guide', label: 'Sunstone local guide' },
  { href: '/new-construction', label: 'New construction' },
  { href: '/trilogy', label: 'Trilogy 55+ rules' },
  { href: '/market-report', label: 'Market report' },
  { href: '/models', label: 'Capella floor plans' },
  { href: '/move-in-ready', label: 'Capella homes Woodside listed' },
  { href: '/faqs', label: 'Sunstone Woodside FAQs' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <CalendlyCta
          kind="buyer"
          content="footer"
          heading="Talk with Dr. Jan Duffy about Capella"
          note="Book Calendly — no contact forms. Buyer, seller, showing, or a 15-minute market call."
          also={['seller', 'showing', 'market']}
        />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <Image
            src={AGENT_PORTRAIT}
            alt={`Portrait of ${AGENT_NAME}`}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full"
          />
          <p className="font-heading text-3xl leading-tight">{SITE_BRAND}</p>
          <p className="text-sm text-muted-foreground">{SITE_TAGLINE}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {AGENT_CREDENTIAL} · 35 years in Las Vegas. Capella at Sunstone and
            the Sunstone Woodside Homes master plan, Las Vegas 89143.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow">Visit and call</p>
          <a className="block font-medium" href={CONTACT_PHONE_LINK}>
            {CONTACT_PHONE}
          </a>
          <a className="block" href={`mailto:${CONTACT_EMAIL}`}>
            Email {AGENT_NAME}
          </a>
          <p>{CONTACT_ADDRESS}</p>
          <p>
            <Link href="/contact">Map, hours, and booking</Link>
          </p>
        </div>
        <ul className="space-y-2 text-sm">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            {AGENT_NAME}, {AGENT_CREDENTIAL} | {BROKERAGE_NAME} since September
            2008 · License {AGENT_LICENSE}
          </p>
          <p>
            Equal Housing Opportunity. Builder prices are not MLS listings.
            Confirm every figure with the builder, the association, and the
            county before you offer.
          </p>
          <p>
            © {new Date().getFullYear()} {SITE_BRAND} · {SITE_TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  )
}
