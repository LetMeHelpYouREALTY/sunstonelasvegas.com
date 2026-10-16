import type { Metadata } from 'next'
import Link from 'next/link'

import { AgentCredit, Eyebrow, LogoLine } from '@/components/editorial'
import {
  AGENT_NAME,
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
} from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Sunstone Las Vegas' },
  description: 'That page is not on the Sunstone Las Vegas site.',
  alternates: { canonical: './' },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-3xl gap-6 px-4 py-16">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-heading text-5xl">Page not found</h1>
      <LogoLine />
      <AgentCredit />
      <p className="text-muted-foreground">
        That address is not a page on this site.
      </p>
      <p>
        {AGENT_NAME}
        <br />
        {CONTACT_ADDRESS}
        <br />
        <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE}</a>
      </p>
      <Link className="btn w-fit" href="/">
        Back to the homepage
      </Link>
    </div>
  )
}
