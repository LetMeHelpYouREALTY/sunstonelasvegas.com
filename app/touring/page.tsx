import Link from 'next/link'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { PageHeroImage } from '@/components/page-media'
import { RealScoutAfterHero } from '@/components/realscout-office'
import { CAPELLA_CHECKED } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { SALES_OFFICE_ADDRESS } from '@/lib/site'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const title = 'Tour Capella at Sunstone | Woodside Homes Las Vegas'
const description =
  'Schedule a Capella at Sunstone tour with Dr. Jan Duffy. Woodside sales office at 9361 Blue Vega Ave., Las Vegas 89143. Calendly booking only.'

export const metadata = pageMeta({
  title,
  description,
  path: '/touring',
})

export default function TouringPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-touring-webpage"
        data={buildWebPage('/touring', title, description)}
      />
      <JsonLd
        id="schema-touring-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Touring', path: '/touring' },
        ])}
      />
      <header className="grid gap-6">
        <Eyebrow>Capella showings</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Tour Capella at Sunstone
        </h1>
        <LogoLine />
        <Answer>
          Book a Capella showing or buyer consultation on Calendly. Woodside’s
          Capella sales office is at {SALES_OFFICE_ADDRESS}. Confirm which lots
          remain on the {CAPELLA_CHECKED} list before you drive out.
        </Answer>
        <AgentCredit checked={CAPELLA_CHECKED} />
        <PageHeroImage imageKey="touring" priority />
      </header>
      <RealScoutAfterHero />

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">How a Capella tour works</h2>
        <AgentCredit />
        <ol className="grid gap-3 text-muted-foreground">
          <li className="answer">
            1. Book a buyer consultation or showing on Calendly.
          </li>
          <li className="answer">
            2. Review the live Woodside Capella list and your target plan.
          </li>
          <li className="answer">
            3. Meet at the sales office or the lot Dr. Jan Duffy confirms.
          </li>
        </ol>
        <CalendlyCta
          kind="showing"
          content="touring-steps"
          heading="Schedule your Capella showing"
          also={['buyer']}
        />
      </section>

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Before you go</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Read the Aries, Taurus, and Virgo plan pages. Check move-in-ready lots
          still on Woodside’s card. Bring questions about options, HOA packages,
          and SID notes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn" href="/models">
            Floor plans
          </Link>
          <Link className="btn-line" href="/move-in-ready">
            Listed homes
          </Link>
          <Link className="btn-line" href="/hoa">
            HOA notes
          </Link>
        </div>
        <CalendlyCta kind="buyer" content="touring-prep" also={['market']} />
      </section>
    </div>
  )
}
