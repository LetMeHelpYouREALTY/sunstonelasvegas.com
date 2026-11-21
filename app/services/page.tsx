import Link from 'next/link'

import { CalendlyCta } from '@/components/calendly-cta'
import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { PageHeroImage } from '@/components/page-media'
import { RealScoutAfterHero } from '@/components/realscout-office'
import {
  CAPELLA_CHECKED,
  hyperlocalServices,
  sharedFaqs,
} from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildServiceList,
  buildWebPage,
} from '@/lib/structured-data'

const title = 'Sunstone Woodside Homes Services | Dr. Jan Duffy'
const description =
  'Hyperlocal Capella at Sunstone services: buyer representation, seller valuation, Woodside new-construction walkthroughs, and Trilogy 55+ review by Dr. Jan Duffy.'

const serviceFaqs = sharedFaqs.filter((faq) =>
  [
    'Who represents buyers at Capella at Sunstone?',
    'How much are Capella at Sunstone homes?',
    'Is Capella at Sunstone gated?',
  ].includes(faq.question),
)

export const metadata = pageMeta({
  title,
  description,
  path: '/services',
})

export default function ServicesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-services-webpage"
        data={buildWebPage('/services', title, description)}
      />
      <JsonLd id="schema-services-list" data={buildServiceList()} />
      <JsonLd id="schema-services-faq" data={buildFaqPage(serviceFaqs)} />
      <JsonLd
        id="schema-services-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <header className="grid gap-6">
        <Eyebrow>Hyperlocal Capella services</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Sunstone Woodside Homes services
        </h1>
        <LogoLine />
        <Answer>
          Dr. Jan Duffy works Capella at Sunstone and the Sunstone Woodside
          Homes master plan in Las Vegas 89143. Every service below is scoped to
          this community — not valley-wide boilerplate. Book on Calendly; this
          site does not use contact forms.
        </Answer>
        <AgentCredit checked={CAPELLA_CHECKED} />
        <PageHeroImage imageKey="services" priority />
      </header>
      <RealScoutAfterHero />

      <section className="grid gap-8">
        <h2 className="font-heading text-4xl">What Dr. Jan Duffy handles here</h2>
        <AgentCredit />
        <ul className="grid gap-6 sm:grid-cols-2">
          {hyperlocalServices.map((service) => (
            <li
              key={service.slug}
              id={service.slug}
              className="grid gap-3 border border-border p-6"
            >
              <h3 className="font-heading text-3xl">{service.name}</h3>
              <p className="answer text-muted-foreground">{service.summary}</p>
              <Link href={service.path}>Jump to this service</Link>
            </li>
          ))}
        </ul>
        <CalendlyCta
          kind="buyer"
          content="services-list"
          heading="Book the right Capella conversation"
          also={['seller', 'showing', 'market']}
        />
      </section>

      <section className="grid gap-4" id="buyer-representation">
        <h2 className="font-heading text-4xl">Capella buyer representation</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Compare Woodside Capella lots to Lyra, Axel, Alia, and Trilogy with
          dated builder cards. You get plan sizes, asking bands, and HOA gaps —
          not a ZIP 89143 average.
        </p>
        <CalendlyCta kind="buyer" content="services-buyer" also={['showing']} />
      </section>

      <section className="grid gap-4" id="seller-valuation">
        <h2 className="font-heading text-4xl">Sunstone seller valuation</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Price a Sunstone resale against the live Capella asking list and other
          builder bands inside the master plan. Book a listing consultation —
          bring the address.
        </p>
        <CalendlyCta kind="seller" content="services-seller" also={['market']} />
      </section>

      <section className="grid gap-4" id="new-construction">
        <h2 className="font-heading text-4xl">New-construction walkthroughs</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Tour Capella with Woodside’s sales office at 9361 Blue Vega Ave.
          Confirm options, elevations, and lot orientation before you reserve.
        </p>
        <CalendlyCta
          kind="showing"
          content="services-new-construction"
          also={['buyer']}
        />
      </section>

      <section className="grid gap-4" id="trilogy-55">
        <h2 className="font-heading text-4xl">Trilogy 55+ document review</h2>
        <AgentCredit />
        <p className="answer max-w-3xl text-muted-foreground">
          Shea labels Trilogy Sunstone 55+. Capella is not labeled 55+. Read the
          recorded rule for the neighborhood you tour before you write.
        </p>
        <CalendlyCta kind="market" content="services-trilogy" also={['buyer']} />
      </section>

      <section>
        <h2 className="font-heading text-4xl">Service questions</h2>
        <AgentCredit />
        <div className="mt-6">
          <FaqList faqs={serviceFaqs} />
        </div>
      </section>
    </div>
  )
}
