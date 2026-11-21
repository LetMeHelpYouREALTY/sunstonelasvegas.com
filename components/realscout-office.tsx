import { createElement, type HTMLAttributes } from 'react'

import { REALSCOUT_AGENT_ID } from '@/lib/site'

/**
 * RealScout office-listings carousel. Place immediately below every page hero.
 */
export function RealScoutOffice() {
  return (
    <section
      aria-label="Office listings carousel from Dr. Jan Duffy"
      className="min-w-0 w-full"
    >
      <div className="mb-3">
        <p className="eyebrow">Live office listings</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Scroll the RealScout carousel for current homes from Dr. Jan Duffy’s
          office.
        </p>
      </div>
      {createElement('realscout-office-listings', {
        'agent-encoded-id': REALSCOUT_AGENT_ID,
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale',
      } as HTMLAttributes<HTMLElement>)}
    </section>
  )
}

/** Standard band that sits directly under a page hero on every route. */
export function RealScoutAfterHero() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <RealScoutOffice />
    </div>
  )
}
