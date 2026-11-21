import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  RelatedLinks,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutAfterHero } from '@/components/realscout-office'
import {
  CAPELLA_CHECKED,
  capellaHomes,
  retiredCapellaSlugs,
  WOODSIDE,
} from '@/lib/area'
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
  return [
    ...capellaHomes.map((home) => ({ slug: home.slug })),
    ...retiredCapellaSlugs.map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({ params }: HomePageProps) {
  const { slug } = await params
  if ((retiredCapellaSlugs as readonly string[]).includes(slug)) {
    return pageMeta({
      title: 'Capella lot moved',
      description: 'That Capella lot is no longer on Woodside’s live list.',
      path: '/move-in-ready',
    })
  }
  const home = capellaHomes.find((item) => item.slug === slug)
  if (!home) {
    return pageMeta({
      title: 'Home not on this list',
      description: `That Capella home is not on the ${CAPELLA_CHECKED} Woodside list used here.`,
      path: '/move-in-ready',
    })
  }
  return pageMeta({
    title: `${home.plan} ${home.lot} | Capella at Sunstone Woodside`,
    description: `${home.plan} ${home.lot} at Capella at Sunstone, Las Vegas 89143, was listed at ${home.price} on Woodside’s page, retrieved ${CAPELLA_CHECKED}.`,
    path: `/move-in-ready/${home.slug}`,
  })
}

export default async function ListedHomePage({ params }: HomePageProps) {
  const { slug } = await params
  if ((retiredCapellaSlugs as readonly string[]).includes(slug)) {
    permanentRedirect('/move-in-ready')
  }
  const home = capellaHomes.find((item) => item.slug === slug)
  if (!home) {
    notFound()
  }

  const path = `/move-in-ready/${home.slug}`
  const pageTitle = `${home.plan} ${home.lot} | Capella at Sunstone Woodside`
  const pageDescription = `${home.plan} ${home.lot} at Capella at Sunstone, Las Vegas 89143, was listed at ${home.price} on Woodside’s page, retrieved ${CAPELLA_CHECKED}.`

  return (
    <div className="mx-auto grid max-w-3xl gap-6 px-4 py-16">
      <JsonLd
        id="schema-listed-webpage"
        data={buildWebPage(path, pageTitle, pageDescription)}
      />
      <JsonLd
        id="schema-listed-offer"
        data={buildCapellaListedHomeOffer(home, path)}
      />
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
      <AgentCredit checked={CAPELLA_CHECKED} />
      <Answer>
        {`${home.plan} ${home.lot} is a Woodside home in Capella at Sunstone, Las Vegas 89143. Woodside priced it at ${home.price} on ${CAPELLA_CHECKED}. The card showed ${home.sqft} square feet, ${home.baths} baths, and a ${home.garage}-car garage. ${home.beds === 'Not on card' ? 'The card did not print a bedroom count for this lot.' : `The card printed ${home.beds} bedrooms for this lot.`} This page does not show a photograph of that lot. Treat the price as a builder asking price, not a closed sale.`}
      </Answer>
      <SourceLine href={WOODSIDE}>
        Woodside Homes, retrieved {CAPELLA_CHECKED}
      </SourceLine>
      <RealScoutAfterHero />
      <CalendlyCta
        kind="showing"
        content={`lot-${home.slug}`}
        heading="Ask if this Capella lot is still open"
        also={['buyer']}
      />
      <RelatedLinks
        heading="Related Capella pages"
        links={[
          {
            label: `${home.plan} plan: size, bedrooms, and options`,
            href: `/models/${home.planSlug}`,
          },
          {
            label: `All Capella homes Woodside listed on ${CAPELLA_CHECKED}`,
            href: '/move-in-ready',
          },
          {
            label: 'Capella at Sunstone overview',
            href: '/communities/capella',
          },
        ]}
      />
      <Link className="text-sm" href="/contact">
        Contact and map
      </Link>
    </div>
  )
}
