import Link from 'next/link'

import { Answer, Eyebrow, FaqList, SourceLine } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutSearch } from '@/components/realscout-search'
import { DRIVES, sharedFaqs, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'
import { buildFaqPage } from '@/lib/structured-data'

export const metadata = pageMeta({
  title: 'Capella at Sunstone Homes for Sale',
  description:
    'Capella at Sunstone homes for sale in Las Vegas 89143. Woodside listed six homes from $599,950 to $679,950 on October 12, 2026.',
  path: '/',
})

export default function HomePage() {
  return (
    <div>
      <JsonLd id="schema-home-faq" data={buildFaqPage(sharedFaqs)} />
      <section className="hero-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:py-28">
          <Eyebrow>Las Vegas 89143</Eyebrow>
          <h1 className="max-w-4xl font-heading text-5xl text-inherit sm:text-7xl">
            Capella at Sunstone homes for sale
          </h1>
          <Answer>
            Capella at Sunstone is a Woodside Homes neighborhood in Las Vegas 89143. It sits inside the Sunstone master plan near US-95. On October 12, 2026, Woodside listed six homes from $599,950 to $679,950. Each plan is a single story from 1,970 to 2,295 square feet.
          </Answer>
          <SourceLine href={WOODSIDE}>Woodside Homes community page, retrieved October 12, 2026</SourceLine>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
        <article className="border border-border p-8">
          <h2 className="font-heading text-4xl">Sell my Sunstone home</h2>
          <p className="mt-4 text-muted-foreground">
            Match your sale date to a builder release. Capella is in a final Woodside release.
          </p>
          <div className="mt-6">
            <Link className="btn" href="/sell">
              Request a valuation
            </Link>
          </div>
        </article>
        <article className="border border-border p-8">
          <h2 className="font-heading text-4xl">Buy in Sunstone</h2>
          <p className="mt-4 text-muted-foreground">
            Compare Capella resales with Woodside, Lennar, and Shea inventory in the same master plan.
          </p>
          <div className="mt-6">
            <Link className="btn" href="/buyers">
              Read the buyer guide
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <RealScoutSearch heading="Search Capella and Sunstone homes" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-3">
        <div>
          <h2 className="font-heading text-3xl">Six listed homes</h2>
          <p className="mt-3 text-muted-foreground">Asking prices only. Confirm the lot before you tour.</p>
          <Link className="btn-line mt-6" href="/move-in-ready">
            See Woodside’s list
          </Link>
        </div>
        <div>
          <h2 className="font-heading text-3xl">29 minutes to the Strip</h2>
          <p className="mt-3 text-muted-foreground">
            Off-peak routing on September 30, 2026. The airport was about 49 minutes.
          </p>
          <SourceLine href={DRIVES}>OSRM drive times, measured September 30, 2026</SourceLine>
        </div>
        <div>
          <h2 className="font-heading text-3xl">Call {CONTACT_PHONE}</h2>
          <p className="mt-3 text-muted-foreground">One number for a valuation or a builder tour.</p>
          <a className="btn-line mt-6" href={CONTACT_PHONE_LINK}>
            Call Dr. Jan Duffy
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-heading text-4xl">Questions about Sunstone</h2>
        <div className="mt-8">
          <FaqList faqs={sharedFaqs} />
        </div>
      </section>
    </div>
  )
}
