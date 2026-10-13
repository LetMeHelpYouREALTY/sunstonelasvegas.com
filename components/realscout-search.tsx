import Link from 'next/link'

import { AgentCredit } from '@/components/editorial'

type RealScoutSearchProps = {
  heading: string
}

/**
 * Placeholder for the RealScout search widget.
 * The widget script is not loaded until a project key is configured.
 */
export function RealScoutSearch({ heading }: RealScoutSearchProps) {
  return (
    <section
      className="border border-border bg-card px-6 py-10 sm:px-10"
      aria-labelledby="realscout-heading"
    >
      <p className="eyebrow">Listing search</p>
      <h2
        id="realscout-heading"
        className="mt-3 font-heading text-4xl text-foreground"
      >
        {heading}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        The RealScout search panel belongs here. It is not connected yet, so
        this box is not a live MLS feed.
      </p>
      <label
        className="mt-8 block text-xs uppercase tracking-[0.18em] text-muted-foreground"
        htmlFor="realscout-query"
      >
        Sunstone or Capella search
      </label>
      <input
        id="realscout-query"
        name="q"
        disabled
        placeholder="Search connects when RealScout is installed"
        className="field mt-2"
      />
      <div className="mt-6">
        <Link className="btn" href="/contact">
          Ask for a Capella search
        </Link>
      </div>
      <AgentCredit />
    </section>
  )
}
