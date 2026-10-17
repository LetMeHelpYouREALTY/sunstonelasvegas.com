import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { capellaHomes, DRIVES, LENNAR, SHEA, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildArticle, buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const marketTitle = 'Sunstone Market Report | Oct 2026'
const marketDescription =
  'Sunstone market notes for October 12, 2026. Capella asking prices, builder ranges, and drive times. No 90-day closed-sale median was available.'

export const metadata = pageMeta({
  title: marketTitle,
  description: marketDescription,
  path: '/market-report',
})

export default function MarketReportPage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd id="schema-market-webpage" data={buildWebPage('/market-report', marketTitle, marketDescription)} />
      <JsonLd
        id="schema-market-article"
        data={buildArticle({
          headline: 'Sunstone market report, October 12, 2026',
          description:
            'Builder asking prices and drive times for Capella at Sunstone and the Sunstone master plan.',
          path: '/market-report',
          datePublished: '2026-10-12',
        })}
      />
      <JsonLd
        id="schema-market-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Market report', path: '/market-report' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>October 12, 2026</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Sunstone market report
        </h1>
        <LogoLine />
        <Answer>
          This report uses builder pages retrieved on October 12, 2026. Drive
          times were measured on September 30, 2026 from Sunstone. It does not
          include a 90-day median sale price for this master plan. A
          days-on-market count and a list-to-sale ratio were also missing. Those
          figures were not in an allowed local source.
        </Answer>
      </header>

      <section>
        <h2 className="font-heading text-4xl">Capella asking prices</h2>
        <AgentCredit />
        <p className="mt-3 text-sm text-muted-foreground">
          Woodside Homes, retrieved October 12, 2026. Not closed sales.
        </p>
        <table className="mt-6 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              {['Home', 'Price', 'Sq ft', 'Baths'].map((heading) => (
                <th key={heading} className="py-3 pr-4 font-medium">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {capellaHomes.map((home) => (
              <tr key={home.slug} className="border-b border-border">
                <td className="py-3 pr-4">
                  {home.plan} {home.lot}
                </td>
                <td className="py-3 pr-4">{home.price}</td>
                <td className="py-3 pr-4">{home.sqft}</td>
                <td className="py-3 pr-4">{home.baths}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <SourceLine href={WOODSIDE}>
          Source retrieved October 12, 2026
        </SourceLine>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl">Other builder ranges</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Lennar’s Sunstone span that day was $383,990 to $966,883. Shea
            started Trilogy at $399,990 on the same date. Some Shea plans
            included a $26,000 or $28,000 base incentive.
          </p>
          <SourceLine href={LENNAR}>
            Lennar, retrieved October 12, 2026
          </SourceLine>
          <SourceLine href={SHEA}>
            Shea, lot map stamped October 12, 2026
          </SourceLine>
        </div>
        <div>
          <h2 className="font-heading text-3xl">Drive times</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Off-peak routing on September 30, 2026 put the Strip at Bellagio
            about 29 minutes away. Harry Reid International Airport was about 49
            minutes on that same route. Downtown Las Vegas was about 23 minutes,
            and Centennial Hills Hospital about 7. Downtown Summerlin was not
            included in that measured list.
          </p>
          <SourceLine href={DRIVES}>
            OSRM on OpenStreetMap, measured September 30, 2026
          </SourceLine>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl">Gaps</h2>
        <AgentCredit />
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            No closed sale with address, price, close date, days on market, and
            list-to-sale ratio.
          </li>
          <li>
            No Sunstone median price or inventory count for the last 90 days.
          </li>
          <li>No published Capella HOA dollar amount or transfer fee.</li>
          <li>No Capella solar-lease terms.</li>
          <li>
            No confirmed school assignment for a specific Sunstone address.
          </li>
        </ul>
      </section>
    </article>
  )
}
