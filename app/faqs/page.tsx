import { Answer, Eyebrow, FaqList } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { sharedFaqs } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList, buildFaqPage } from '@/lib/structured-data'

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
      <Eyebrow>Questions</Eyebrow>
      <h1 className="font-heading text-5xl">Sunstone home questions</h1>
      <Answer>
        These answers cover HOA fees, Capella prices, and the 55+ label. They also cover gates, SID notes, drive times, and builders. Each answer uses a source dated September 28 through October 12, 2026. If a dollar amount was missing, the answer says so plainly.
      </Answer>
      <FaqList faqs={sharedFaqs} />
    </div>
  )
}
