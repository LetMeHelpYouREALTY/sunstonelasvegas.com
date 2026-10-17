import Image from 'next/image'

import { AgentCredit, Answer, Eyebrow, LogoLine } from '@/components/editorial'
import { ContactForm } from '@/components/contact-form'
import { DeferredRender } from '@/components/deferred-render'
import { JsonLd } from '@/components/json-ld'
import { pageMeta } from '@/lib/metadata'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_OFFICE_ADDRESS,
} from '@/lib/site'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const contactTitle = 'Contact Dr. Jan Duffy | Sunstone'
const contactDescription =
  'Call Dr. Jan Duffy at (702) 766-7950 for Capella at Sunstone in Las Vegas 89143. Office address 10249 Celestial Pole St.'

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
      <header className="grid gap-4">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Contact Dr. Jan Duffy
        </h1>
        <LogoLine />
        <Answer>
          {`Call ${CONTACT_PHONE} for a Capella tour or a Sunstone home valuation. The published community address is ${CONTACT_ADDRESS}. Woodside’s Capella sales office sits at ${SALES_OFFICE_ADDRESS}. Use the form below when you want a written reply.`}
        </Answer>
      </header>
      <section className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl">Send a note</h2>
          <AgentCredit />
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        <div className="grid gap-4">
          <Image
            src="/images/about/dr-jan-duffy.webp"
            alt="Portrait of Dr. Jan Duffy"
            width={96}
            height={96}
            className="h-24 w-24"
          />
          <h2 className="font-heading text-3xl">Map</h2>
          <AgentCredit />
          <p>
            <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE}</a>
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p>{CONTACT_ADDRESS}</p>
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
            />
          </DeferredRender>
        </div>
      </section>
    </div>
  )
}
