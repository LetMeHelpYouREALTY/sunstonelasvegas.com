import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
  SourceLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { ValuationForm } from '@/components/valuation-form'
import { LYRA_NOTE, sharedFaqs, WOODSIDE } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildWebPage,
} from '@/lib/structured-data'

const sellFaqs = sharedFaqs.filter((faq) =>
  [
    'What are HOA fees in Capella at Sunstone?',
    'How much are Capella at Sunstone homes?',
    'Does Sunstone charge a SID or LID?',
    'How fast are Sunstone homes selling?',
    'Is Capella at Sunstone gated?',
    'Which builders are in the Sunstone master plan?',
  ].includes(faq.question),
)

const sellTitle = 'Sell My Sunstone Home | Dr. Duffy'
const sellDescription =
  'Request a valuation for a Sunstone or Capella home in Las Vegas 89143. Woodside’s October 12, 2026 list ran $599,950 to $679,950.'

export const metadata = pageMeta({
  title: sellTitle,
  description: sellDescription,
  path: '/sell',
})

export default function SellPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-sell-webpage"
        data={buildWebPage('/sell', sellTitle, sellDescription)}
      />
      <JsonLd
        id="schema-sell-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Sell', path: '/sell' },
        ])}
      />
      <JsonLd id="schema-sell-faq" data={buildFaqPage(sellFaqs)} />
      <header className="grid gap-4">
        <Eyebrow>Sellers in 89143</Eyebrow>
        <h1 className="max-w-3xl font-heading text-5xl sm:text-6xl">
          Sell my Sunstone home
        </h1>
        <LogoLine />
        <Answer>
          A Sunstone seller in Las Vegas 89143 is pricing against new Woodside,
          Lennar, and Shea homes, not only resales. On October 12, 2026,
          Woodside listed Capella from $599,950 to $679,950. No Sunstone
          closed-sale set from the last 90 days was available for this report.
          Send the address and we will price the home you actually own.
        </Answer>
        <SourceLine href={WOODSIDE}>
          Woodside asking prices, retrieved October 12, 2026
        </SourceLine>
        <AgentCredit checked="October 12, 2026" />
      </header>
      <RealScoutOffice />

      <section className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl">Request a valuation</h2>
          <AgentCredit />
          <p className="mt-4 text-muted-foreground">
            Use the address, not a community average. Dr. Jan Duffy replies by
            phone or email.
          </p>
          <div className="mt-6">
            <ValuationForm />
          </div>
        </div>
        <div className="grid gap-8">
          <div>
            <h2 className="font-heading text-3xl">Pricing against builders</h2>
            <AgentCredit />
            <p className="mt-3 text-muted-foreground">
              Capella is in a final Woodside release. Lennar still prices Axel
              from $383,990 and Alia Estates from $862,990. A resale has to sit
              next to those bands.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-3xl">Prep for these plans</h2>
            <AgentCredit />
            <p className="mt-3 text-muted-foreground">
              Capella plans are one story, 1,970 to 2,295 square feet, with
              covered patios. A Lyra tour on September 28, 2026 said that
              model’s yard was unfinished dirt. Ask what your lot includes
              before you stage the patio.
            </p>
            <SourceLine href={LYRA_NOTE}>
              Lyra yard note, September 28, 2026
            </SourceLine>
          </div>
          <div>
            <h2 className="font-heading text-3xl">HOA and disclosures</h2>
            <AgentCredit />
            <p className="mt-3 text-muted-foreground">
              Order the NRS 116.4109 resale package when you go under contract.
              It carries the dues, the gate rules, and any special assessment. A
              transfer-fee dollar amount was not on the association site on
              October 12, 2026.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-4xl">Questions sellers ask</h2>
        <AgentCredit />
        <div className="mt-6">
          <FaqList faqs={sellFaqs} />
        </div>
      </section>
    </div>
  )
}
