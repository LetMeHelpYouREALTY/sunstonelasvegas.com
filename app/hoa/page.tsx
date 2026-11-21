import Link from 'next/link'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutAfterHero } from '@/components/realscout-office'
import { CAPELLA_CHECKED, HOA, sharedFaqs } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { HOA_OFFICE_ADDRESS } from '@/lib/site'
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildWebPage,
} from '@/lib/structured-data'

const title = 'Sunstone HOA Fees Gates Notes | Capella 89143'
const description =
  'Sunstone and Capella HOA notes for Las Vegas 89143. Dues gaps, gates, NRS 116.4109 resale packages, and association contacts.'

const hoaFaqs = sharedFaqs.filter((faq) =>
  [
    'What are HOA fees in Capella at Sunstone?',
    'Is Capella at Sunstone gated?',
    'Does Sunstone charge a SID or LID?',
  ].includes(faq.question),
)

export const metadata = pageMeta({
  title,
  description,
  path: '/hoa',
})

export default function HoaPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-hoa-webpage"
        data={buildWebPage('/hoa', title, description)}
      />
      <JsonLd id="schema-hoa-faq" data={buildFaqPage(hoaFaqs)} />
      <JsonLd
        id="schema-hoa-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'HOA', path: '/hoa' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>Association notes</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Sunstone HOA notes for Capella
        </h1>
        <LogoLine />
        <Answer>
          Woodside did not print a Capella dues amount on {CAPELLA_CHECKED}. The
          master association page also omitted a dollar figure. Ask for the
          current budget and the NRS 116.4109 resale package before you offer.
        </Answer>
        <SourceLine href={HOA}>Sunstone Master Community Association</SourceLine>
        <AgentCredit checked={CAPELLA_CHECKED} />
      </header>
      <RealScoutAfterHero />

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Where to ask</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Master association office listed on this site: {HOA_OFFICE_ADDRESS}.
          Trilogy Sunstone uses a separate management path — confirm before you
          treat Capella and Trilogy as one dues schedule.
        </p>
        <CalendlyCta kind="market" content="hoa-ask" also={['buyer', 'seller']} />
      </section>

      <section className="grid gap-4">
        <h2 className="font-heading text-4xl">Gates and disclosures</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Most Sunstone neighborhoods have private entry gates per the master
          association. Capella’s specific gate is not named on that page.
          Confirm on your tour and in the resale package.
        </p>
        <Link className="btn w-fit" href="/faqs">
          More Capella questions
        </Link>
        <CalendlyCta kind="buyer" content="hoa-gates" also={['showing']} />
      </section>

      <section>
        <h2 className="font-heading text-4xl">HOA questions</h2>
        <AgentCredit />
        <div className="mt-6">
          <FaqList faqs={hoaFaqs} />
        </div>
      </section>
    </div>
  )
}
