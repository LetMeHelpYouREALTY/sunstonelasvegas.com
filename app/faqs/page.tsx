import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
  RelatedLinks,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { sharedFaqs } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildWebPage,
} from '@/lib/structured-data'

const faqsTitle = 'Sunstone Home Questions | 89143'
const faqsDescription =
  'Answers on Sunstone HOA fees, Capella prices, gates, SID notes, drive times, and builders. Sources dated September 28 to October 12, 2026.'

export const metadata = pageMeta({
  title: faqsTitle,
  description: faqsDescription,
  path: '/faqs',
})

export default function FaqsPage() {
  return (
    <div className="mx-auto grid max-w-3xl gap-8 px-4 py-16">
      <JsonLd
        id="schema-faqs-webpage"
        data={buildWebPage('/faqs', faqsTitle, faqsDescription)}
      />
      <JsonLd
        id="schema-faqs-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Questions', path: '/faqs' },
        ])}
      />
      <JsonLd id="schema-faqs" data={buildFaqPage(sharedFaqs)} />
      <Eyebrow>Questions</Eyebrow>
      <h1 className="font-heading text-5xl">Sunstone home questions</h1>
      <LogoLine />
      <AgentCredit checked="October 12, 2026" />
      <Answer>
        These answers cover the Sunstone master plan in Las Vegas, ZIP 89143:
        HOA fees, Capella prices, and the 55+ label. They also cover gates, SID
        notes, drive times, and builders. Each answer uses a source dated
        September 28 through October 12, 2026. If a dollar amount was missing,
        the answer says so plainly.
      </Answer>
      <RealScoutOffice />
      <FaqList faqs={sharedFaqs} />
      <RelatedLinks
        heading="Pages behind these answers"
        links={[
          {
            label: 'Sunstone neighborhoods and builders',
            href: '/communities',
          },
          {
            label: 'Capella at Sunstone prices and plans',
            href: '/communities/capella',
          },
          { label: 'Trilogy Sunstone 55+ rules', href: '/trilogy' },
          {
            label: 'Sunstone market report, October 12, 2026',
            href: '/market-report',
          },
        ]}
      />
    </div>
  )
}
