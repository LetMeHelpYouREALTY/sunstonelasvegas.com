'use client'

import { createElement, useEffect, type HTMLAttributes } from 'react'

import { scheduleAfterPageLoad } from '@/lib/schedule-after-load'
import { REALSCOUT_AGENT_ID } from '@/lib/site'

const REALSCOUT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js'

let realScoutRequested = false

function appendRealScoutScript() {
  if (realScoutRequested) return
  if (document.querySelector(`script[src="${REALSCOUT_SRC}"]`)) {
    realScoutRequested = true
    return
  }
  realScoutRequested = true
  const script = document.createElement('script')
  script.src = REALSCOUT_SRC
  script.async = true
  script.type = 'module'
  document.body.appendChild(script)
}

export function RealScoutOffice() {
  useEffect(() => scheduleAfterPageLoad(appendRealScoutScript), [])

  return (
    <section
      aria-label="Office listings from Dr. Jan Duffy"
      className="min-w-0"
    >
      {createElement('realscout-office-listings', {
        'agent-encoded-id': REALSCOUT_AGENT_ID,
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale',
      } as HTMLAttributes<HTMLElement>)}
    </section>
  )
}
