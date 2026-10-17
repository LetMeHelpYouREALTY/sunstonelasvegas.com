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
import { plans, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const modelsTitle = 'Capella Floor Plans | Sunstone'
const modelsDescription =
  'Capella at Sunstone floor plans: Aries 1,970 sq ft, Taurus 2,093 sq ft, and Virgo 2,295 sq ft. Woodside plan pages retrieved October 12, 2026.'

export const metadata = pageMeta({
  title: modelsTitle,
  description: modelsDescription,
  path: '/models',
})

export default function ModelsPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd id="schema-models-webpage" data={buildWebPage('/models', modelsTitle, modelsDescription)} />
      <JsonLd
        id="schema-models-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Floor plans', path: '/models' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>Woodside plans</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Capella floor plans
        </h1>
        <LogoLine />
        <Answer>
          Woodside offers three single-story Capella plans in Las Vegas 89143.
          Aries measures 1,970 square feet with three bedrooms and 2.5 baths.
          Taurus measures 2,093 square feet with the same bedroom and bath
          count. Virgo measures 2,295 square feet and offers an optional fourth
          bedroom. Plan facts were read from Woodside on October 12, 2026.
        </Answer>
        <SourceLine href={WOODSIDE}>
          Woodside Homes, retrieved October 12, 2026
        </SourceLine>
        <AgentCredit checked="October 12, 2026" />
      </header>
      <RealScoutOffice />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.slug} className="border border-border p-6">
            <h2 className="font-heading text-3xl">{plan.name}</h2>
            <AgentCredit />
            <p className="mt-3 text-muted-foreground">
              {plan.sqft}. {plan.beds}. {plan.baths}. {plan.garage}.
            </p>
            <Link className="btn mt-6" href={`/models/${plan.slug}`}>
              Read {plan.name}
            </Link>
          </article>
        ))}
      </div>
      <RelatedLinks
        heading="Capella pages"
        links={[
          {
            label: 'Capella at Sunstone overview',
            href: '/communities/capella',
          },
          {
            label: 'The six Capella homes Woodside listed',
            href: '/move-in-ready',
          },
          {
            label: 'New homes in Sunstone by builder',
            href: '/new-construction',
          },
        ]}
      />
    </div>
  )
}
