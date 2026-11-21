import Image from 'next/image'

import { CalendlyCta } from '@/components/calendly-cta'
import { AgentCredit, Answer, Eyebrow, LogoLine } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { RealScoutAfterHero } from '@/components/realscout-office'
import { pageMeta } from '@/lib/metadata'
import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  AGENT_PORTRAIT,
  CONTACT_ADDRESS,
  CONTACT_PHONE_LINK,
  SALES_OFFICE_ADDRESS,
} from '@/lib/site'
import {
  buildBreadcrumbList,
  buildProfilePage,
  buildWebPage,
} from '@/lib/structured-data'

const aboutTitle = 'About Dr. Jan Duffy | Sunstone Woodside'
const aboutDescription =
  'Dr. Jan Duffy, REALTOR®, 35 years in Las Vegas, works Capella at Sunstone and Sunstone Woodside Homes in Las Vegas 89143.'

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
          src={AGENT_PORTRAIT}
          alt={`Portrait of ${AGENT_NAME}`}
          width={640}
          height={640}
          sizes="(min-width: 768px) 16rem, 12rem"
          className="h-48 w-48 rounded-full md:h-64 md:w-64"
          priority
        />
        <div className="grid gap-4">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-heading text-5xl sm:text-6xl">
            About Dr. Jan Duffy
          </h1>
          <LogoLine />
          <Answer>
            {`${AGENT_NAME} is a Las Vegas ${AGENT_CREDENTIAL} with 35 years in Las Vegas. She works Capella at Sunstone and Sunstone Woodside Homes in Las Vegas 89143. This page does not publish a sales total. The published address is ${CONTACT_ADDRESS}. Book Calendly for a valuation or tour.`}
          </Answer>
          <AgentCredit />
        </div>
      </header>
      <RealScoutAfterHero />
      <section>
        <h2 className="font-heading text-3xl">Sales office</h2>
        <AgentCredit />
        <p className="mt-3 max-w-3xl text-muted-foreground">
          The builder’s Capella sales office is {SALES_OFFICE_ADDRESS}.
        </p>
        <a className="btn mt-6" href={CONTACT_PHONE_LINK}>
          Call Dr. Jan Duffy
        </a>
        <div className="mt-8">
          <CalendlyCta
            kind="buyer"
            content="about-sales-office"
            also={['seller', 'showing']}
          />
        </div>
      </section>
      <section>
        <h2 className="font-heading text-3xl">Book with Dr. Jan Duffy</h2>
        <AgentCredit />
        <p className="mt-3 max-w-3xl text-muted-foreground">
          No contact forms on this site. Use Calendly for buyer, seller,
          showing, or market calls.
        </p>
        <div className="mt-6">
          <CalendlyCta
            kind="seller"
            content="about-valuation"
            also={['buyer', 'market', 'zoom']}
          />
        </div>
      </section>
    </div>
  )
}
