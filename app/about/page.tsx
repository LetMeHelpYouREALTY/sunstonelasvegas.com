import Image from 'next/image'

import { AgentCredit, Answer, Eyebrow, LogoLine } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutOffice } from '@/components/realscout-office'
import { ValuationForm } from '@/components/valuation-form'
import { pageMeta } from '@/lib/metadata'
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_OFFICE_ADDRESS,
} from '@/lib/site'
import {
  buildBreadcrumbList,
  buildProfilePage,
  buildWebPage,
} from '@/lib/structured-data'

const aboutTitle = 'About Dr. Jan Duffy | Sunstone'
const aboutDescription =
  'Dr. Jan Duffy, REALTOR, licensed since 2008 · 35 years in Las Vegas, works with Capella at Sunstone and the Sunstone master plan in Las Vegas 89143.'

export const metadata = pageMeta({
  title: aboutTitle,
  description: aboutDescription,
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16">
      <JsonLd
        id="schema-about-webpage"
        data={buildWebPage('/about', aboutTitle, aboutDescription)}
      />
      <JsonLd
        id="schema-about-profile"
        data={buildProfilePage('/about', aboutTitle)}
      />
      <JsonLd
        id="schema-about-breadcrumb"
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <header className="grid gap-8 md:grid-cols-[16rem_1fr] md:items-start">
        <Image
          src="/images/about/dr-jan-duffy.webp"
          alt="Portrait of Dr. Jan Duffy"
          width={640}
          height={640}
          sizes="(min-width: 768px) 16rem, 12rem"
          className="h-48 w-48 md:h-64 md:w-64"
        />
        <div className="grid gap-4">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-heading text-5xl sm:text-6xl">
            About Dr. Jan Duffy
          </h1>
          <LogoLine />
          <Answer>
            {`${AGENT_NAME} is a Las Vegas ${AGENT_CREDENTIAL} licensed since 2008 · 35 years in Las Vegas. She works with buyers and sellers in Capella at Sunstone, Las Vegas 89143. This page does not publish a sales total. The published address is ${CONTACT_ADDRESS}. Call the site number when you want a valuation.`}
          </Answer>
        </div>
      </header>
      <RealScoutOffice />
      <section>
        <h2 className="font-heading text-3xl">Sales office</h2>
        <AgentCredit />
        <p className="mt-3 max-w-3xl text-muted-foreground">
          The builder’s Capella sales office is{' '}
          {SALES_OFFICE_ADDRESS}.
        </p>
        <a className="btn mt-6" href={CONTACT_PHONE_LINK}>
          Call Dr. Jan Duffy
        </a>
      </section>
      <section>
        <h2 className="font-heading text-3xl">Valuation request</h2>
        <AgentCredit />
        <div className="mt-4 max-w-xl">
          <ValuationForm />
        </div>
      </section>
    </div>
  )
}
