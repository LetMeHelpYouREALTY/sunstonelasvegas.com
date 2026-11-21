import Link from 'next/link'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { PageHeroImage } from '@/components/page-media'
import { RealScoutAfterHero } from '@/components/realscout-office'
import { HOA, SUNSTONE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const title = 'Sunstone Parks Trails Amenities | Las Vegas 89143'
const description =
  'Sunstone Woodside Homes amenities in Las Vegas 89143: parks, trails, Nature Paseo, and gated neighborhood notes from the master association.'

export const metadata = pageMeta({
  title,
  description,
  path: '/amenities',
})

export default function AmenitiesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-amenities-webpage"
        data={buildWebPage('/amenities', title, description)}
      />
      <JsonLd
        id="schema-amenities-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Amenities', path: '/amenities' },
        ])}
      />
      <header className="grid gap-6">
        <Eyebrow>Sunstone master plan</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Sunstone parks and trails
        </h1>
        <LogoLine />
        <Answer>
          Sunstone’s master plan in northwest Las Vegas 89143 centers outdoor
          recreation: interconnected trails, parks, and open space near the
          Sheep Mountain Range. Capella buyers use these amenities alongside
          Woodside’s single-story plans.
        </Answer>
        <SourceLine href={SUNSTONE}>sunstonelv.com amenities overview</SourceLine>
        <AgentCredit />
        <PageHeroImage imageKey="amenities" priority />
      </header>
      <RealScoutAfterHero />

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Named park and trail places</h2>
        <AgentCredit />
        <ul className="grid gap-3 text-muted-foreground">
          <li className="answer">Sun Mountain Park</li>
          <li className="answer">Sun Trails Park</li>
          <li className="answer">Nature Paseo</li>
          <li className="answer">Moccasin Walking Trail</li>
        </ul>
        <SourceLine href={HOA}>
          Sunstone Master Community Association park names
        </SourceLine>
        <CalendlyCta kind="buyer" content="amenities-parks" also={['showing']} />
      </section>

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Gates and Capella access</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          The master association says most Sunstone neighborhoods have private
          entry gates. Confirm Capella’s entry on your tour. Dr. Jan Duffy can
          coordinate a Woodside sales-office visit.
        </p>
        <Link className="btn w-fit" href="/touring">
          Capella touring guide
        </Link>
        <CalendlyCta kind="showing" content="amenities-gates" also={['buyer']} />
      </section>
    </div>
  )
}
