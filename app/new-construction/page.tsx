import Link from 'next/link'

import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { LENNAR, SHEA, sharedFaqs, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, buildFaqPage } from '@/lib/structured-data'

export const metadata = pageMeta({
  title: 'New Homes in Sunstone | Las Vegas',
  description:
    'New construction in Sunstone, Las Vegas 89143. Woodside, Lennar, and Shea prices retrieved October 12, 2026, including Capella from $599,950.',
  path: '/new-construction',
})

export default function NewConstructionPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-new-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'New construction', path: '/new-construction' },
        ])}
      />
      <JsonLd id="schema-new-faq" data={buildFaqPage(sharedFaqs.slice(0, 6))} />
      <header className="grid gap-4">
        <Eyebrow>New construction</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          New homes in Sunstone
        </h1>
        <LogoLine />
        <Answer>
          Three builders published Sunstone prices on October 12, 2026. Woodside
          listed Capella from $599,950 to $679,950 and called it a final
          opportunity. Lennar showed a Sunstone range of $383,990 to $966,883.
          Shea priced Trilogy from $399,990, with base incentives of $26,000 or
          $28,000 on some plans.
        </Answer>
      </header>

      <section className="grid gap-8 md:grid-cols-3">
        <article className="border border-border p-6">
          <h2 className="font-heading text-3xl">Woodside</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Capella is one story and runs 1,970 to 2,295 square feet. No dollar
            incentive was printed on that page.
          </p>
          <SourceLine href={WOODSIDE}>Retrieved October 12, 2026</SourceLine>
          <Link className="btn mt-6" href="/models">
            See Capella plans
          </Link>
        </article>
        <article className="border border-border p-6">
          <h2 className="font-heading text-3xl">Lennar</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Axel townhomes were listed from $383,990 to $462,565. Alia Estates
            were listed from $862,990 on that page. Axel’s approximate monthly
            HOA was shown as $210.
          </p>
          <SourceLine href={LENNAR}>Retrieved October 12, 2026</SourceLine>
        </article>
        <article className="border border-border p-6">
          <h2 className="font-heading text-3xl">Shea</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Trilogy is the neighborhood that Shea labels 55+. Some plans
            included a $26,000 or $28,000 base incentive that day.
          </p>
          <SourceLine href={SHEA}>Lot map stamped October 12, 2026</SourceLine>
        </article>
      </section>

      <section>
        <h2 className="font-heading text-4xl">Age rule</h2>
        <AgentCredit />
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Shea’s 55+ label applies to the Trilogy neighborhood only. Woodside
          does not put that label on Capella.
        </p>
        <Link className="btn mt-6" href="/trilogy">
          Read the Trilogy age rule
        </Link>
      </section>

      <section>
        <h2 className="font-heading text-4xl">Questions</h2>
        <AgentCredit />
        <div className="mt-6">
          <FaqList faqs={sharedFaqs.slice(0, 6)} />
        </div>
      </section>
    </div>
  )
}
