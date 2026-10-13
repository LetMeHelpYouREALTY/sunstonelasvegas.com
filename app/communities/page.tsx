import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { HOA, SUNSTONE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, placeJsonLd } from '@/lib/structured-data'

const collections = [
  ['Capella', 'Woodside', '1,970–2,295', '3–4', 'From the $600s'],
  ['Alia', 'Lennar', '2,012–4,240', '3–5', 'From the $600s'],
  ['Asher', 'Lennar', '1,248–1,724', '3', 'Mid $400s'],
  ['Lyra One', 'Woodside', '2,488–2,752', '3–5', 'From the $500s'],
  ['Lyra Two', 'Woodside', '3,027–3,428', '4–6', 'High $600s'],
  ['Axel', 'Lennar', '1,807–1,927', '2–4', 'High $300s'],
  ['Solstice', 'Not named', '2,640–3,280', '4–5', 'From the $600s'],
  ['Resort', 'Shea', '1,342–1,678', '2', 'From the $300s'],
  ['Freedom 35', 'Shea', '1,507–1,811', '2–4', 'Mid $400s'],
  ['Freedom 40', 'Shea', '1,622–2,061', '2–3', 'From the $500s'],
  ['Freedom 50', 'Shea', '2,041–2,579', '2–3', 'High $500s'],
  ['Modern', 'Shea', '1,312–2,758', '2–3', 'From the $300s'],
]

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
            {collections.map((row) => (
              <tr key={row[0]} className="border-b border-border">
                {row.map((cell) => (
                  <td key={cell} className="py-3 pr-4">
                    {cell}
                  </td>
                ))}
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
          </p>
          <SourceLine href={HOA}>
            Sunstone Master Community Association, retrieved October 12, 2026
          </SourceLine>
        </div>
        <div>
          <h2 className="font-heading text-3xl">Keep going</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Capella plans, Trilogy’s age rule, and the October market notes are
            separate pages.
          </p>
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
