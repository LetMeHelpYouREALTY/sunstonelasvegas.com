import {
  AgentCredit,
  Answer,
  Eyebrow,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { SHEA, SUNSTONE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { CONTACT_PHONE_LINK } from '@/lib/site'
import { buildBreadcrumbList, buildWebPage } from '@/lib/structured-data'

const trilogyTitle = 'Trilogy Sunstone 55+ Home Rules'
const trilogyDescription =
  'Trilogy Sunstone is Shea’s 55+ neighborhood in Las Vegas 89143. Prices from $399,990 were on Shea’s page October 12, 2026. Read the CC&Rs.'

export const metadata = pageMeta({
  title: trilogyTitle,
  description: trilogyDescription,
  path: '/trilogy',
})

export default function TrilogyPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd id="schema-trilogy-webpage" data={buildWebPage('/trilogy', trilogyTitle, trilogyDescription)} />
      <JsonLd
        id="schema-trilogy-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Trilogy', path: '/trilogy' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>Age-restricted neighborhood</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">
          Trilogy Sunstone 55+ rules
        </h1>
        <LogoLine />
        <Answer>
          Trilogy Sunstone is a Shea Homes neighborhood in Las Vegas 89143. Shea
          labels the neighborhood 55+ on its October 12, 2026 page. Prices
          started at $399,990 for homes of 1,312 to 2,758 square feet. The exact
          occupancy formula was not printed on that page. Read the recorded
          rules before you write an offer on a lot.
        </Answer>
        <SourceLine href={SHEA}>
          Shea Homes, retrieved October 12, 2026
        </SourceLine>
      </header>
      <RealScoutOffice />

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl">What the club includes</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Shea describes the Cabochon Club as about 15,000 square feet. It
            lists a fitness center, resort pool, culinary studio, coffeehouse,
            pickleball courts, bocce courts, and an event venue.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-3xl">Gatehouse and dues</h2>
          <AgentCredit />
          <p className="mt-3 text-muted-foreground">
            Shea’s directions send tours through a welcome center and gatehouse
            at 9560 Lapis Ln. Dues were not printed. The master-plan site also
            calls this neighborhood age-qualified.
          </p>
          <SourceLine href={SUNSTONE}>
            sunstonelv.com, retrieved October 12, 2026
          </SourceLine>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl">
          Capella is a different neighborhood
        </h2>
        <AgentCredit />
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Woodside does not label Capella as 55+. Do not apply Trilogy’s age
          rule to a Capella lot unless the recorded documents say so.
        </p>
        <a className="btn mt-6" href={CONTACT_PHONE_LINK}>
          Call Dr. Jan Duffy about a tour
        </a>
      </section>
    </div>
  )
}
