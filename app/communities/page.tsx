import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { collectionRows, HOA, SUNSTONE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, placeJsonLd } from '@/lib/structured-data'

export const metadata = pageMeta({
  title: 'Sunstone Neighborhood Guide',
  description:
    'Sunstone neighborhoods in Las Vegas 89143: Capella, Lyra, Axel, Alia, and Trilogy. Square footage and price bands retrieved October 12, 2026.',
  path: '/communities',
})

export default function CommunitiesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd id="schema-place" data={placeJsonLd} />
      <JsonLd
        id="schema-communities-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Neighborhoods', path: '/communities' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>Sunstone master plan</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Sunstone neighborhoods
        </h1>
        <LogoLine />
        <Answer>
          Sunstone plans about 3,650 homes in ten neighborhoods in Las Vegas
          89143. The site names parks, trails, a pump track, and an
          age-qualified neighborhood. Most neighborhoods have private entry
          gates, the master association says. Richmond American is a named
          builder without a collection assignment. Those pages were checked on
          October 12, 2026.
        </Answer>
        <SourceLine href={SUNSTONE}>
          sunstonelv.com, retrieved October 12, 2026
        </SourceLine>
        <AgentCredit checked="October 12, 2026" />
      </header>

      <section className="overflow-x-auto">
        <h2 className="font-heading text-4xl">Collections</h2>
        <AgentCredit />
        <table className="mt-6 w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              {['Collection', 'Builder', 'Sq ft', 'Beds', 'From'].map(
                (heading) => (
                  <th key={heading} className="py-3 pr-4 font-medium">
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {collectionRows.map((row) => (
              <tr key={row.name} className="border-b border-border">
                <td className="py-3 pr-4">
                  {row.path ? (
                    <Link href={row.path}>{row.name}</Link>
                  ) : (
                    row.name
                  )}
                </td>
                <td className="py-3 pr-4">{row.builder}</td>
                <td className="py-3 pr-4">{row.sqft}</td>
                <td className="py-3 pr-4">{row.beds}</td>
                <td className="py-3 pr-4">{row.band}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-muted-foreground">
          The “from” bands are labels on the master-plan site, retrieved October
          12, 2026. Lennar and Shea published tighter prices on that same day.
          The new-construction page lists those tighter figures.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl">Parks and trails</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Sun Mountain Park, Sun Trails Park, the Nature Paseo, and the
            Moccasin Walking Trail are named by the association. Lennar also
            describes a sundial, play structures, a dino dig, and outdoor WiFi.
            A Homes.com guide names those parks and one more, Alyn Beck Memorial
            Park.
          </p>
          <p className="mt-3">
            <Link href="/local-guide">Read the Sunstone local guide</Link>
          </p>
          <SourceLine href={HOA}>
            Sunstone Master Community Association, retrieved October 12, 2026
          </SourceLine>
        </div>
        <div>
          <h2 className="font-heading text-3xl">Pages for each neighborhood</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Capella plans, Trilogy’s age rule, and the October market notes are
            separate pages.
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/models">Capella floor plans</Link>
            </li>
            <li>
              <Link href="/trilogy">Trilogy Sunstone 55+ rules</Link>
            </li>
            <li>
              <Link href="/market-report">
                Sunstone market report, October 12, 2026
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <Link className="btn" href="/new-construction">
              Compare new construction
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
