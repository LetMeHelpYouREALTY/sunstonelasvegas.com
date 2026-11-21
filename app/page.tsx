import Link from 'next/link'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AgentCredit,
  FaqList,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { LuxuryHero } from '@/components/luxury-hero'
import { RealScoutAfterHero } from '@/components/realscout-office'
import {
  CAPELLA_CHECKED,
  CAPELLA_HOME_COUNT,
  CAPELLA_PRICE_HIGH,
  CAPELLA_PRICE_LOW,
  capellaInventorySentence,
  featuredPlaces,
  sharedFaqs,
  WOODSIDE,
} from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildWebPage,
} from '@/lib/structured-data'

const homeTitle = 'Capella at Sunstone Homes | Woodside Las Vegas 89143'
const homeDescription = `${capellaInventorySentence()} Single-story Woodside plans in the Sunstone master plan with Dr. Jan Duffy.`

export const metadata = pageMeta({
  title: homeTitle,
  description: homeDescription,
  path: '/',
})

export default function HomePage() {
  return (
    <div>
      <JsonLd
        id="schema-home-webpage"
        data={buildWebPage('/', homeTitle, homeDescription)}
      />
      <JsonLd
        id="schema-home-breadcrumb"
        data={buildBreadcrumbList([{ name: 'Home', path: '/' }])}
      />
      <JsonLd id="schema-home-faq" data={buildFaqPage(sharedFaqs)} />

      <LuxuryHero
        imageKey="home"
        headline="Capella at Sunstone — Woodside Homes, Las Vegas 89143"
        support={`Single-story Capella plans from ${CAPELLA_PRICE_LOW}. Tour with Dr. Jan Duffy.`}
        primaryHref="https://calendly.com/drjanduffy/buyer-consultation-30-min?utm_source=sunstonelasvegas.com&utm_medium=website&utm_content=home-hero-buyer"
        primaryLabel="Book a Capella consultation"
        secondaryHref="/move-in-ready"
        secondaryLabel={`See ${CAPELLA_HOME_COUNT} homes`}
      />

      <RealScoutAfterHero />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16">
        <div className="grid gap-3">
          <h2 className="font-heading text-4xl">Sunstone neighborhoods</h2>
          <AgentCredit />
          <p className="max-w-3xl text-muted-foreground">
            Capella is Woodside’s single-story collection inside the Sunstone
            master plan in northwest Las Vegas. Plans run 1,970 to 2,295 square
            feet. {capellaInventorySentence()} Those figures are builder asking
            prices, not closed sales. Five collections have their own pages on
            this Capella-focused site.
          </p>
          <p className="text-sm">
            <Link href="/sell">Sell my Sunstone home</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/services">Hyperlocal services</Link>
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
        <CalendlyCta
          kind="buyer"
          content="home-neighborhoods"
          heading="Tour Capella with Dr. Jan Duffy"
          note="Book a buyer consultation or a Capella showing. No contact forms on this site."
          also={['showing']}
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16">
        <h2 className="font-heading text-4xl">
          Woodside Capella asking prices as of {CAPELLA_CHECKED}
        </h2>
        <AgentCredit />
        <p className="max-w-3xl text-muted-foreground">
          Woodside listed {CAPELLA_HOME_COUNT} Capella homes from{' '}
          {CAPELLA_PRICE_LOW} to {CAPELLA_PRICE_HIGH}. Those plans run 1,970 to
          2,295 square feet. The figures are asking prices, and they are not
          closed sales.
        </p>
        <SourceLine href={WOODSIDE}>
          Woodside Capella prices, retrieved {CAPELLA_CHECKED}
        </SourceLine>
        <Link className="btn w-fit" href="/move-in-ready">
          See the {CAPELLA_HOME_COUNT} homes
        </Link>
        <CalendlyCta
          kind="showing"
          content="home-inventory"
          heading="Schedule a Capella showing"
          also={['buyer']}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-heading text-4xl">Questions about Capella</h2>
        <AgentCredit checked={`${CAPELLA_CHECKED}`} />
        <div className="mt-8">
          <FaqList faqs={sharedFaqs} />
        </div>
        <p className="mt-6 text-sm">
          <Link href="/faqs">All Capella and Sunstone questions on one page</Link>
        </p>
        <div className="mt-10">
          <CalendlyCta
            kind="market"
            content="home-faq"
            heading="Ask Dr. Jan Duffy live"
            note="Prefer a short market call before you tour? Book fifteen minutes."
            also={['buyer', 'seller']}
          />
        </div>
      </section>
    </div>
  )
}
