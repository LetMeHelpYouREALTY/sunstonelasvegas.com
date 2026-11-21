import Image from 'next/image'

import {
  AGENT_CREDENTIAL,
  AGENT_NAME,
  AGENT_PORTRAIT,
  AGENT_PORTRAIT_MARK,
  SITE_BRAND,
  SITE_TAGLINE,
} from '@/lib/site'

type AgentMarkProps = {
  /** Visual size for the circular portrait. */
  size?: 'sm' | 'md' | 'lg'
  /** Show brand + tagline beside the portrait. */
  showLockup?: boolean
  /** Compact credit line under a section heading. */
  credit?: boolean
}

const SIZES = {
  sm: { px: 40, className: 'h-10 w-10' },
  md: { px: 56, className: 'h-14 w-14' },
  lg: { px: 96, className: 'h-24 w-24' },
} as const

/**
 * Dr. Jan Duffy portrait mark — favicon source reused in header, footer,
 * and section bylines so Google and visitors associate every page with this
 * Capella / Sunstone Woodside agent.
 */
export function AgentMark({
  size = 'md',
  showLockup = false,
  credit = false,
}: AgentMarkProps) {
  const dim = SIZES[size]
  const src = size === 'lg' ? AGENT_PORTRAIT : AGENT_PORTRAIT_MARK

  if (credit) {
    return (
      <div className="mt-3 flex items-center gap-3">
        <Image
          src={src}
          alt={`${AGENT_NAME}, ${AGENT_CREDENTIAL}`}
          width={dim.px}
          height={dim.px}
          className={`${dim.className} rounded-full`}
        />
        <p className="text-sm text-muted-foreground">
          {AGENT_NAME}, {AGENT_CREDENTIAL}
        </p>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src={src}
        alt={`${AGENT_NAME}, ${AGENT_CREDENTIAL}`}
        width={dim.px}
        height={dim.px}
        className={`${dim.className} rounded-full`}
        priority={size === 'sm'}
      />
      {showLockup ? (
        <span className="grid leading-tight">
          <span className="font-heading text-2xl">{SITE_BRAND}</span>
          <span className="text-xs tracking-wide text-muted-foreground">
            {SITE_TAGLINE}
          </span>
        </span>
      ) : null}
    </div>
  )
}

/** Brand wordmark without portrait — for dense chrome. */
export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="grid leading-tight">
      <span
        className={`font-heading ${compact ? 'text-xl' : 'text-2xl'} leading-none`}
      >
        {SITE_BRAND}
      </span>
      <span className="mt-1 text-xs tracking-wide text-muted-foreground">
        {SITE_TAGLINE}
      </span>
    </span>
  )
}
