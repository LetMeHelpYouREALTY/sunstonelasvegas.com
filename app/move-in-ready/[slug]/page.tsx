import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { capellaHomes, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import {
  buildBreadcrumbList,
  buildCapellaListedHomeOffer,
  buildWebPage,
} from '@/lib/structured-data'

type HomePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return capellaHomes.map((home) => ({ slug: home.slug }))
}

export async function generateMetadata({ params }: HomePageProps) {
  const { slug } = await params
  const home = capellaHomes.find((item) => item.slug === slug)
  if (!home) {
    return pageMeta({
      title: 'Home not on this list',
      description:
        'That Capella home is not on the October 12, 2026 Woodside list used here.',
      path: '/move-in-ready',
    })
  }
  return pageMeta({
    title: `${home.plan} ${home.lot} | Capella`,
    description: `${home.plan} ${home.lot} at Capella at Sunstone was listed at ${home.price} on Woodside’s page, retrieved October 12, 2026.`,
    path: `/move-in-ready/${home.slug}`,
  })
}

export default async function ListedHomePage({ params }: HomePageProps) {
  const { slug } = await params
  const home = capellaHomes.find((item) => item.slug === slug)
  if (!home) {
    notFound()
  }

  const path = `/move-in-ready/${home.slug}`
  const pageTitle = `${home.plan} ${home.lot} | Capella`
  const pageDescription = `${home.plan} ${home.lot} at Capella at Sunstone was listed at ${home.price} on Woodside’s page, retrieved October 12, 2026.`

  return (
    <div className="mx-auto grid max-w-3xl gap-6 px-4 py-16">
      <JsonLd id="schema-listed-webpage" data={buildWebPage(path, pageTitle, pageDescription)} />
      <JsonLd id="schema-listed-offer" data={buildCapellaListedHomeOffer(home, path)} />
      <JsonLd
        id="schema-home-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Listed homes', path: '/move-in-ready' },
          {
            name: `${home.plan} ${home.lot}`,
            path: `/move-in-ready/${home.slug}`,
          },
        ])}
      />
      <Eyebrow>Illustrative record, not a listing photo</Eyebrow>
      <h1 className="font-heading text-5xl">
        {home.plan} {home.lot}
      </h1>
      <LogoLine />
      <AgentCredit />
      <Answer>
        {`Woodside priced ${home.plan} ${home.lot} at ${home.price} on October 12, 2026. The card showed ${home.sqft} square feet, ${home.baths} baths, and a ${home.garage}-car garage. ${home.beds === 'Not on card' ? 'The card did not print a bedroom count for this lot.' : `The card printed ${home.beds} bedrooms for this lot.`} This page does not show a photograph of that lot. Treat the price as a builder asking price, not a closed sale.`}
      </Answer>
      <SourceLine href={WOODSIDE}>
        Woodside Homes, retrieved October 12, 2026
      </SourceLine>
      <Link className="btn w-fit" href="/contact">
        Ask if this lot is still open
      </Link>
      <RealScoutOffice />
    </div>
  )
}
