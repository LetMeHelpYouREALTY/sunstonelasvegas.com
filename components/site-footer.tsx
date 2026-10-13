import Image from 'next/image'
import Link from 'next/link'

import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  BROKERAGE_NAME,
  SITE_LOGO,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
} from '@/lib/site'

const links = [
  { href: '/buyers', label: 'Buy in Sunstone' },
  { href: '/sell', label: 'Sell my Sunstone home' },
  { href: '/communities', label: 'Sunstone neighborhoods' },
  { href: '/local-guide', label: 'Sunstone local guide' },
  { href: '/new-construction', label: 'New construction' },
  { href: '/trilogy', label: 'Trilogy 55+ rules' },
  { href: '/market-report', label: 'Market report' },
  { href: '/models', label: 'Capella floor plans' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <Image
            src="/images/about/dr-jan-duffy.webp"
            alt="Portrait of Dr. Jan Duffy"
            width={72}
            height={72}
            className="h-[4.5rem] w-[4.5rem]"
          />
          <p className="font-heading text-3xl leading-tight">{SITE_LOGO}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {AGENT_CREDENTIAL}. Nevada license {AGENT_LICENSE}. Homes in Capella
            at Sunstone and the Sunstone master plan, Las Vegas 89143.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow">Visit and call</p>
          <a className="block font-medium" href={CONTACT_PHONE_LINK}>
            {CONTACT_PHONE}
          </a>
          <a className="block" href={`mailto:${CONTACT_EMAIL}`}>
            Email Dr. Jan Duffy
          </a>
          <p>{CONTACT_ADDRESS}</p>
          <p>
            <Link href="/contact">Map and contact form</Link>
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
            {AGENT_NAME}, {AGENT_CREDENTIAL} | Nevada license {AGENT_LICENSE} |{' '}
            {BROKERAGE_NAME}
          </p>
          <p>
            Equal Housing Opportunity. Builder prices are not MLS listings.
            Confirm every figure with the builder, the association, and the
            county before you offer.
          </p>
          <p>
            © {new Date().getFullYear()} {BROKERAGE_NAME}
          </p>
        </div>
      </div>
    </footer>
  )
}
