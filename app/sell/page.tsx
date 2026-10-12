import type { Metadata } from 'next'
import Link from 'next/link'

import { JsonLd } from '@/components/json-ld'
import { listingConsultationUrl } from '@/lib/calendly'
import {
  CAPELLA_BED_RANGE,
  CAPELLA_BUILDER_PAGE_URL,
  CAPELLA_COMMUNITY_STARTING_PRICE,
  CAPELLA_SALES_OFFICE,
  CAPELLA_SQFT_RANGE,
} from '@/lib/capella-builder-facts'
import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'
import { buildBreadcrumbList, buildFaqPage } from '@/lib/structured-data'

const sellFaqs = [
  {
    question: 'How does Dr. Jan Duffy coordinate selling and buying at Capella at Sunstone?',
    answer:
      'Dr. Jan Duffy maps your resale timeline against Woodside build milestones, lender conditions, and move-in goals. You get one coordinated calendar for listing prep, showings, contract dates, and Capella lot or quick move-in selection inside the Sunstone master plan (Las Vegas, 89143).',
  },
  {
    question: 'What Capella at Sunstone inventory should I know before listing my current home?',
    answer:
      `Woodside Homes lists Capella as single-story ${CAPELLA_BED_RANGE} homes from ${CAPELLA_SQFT_RANGE}, with community pricing from ${CAPELLA_COMMUNITY_STARTING_PRICE} on the builder site (2026-10-12). Dr. Jan Duffy compares those plans with your equity position so you know what is realistic before your home hits the market.`,
  },
  {
    question: 'Where is the Capella sales office?',
    answer: `Model tours and builder appointments run from ${CAPELLA_SALES_OFFICE}, within the Sunstone master plan in northwest Las Vegas (ZIP 89143). Dr. Jan Duffy schedules builder visits around your listing milestones.`,
  },
]

export const metadata: Metadata = {
  title: 'Sell to Buy at Capella at Sunstone | Dr. Jan Duffy',
  description:
    'Sell your current home and buy at Capella at Sunstone with Dr. Jan Duffy. Coordinated listing and new-build timelines in Las Vegas 89143.',
}

export default function SellPage() {
  const listingCta = listingConsultationUrl('sell-page-hero')

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
      <JsonLd
        id="schema-sell-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Sell to Buy at Capella', path: '/sell' },
        ])}
      />
      <JsonLd id="schema-sell-faq" data={buildFaqPage(sellFaqs)} />

      <header className="space-y-4 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Sell to buy
        </p>
        <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
          Sell your current home to buy at Capella at Sunstone
        </h1>
        <p className="text-lg text-muted-foreground">
          Dr. Jan Duffy aligns your listing strategy with Woodside Homes build timelines so you can
          move into Capella at Sunstone inside the Sunstone master plan—Las Vegas, NV 89143—without
          juggling two transactions alone.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={listingCta}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Book a listing consultation
          </a>
          <Link
            href={CONTACT_PHONE_LINK}
            className="inline-flex items-center justify-center rounded-full border border-input px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Call {CONTACT_PHONE}
          </Link>
        </div>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">Builder snapshot (Woodside Homes)</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">Community:</span> Capella at Sunstone,
              single-story new construction in northwest Las Vegas.
            </li>
            <li>
              <span className="font-semibold text-foreground">Homes:</span> {CAPELLA_BED_RANGE}{' '}
              plans from {CAPELLA_SQFT_RANGE}.
            </li>
            <li>
              <span className="font-semibold text-foreground">Published starting price:</span>{' '}
              {CAPELLA_COMMUNITY_STARTING_PRICE} (Woodside community page, 2026-10-12).
            </li>
            <li>
              <span className="font-semibold text-foreground">Sales office:</span> {CAPELLA_SALES_OFFICE}.
            </li>
          </ul>
          <a
            href={CAPELLA_BUILDER_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            View Woodside Capella details ›
          </a>
        </article>

        <article className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">How Dr. Jan Duffy helps sellers</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Equity and net-sheet modeling tied to your target Capella plan or quick move-in.</li>
            <li>Listing prep that keeps your resale competitive while you reserve builder inventory.</li>
            <li>Contract dates synchronized with Woodside milestones, inspections, and closing.</li>
            <li>Concierge introductions for staging, movers, and utility transfers.</li>
          </ul>
          <a
            href={listingConsultationUrl('sell-page-sidebar')}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            Schedule listing consult
          </a>
        </article>
      </section>

      <section className="rounded-3xl border border-border bg-muted/20 p-8">
        <h2 className="text-2xl font-semibold text-foreground">Questions sellers ask</h2>
        <dl className="mt-6 space-y-6">
          {sellFaqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-base font-semibold text-foreground">{faq.question}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="text-center">
        <p className="text-lg text-muted-foreground">
          Ready to line up your sale and a Capella at Sunstone purchase?
        </p>
        <a
          href={listingConsultationUrl('sell-page-footer')}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Book listing consultation with Dr. Jan Duffy
        </a>
      </section>
    </div>
  )
}
