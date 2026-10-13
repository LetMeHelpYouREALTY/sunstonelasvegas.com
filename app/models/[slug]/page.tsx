import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Answer, Eyebrow, SourceLine } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { plans } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList } from '@/lib/structured-data'

type PlanPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return plans.map((plan) => ({ slug: plan.slug }))
}

export async function generateMetadata({ params }: PlanPageProps) {
  const { slug } = await params
  const plan = plans.find((item) => item.slug === slug)
  if (!plan) {
    return pageMeta({
      title: 'Plan not found | Capella',
      description: 'That Capella floor plan is not on this site.',
      path: '/models',
    })
  }
  return pageMeta({
    title: `${plan.name} | Capella Sunstone`,
    description: `${plan.name} at Capella at Sunstone: ${plan.sqft}, ${plan.beds}, ${plan.baths}, ${plan.stories}. Source retrieved October 12, 2026.`,
    path: `/models/${plan.slug}`,
  })
}

export default async function ModelPage({ params }: PlanPageProps) {
  const { slug } = await params
  const plan = plans.find((item) => item.slug === slug)
  if (!plan) {
    notFound()
  }

  return (
    <div className="mx-auto grid max-w-3xl gap-8 px-4 py-16">
      <JsonLd
        id="schema-plan-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Floor plans', path: '/models' },
          { name: plan.name, path: `/models/${plan.slug}` },
        ])}
      />
      <Eyebrow>Capella at Sunstone</Eyebrow>
      <h1 className="font-heading text-5xl">{plan.name}</h1>
      <Answer>
        {`${plan.name} is a one-story Capella plan at Sunstone in Las Vegas 89143. Woodside lists ${plan.sqft}, ${plan.beds}, and ${plan.baths}, with a ${plan.garage}. ${plan.notes} These figures were read from the Woodside plan page on October 12, 2026. Asking prices for finished homes are on the listed-homes page.`}
      </Answer>
      <SourceLine href={plan.href}>Woodside plan page, retrieved October 12, 2026</SourceLine>
      <Link className="btn w-fit" href="/contact">
        Ask for a model tour
      </Link>
    </div>
  )
}
