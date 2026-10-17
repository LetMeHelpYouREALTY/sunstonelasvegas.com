import {
  AgentCredit,
  Answer,
  Eyebrow,
  FaqList,
  LogoLine,
} from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { sharedFaqs } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, buildFaqPage, buildWebPage } from '@/lib/structured-data'

export const metadata = pageMeta({
  title: 'Sunstone Home Questions | 89143',
  description:
    'Answers on Sunstone HOA fees, Capella prices, gates, SID notes, drive times, and builders. Sources dated September 28 to October 12, 2026.',
  path: '/faqs',
})

export default function FaqsPage() {
  return (
    <div className="mx-auto grid max-w-3xl gap-8 px-4 py-16">
      <JsonLd
        id="schema-faqs-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Questions', path: '/faqs' },
        ])}
      />
      <JsonLd id="schema-faqs" data={buildFaqPage(sharedFaqs)} />
      <JsonLd
        id="schema-faqs-webpage"
        data={buildWebPage({
          name: 'Sunstone Home Questions',
          description:
            'Answers on Sunstone HOA fees, Capella prices, gates, SID notes, drive times, and builders.',
          path: '/faqs',
        })}
      />
      <Eyebrow>Questions</Eyebrow>
      <h1 className="font-heading text-5xl">Sunstone home questions</h1>
      <LogoLine />
      <AgentCredit />
      <Answer>
        These answers cover HOA fees, Capella prices, and the 55+ label. They
        also cover gates, SID notes, drive times, and builders. Each answer uses
        a source dated September 28 through October 12, 2026. If a dollar amount
        was missing, the answer says so plainly.
      </Answer>
      <RealScoutOffice />
      <FaqList faqs={sharedFaqs} />
    </div>
  )
}
