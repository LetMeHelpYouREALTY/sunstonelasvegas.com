import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  RelatedLinks,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { capellaHomes, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import {
  buildBreadcrumbList,
  buildCapellaInventoryList,
  buildWebPage,
} from '@/lib/structured-data'

const inventoryTitle = 'Capella at Sunstone Homes Listed by Woodside'
const inventoryDescription =
  'Six Capella at Sunstone homes in Las Vegas 89143 that Woodside listed on October 12, 2026, from $599,950 to $679,950. Builder asking prices, not MLS listings.'

export const metadata = pageMeta({
  title: inventoryTitle,
  description: inventoryDescription,
  path: '/move-in-ready',
})

export default function MoveInReadyPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-inventory-webpage"
        data={buildWebPage('/move-in-ready', inventoryTitle, inventoryDescription)}
      />
      <JsonLd id="schema-inventory-list" data={buildCapellaInventoryList()} />
      <JsonLd
        id="schema-inventory-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Listed homes', path: '/move-in-ready' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>Builder list</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Capella homes Woodside listed
        </h1>
        <LogoLine />
        <Answer>
          These six Capella at Sunstone homes, in Las Vegas 89143, were on
          Woodside’s Capella page on October 12, 2026. Asking prices run from
          $599,950 to $679,950 for one-story plans. They are builder prices, not
          closed sales and not an MLS feed. Woodside called this release a final
          opportunity on that page. Confirm the lot is still available before
          you schedule a tour.
        </Answer>
        <SourceLine href={WOODSIDE}>Retrieved October 12, 2026</SourceLine>
        <AgentCredit checked="October 12, 2026" />
      </header>
      <RealScoutOffice />
      <div className="grid gap-4">
        {capellaHomes.map((home) => (
          <article
            key={home.slug}
            className="grid gap-2 border border-border p-6 sm:grid-cols-4"
          >
            <h2 className="font-heading text-3xl">
              {home.plan} {home.lot}
            </h2>
            <AgentCredit />
            <p>{home.price}</p>
            <p>
              {home.sqft} sq ft · {home.baths} baths
            </p>
            <p className="grid gap-1">
              <Link href={`/move-in-ready/${home.slug}`}>
                {home.plan} {home.lot} details
              </Link>
              <Link href={`/models/${home.planSlug}`}>
                {home.plan} plan facts
              </Link>
            </p>
          </article>
        ))}
      </div>
      <RelatedLinks
        heading="Capella pages"
        links={[
          {
            label: 'Capella floor plans: Aries, Taurus, and Virgo',
            href: '/models',
          },
          {
            label: 'Capella at Sunstone overview',
            href: '/communities/capella',
          },
          {
            label: 'Sunstone market report, October 12, 2026',
            href: '/market-report',
          },
        ]}
      />
    </div>
  )
}
