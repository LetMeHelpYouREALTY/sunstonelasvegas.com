import Image from 'next/image'

import { CalendlyCta } from '@/components/calendly-cta'
import { AgentCredit, Answer, Eyebrow, LogoLine } from '@/components/editorial'
import { DeferredRender } from '@/components/deferred-render'
import { JsonLd } from '@/components/json-ld'
import { PageHeroImage } from '@/components/page-media'
import { RealScoutAfterHero } from '@/components/realscout-office'
import { pageMeta } from '@/lib/metadata'
import {
  AGENT_NAME,
  AGENT_PORTRAIT,
  BUSINESS_HOURS,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_OFFICE_ADDRESS,
} from '@/lib/site'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const contactTitle = 'Contact Dr. Jan Duffy | Sunstone Woodside'
const contactDescription =
  'Call Dr. Jan Duffy at (702) 766-7950 for Capella at Sunstone in Las Vegas 89143. Book Calendly — no forms. Office address 10249 Celestial Pole St.'

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=10249%20Celestial%20Pole%20St%20Las%20Vegas%2C%20NV%2089143&output=embed'
const MAP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=10249+Celestial+Pole+St+Las+Vegas+NV+89143'
const REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=10249+Celestial+Pole+St+Las+Vegas+NV+89143'

export const metadata = pageMeta({
  title: contactTitle,
  description: contactDescription,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-contact-webpage"
        data={buildWebPage('/contact', contactTitle, contactDescription)}
      />
      <JsonLd
        id="schema-contact-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <header className="grid gap-6">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Contact Dr. Jan Duffy
        </h1>
        <LogoLine />
        <Answer>
          {`Call ${CONTACT_PHONE} for a Capella tour or a Sunstone home valuation. The published community address is ${CONTACT_ADDRESS}. Woodside’s Capella sales office sits at ${SALES_OFFICE_ADDRESS}. Book on Calendly — this site does not use contact forms.`}
        </Answer>
        <AgentCredit />
        <PageHeroImage imageKey="contact" priority />
      </header>
      <RealScoutAfterHero />

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="grid gap-6">
          <h2 className="font-heading text-3xl">Book on Calendly</h2>
          <AgentCredit />
          <CalendlyCta
            kind="buyer"
            content="contact-primary"
            note="Choose buyer, seller, showing, or a 15-minute market call."
            also={['seller', 'showing', 'market', 'zoom']}
          />
        </div>
        <div className="grid gap-4">
          <Image
            src={AGENT_PORTRAIT}
            alt={`Portrait of ${AGENT_NAME}`}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full"
          />
          <h2 className="font-heading text-3xl">Map and hours</h2>
          <AgentCredit />
          <p>
            <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE}</a>
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p>{CONTACT_ADDRESS}</p>
          <ul className="grid gap-1 text-sm text-muted-foreground">
            {BUSINESS_HOURS.map((row) => (
              <li key={row.days}>
                {row.days}: {row.opens}–{row.closes}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a className="btn" href={CONTACT_PHONE_LINK}>
              Call
            </a>
            <a className="btn-line" href={MAP_DIRECTIONS_URL}>
              Directions
            </a>
            <a className="btn-line" href={REVIEWS_URL}>
              View Google Reviews
            </a>
          </div>
          <DeferredRender
            fallback={<div className="h-64 border border-border bg-muted" />}
          >
            <iframe
              title="Map to 10249 Celestial Pole St, Las Vegas"
              src={MAP_EMBED_URL}
              className="h-64 w-full border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </DeferredRender>
        </div>
      </section>
    </div>
  )
}
