import { Answer, Eyebrow } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { ValuationForm } from '@/components/valuation-form'
import { pageMeta } from '@/lib/metadata'
import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  BROKERAGE_NAME,
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_OFFICE_ADDRESS,
} from '@/lib/site'
import { buildBreadcrumbList } from '@/lib/structured-data'

export const metadata = pageMeta({
  title: 'About Dr. Jan Duffy | Sunstone',
  description:
    'Dr. Jan Duffy, REALTOR, Nevada license S.0197614.LLC, works with Capella at Sunstone and the Sunstone master plan in Las Vegas 89143.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-about-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>About</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">About Dr. Jan Duffy</h1>
        <Answer>
          {`${AGENT_NAME} is a ${AGENT_CREDENTIAL} holding Nevada license ${AGENT_LICENSE}. She works with buyers and sellers in Capella at Sunstone, Las Vegas 89143. This page does not publish a sales total. The published address is ${CONTACT_ADDRESS}. Call the site number when you want a valuation.`}
        </Answer>
      </header>
      <section>
        <h2 className="font-heading text-3xl">Brokerage and office</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {BROKERAGE_NAME}. The builder’s Capella sales office is {SALES_OFFICE_ADDRESS}.
        </p>
        <a className="btn mt-6" href={CONTACT_PHONE_LINK}>
          Call {CONTACT_PHONE}
        </a>
      </section>
      <section>
        <h2 className="font-heading text-3xl">Valuation request</h2>
        <div className="mt-4 max-w-xl">
          <ValuationForm />
        </div>
      </section>
    </div>
  )
}
