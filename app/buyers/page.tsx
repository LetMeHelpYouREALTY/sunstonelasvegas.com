import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutSearch } from '@/components/realscout-search'
import {
  HOA,
  LENNAR,
  LYRA_NOTE,
  SHEA,
  sharedFaqs,
  SUNSTONE,
  WOODSIDE,
} from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, buildFaqPage, buildWebPage } from '@/lib/structured-data'

const rows = [
  [
    'Capella',
    'Woodside',
    'Not named',
    'Not published',
    '1,970–2,295 sq ft, one story',
  ],
  [
    'Lyra',
    'Woodside',
    'Tour said gated',
    'Tour: $55 + $45 / month',
    'Oakley from $536,990 on Sept 28, 2026',
  ],
  [
    'Axel',
    'Lennar',
    'Not named',
    'About $210 / month',
    'Townhomes $383,990–$462,565',
  ],
  [
    'Trilogy',
    'Shea',
    'Gatehouse on the tour route',
    'Ask Shea',
    '55+ label, from $399,990',
  ],
]

const buyersTitle = 'Buy in Sunstone, Las Vegas 89143'
const buyersDescription =
  'Buy in the Sunstone master plan, Las Vegas 89143. Compare Capella, Lyra, Axel, and Trilogy with dated builder prices and HOA gaps.'

export const metadata = pageMeta({
  title: buyersTitle,
  description: buyersDescription,
  path: '/buyers',
})

export default function BuyersPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd id="schema-buyers-webpage" data={buildWebPage('/buyers', buyersTitle, buyersDescription)} />
      <JsonLd
        id="schema-buyers-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Buy', path: '/buyers' },
        ])}
      />
      <JsonLd id="schema-buyers-faq" data={buildFaqPage(sharedFaqs)} />
      <header className="grid gap-4">
        <Eyebrow>Buyers</Eyebrow>
        <h1 className="max-w-3xl font-heading text-5xl sm:text-6xl">
          Buy in Sunstone
        </h1>
        <LogoLine />
        <Answer>
          Sunstone is a Las Vegas master plan in ZIP 89143 with ten
          neighborhoods. The master-plan site names four builders for those
          neighborhoods. Capella is Woodside’s single-story set, listed from
          $599,950 on October 12, 2026. Lennar, Shea, and Woodside were all
          still selling homes that day. Richmond American is named there without
          a neighborhood assignment.
        </Answer>
        <SourceLine href={SUNSTONE}>
          Sunstone master-plan site, retrieved October 12, 2026
        </SourceLine>
      </header>

      <section className="grid gap-6">
        <h2 className="font-heading text-4xl">Neighborhood by neighborhood</h2>
        <AgentCredit />
        <p className="max-w-3xl text-muted-foreground">
          Use square footage, price, and the association documents. A full map
          of all ten collections is on the neighborhoods page.
        </p>
        <Link className="btn w-fit" href="/communities">
          Open the neighborhood guide
        </Link>
      </section>

      <section className="grid gap-6">
        <h2 className="font-heading text-4xl">New construction or resale</h2>
        <AgentCredit />
        <p className="max-w-3xl text-muted-foreground">
          Most of the published inventory is still builder product. A resale
          competes with those asking prices. Dr. Jan Duffy can represent you
          with the builder. She is not the builder’s sales agent.
        </p>
        <SourceLine href={WOODSIDE}>
          Capella list, retrieved October 12, 2026
        </SourceLine>
      </section>

      <section className="overflow-x-auto">
        <h2 className="font-heading text-4xl">HOA comparison</h2>
        <AgentCredit />
        <table className="mt-6 w-full min-w-[40rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              {[
                'Neighborhood',
                'Builder',
                'Gate',
                'Fee on record',
                'Homes',
              ].map((heading) => (
                <th key={heading} className="py-3 pr-4 font-medium">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-border">
                {row.map((cell) => (
                  <td key={cell} className="py-3 pr-4 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 grid gap-2">
          <SourceLine href={HOA}>
            Gate note: master association, retrieved October 12, 2026
          </SourceLine>
          <SourceLine href={LYRA_NOTE}>
            Lyra dues: tour quote, September 28, 2026. Confirm the parcel.
          </SourceLine>
          <SourceLine href={LENNAR}>
            Axel fee: Lennar approximate monthly HOA, retrieved October 12, 2026
          </SourceLine>
          <SourceLine href={SHEA}>
            Trilogy fee: Shea says ask the representative, retrieved October 12,
            2026
          </SourceLine>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-4xl">School names Lennar displays</h2>
        <AgentCredit />
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Lennar’s Axel page lists James Bilbray Elementary and William and Mary
          Scherkenbach Elementary. It also lists Ralph Cadwallader Middle and
          Arbor View High. Lennar says the names are computer-generated and must
          be verified with the district. They are not a confirmed assignment for
          every Sunstone address.
        </p>
        <SourceLine href={LENNAR}>
          Lennar Axel page, retrieved October 12, 2026
        </SourceLine>
      </section>

      <RealScoutSearch heading="Search homes inside Sunstone" />

      <section>
        <h2 className="font-heading text-4xl">Buyer questions</h2>
        <AgentCredit />
        <div className="mt-6">
          <FaqList faqs={sharedFaqs} />
        </div>
      </section>
    </div>
  )
}
