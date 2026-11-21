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
import {
  CAPELLA_CHECKED,
  capellaInventorySentence,
  WOODSIDE,
} from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { SALES_OFFICE_ADDRESS } from '@/lib/site'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const title = 'Woodside Homes at Sunstone | Capella Las Vegas'
const description = `Woodside Homes builds Capella and Lyra inside Sunstone Las Vegas 89143. ${capellaInventorySentence()}`

export const metadata = pageMeta({
  title,
  description,
  path: '/woodside',
})

export default function WoodsidePage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-woodside-webpage"
        data={buildWebPage('/woodside', title, description)}
      />
      <JsonLd
        id="schema-woodside-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Woodside', path: '/woodside' },
        ])}
      />
      <header className="grid gap-6">
        <Eyebrow>Sunstone Woodside Homes</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Woodside Homes at Sunstone
        </h1>
        <LogoLine />
        <Answer>
          Woodside Homes builds Capella (single-story) and Lyra inside the
          Sunstone master plan in Las Vegas 89143. {capellaInventorySentence()}{' '}
          Dr. Jan Duffy represents buyers and sellers against those builder
          cards.
        </Answer>
        <SourceLine href={WOODSIDE}>
          Woodside Capella page, retrieved {CAPELLA_CHECKED}
        </SourceLine>
        <AgentCredit checked={CAPELLA_CHECKED} />
        <PageHeroImage imageKey="woodside" priority />
      </header>
      <RealScoutAfterHero />

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Capella by Woodside</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Capella plans are one story: Aries 1,970 sq ft, Taurus 2,093 sq ft,
          and Virgo 2,295 sq ft. Woodside sells from {SALES_OFFICE_ADDRESS} and
          labels Capella a final opportunity.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn" href="/communities/capella">
            Capella overview
          </Link>
          <Link className="btn-line" href="/models">
            Floor plans
          </Link>
          <Link className="btn-line" href="/move-in-ready">
            Listed homes
          </Link>
        </div>
        <CalendlyCta kind="showing" content="woodside-capella" also={['buyer']} />
      </section>

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Lyra by Woodside</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Lyra One and Lyra Two square-foot bands sit higher than Capella. Use
          the Lyra page for dated collection labels from the master-plan site.
        </p>
        <Link className="btn w-fit" href="/communities/lyra">
          Lyra at Sunstone
        </Link>
        <CalendlyCta kind="buyer" content="woodside-lyra" also={['market']} />
      </section>
    </div>
  )
}
