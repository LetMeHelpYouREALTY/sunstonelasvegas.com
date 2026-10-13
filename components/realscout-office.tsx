import { createElement, type HTMLAttributes } from 'react'

import { REALSCOUT_AGENT_ID } from '@/lib/site'

export function RealScoutOffice() {
  return (
    <section aria-label="Office listings from Dr. Jan Duffy" className="min-w-0">
      {createElement('realscout-office-listings', {
        'agent-encoded-id': REALSCOUT_AGENT_ID,
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale',
      } as HTMLAttributes<HTMLElement>)}
    </section>
  )
}
