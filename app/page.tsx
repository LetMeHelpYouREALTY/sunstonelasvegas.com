import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { SunstoneMap } from '@/components/sunstone-map'
import { featuredPlaces, sharedFaqs, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'
import { buildFaqPage, buildWebPage } from '@/lib/structured-data'

export const metadata = pageMeta({
  title: 'Sunstone Las Vegas Homes for Sale',
  description:
    'Sunstone Las Vegas homes for sale in ZIP 89143. Ten neighborhoods and about 3,650 homes sit inside the master plan.',
  path: '/',
})

export default function HomePage() {
  return (
    <div>
      <JsonLd id="schema-home-faq" data={buildFaqPage(sharedFaqs)} />
      <JsonLd
        id="schema-home-webpage"
        data={buildWebPage({
          name: 'Sunstone Las Vegas Homes for Sale',
          description:
            'Sunstone Las Vegas homes for sale in ZIP 89143. Ten neighborhoods and about 3,650 homes sit inside the master plan.',
          path: '/',
        })}
      />
      <section className="hero-band">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <Eyebrow>Las Vegas 89143</Eyebrow>
            <h1 className="max-w-4xl font-heading text-5xl text-inherit sm:text-7xl">
              <span className="block sm:inline">Sunstone </span>
              <span className="block sm:inline">Las Vegas</span>
            </h1>
            <Answer>
              Sunstone is the master plan in northwest Las Vegas. It sits in
              ZIP 89143 and plans about 3,650 homes. Ten neighborhoods include
              townhomes, single-family homes, and age-qualified plans. Lennar,
              Shea, Woodside, and Richmond American each build inside it.
            </Answer>
            <a className="btn w-fit" href={CONTACT_PHONE_LINK}>
              <span className="grid gap-1 text-center leading-none">
                <span>Call Dr. Jan Duffy</span>
                <span className="text-base tracking-normal">{CONTACT_PHONE}</span>
              </span>
            </a>
            <p className="text-sm">
              <Link href="/sell">Request a valuation</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/buyers">Read the buyer guide</Link>
            </p>
          </div>
          <SunstoneMap />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <RealScoutOffice />
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16">
        <div className="grid gap-3">
          <h2 className="font-heading text-4xl">Sunstone neighborhoods</h2>
          <AgentCredit />
          <p className="max-w-3xl text-muted-foreground">
            Five collections have their own pages, with bands dated October 12,
            2026.
          </p>
        </div>
        <ul className="place-index grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlaces.map((place) => (
            <li key={place.path}>
              <Link
                href={place.path}
                className="grid h-full gap-2 border border-border p-6 no-underline"
              >
                <span className="font-heading text-3xl">{place.name}</span>
                <span className="text-sm text-muted-foreground">
                  {place.builder}
                </span>
                <span>{place.band}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16">
        <h2 className="font-heading text-4xl">
          Woodside asking prices as of October 12, 2026
        </h2>
        <AgentCredit />
        <p className="max-w-3xl text-muted-foreground">
          Woodside listed six Capella homes from $599,950 to $679,950. Those
          plans run 1,970 to 2,295 square feet. The figures are asking prices,
          and they are not closed sales.
        </p>
        <SourceLine href={WOODSIDE}>
          Woodside Capella prices, retrieved October 12, 2026
        </SourceLine>
        <Link className="btn w-fit" href="/move-in-ready">
          See the six homes
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-heading text-4xl">Questions about Sunstone</h2>
        <AgentCredit />
        <div className="mt-8">
          <FaqList faqs={sharedFaqs} />
        </div>
      </section>
    </div>
  )
}
