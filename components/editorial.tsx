import Link from 'next/link'

import { capellaHomes, type AreaFaq } from '@/lib/area'
import {
  AGENT_CREDENTIAL,
  AGENT_LICENSE,
  AGENT_NAME,
  SITE_LOGO,
} from '@/lib/site'

export function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>
}

export function LogoLine({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm tracking-wide ${className}`.trim()}>{SITE_LOGO}</p>
  )
}

/**
 * Short credit under a heading. With `checked`, it becomes the page byline:
 * who wrote the page, the license behind it, and when the sources were read.
 */
export function AgentCredit({ checked }: { checked?: string }) {
  if (!checked) {
    return <p className="mt-3 text-sm text-muted-foreground">{AGENT_NAME}</p>
  }
  return (
    <p className="source-line">
      By {AGENT_NAME}, {AGENT_CREDENTIAL}, Nevada license {AGENT_LICENSE}.
      Sources checked {checked}.
    </p>
  )
}

export function Answer({ children }: { children: string }) {
  return <p className="answer">{children}</p>
}

export function SourceLine({
  children,
  href,
}: {
  children: string
  href: string
}) {
  return (
    <p className="source-line">
      <a href={href}>{children}</a>
    </p>
  )
}

export function TextCta({
  href,
  children,
}: {
  href: string
  children: string
}) {
  const external =
    href.startsWith('http') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:')
  if (external) {
    return (
      <a className="btn" href={href}>
        {children}
      </a>
    )
  }
  return (
    <Link className="btn" href={href}>
      {children}
    </Link>
  )
}

/**
 * Answers stay visible instead of collapsing behind <details>. Google's snippet
 * guidance (April 20, 2026) asks for content that is immediately visible, and
 * the FAQ rich result was retired May 7, 2026, so the visible text is what an
 * answer engine quotes. Each question is a heading in the page outline, and
 * each answer keeps the `.answer` class that the WebPage speakable selector
 * points at.
 */
export function FaqList({ faqs }: { faqs: AreaFaq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq) => (
        <section key={faq.question} className="py-5">
          <h3 className="font-heading text-2xl text-foreground">
            {faq.question}
          </h3>
          <p className="answer mt-3 text-muted-foreground">{faq.answer}</p>
        </section>
      ))}
    </div>
  )
}

export type RelatedLink = { label: string; href: string }

/** Localized internal links to real routes, rendered as a short list. */
export function RelatedLinks({
  heading,
  links,
}: {
  heading: string
  links: readonly RelatedLink[]
}) {
  if (links.length === 0) {
    return null
  }
  return (
    <nav aria-label={heading} className="grid gap-3">
      <h2 className="font-heading text-3xl">{heading}</h2>
      <ul className="grid gap-2 text-base">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** The Woodside-listed homes that use one Capella plan, with their pages. */
export function PlanHomes({ planSlug }: { planSlug: string }) {
  const homes = capellaHomes.filter((home) => home.planSlug === planSlug)
  if (homes.length === 0) {
    return null
  }
  return (
    <section className="grid gap-3">
      <h2 className="font-heading text-3xl">
        Which listed Capella homes use this plan?
      </h2>
      <p className="text-muted-foreground">
        Woodside listed{' '}
        {homes.length === 1 ? 'one home' : `${homes.length} homes`} on this plan
        on October 12, 2026. Each price is a builder asking price, not a closed
        sale.
      </p>
      <ul className="grid gap-2">
        {homes.map((home) => (
          <li key={home.slug}>
            <Link href={`/move-in-ready/${home.slug}`}>
              {home.plan} {home.lot}, {home.price}, {home.sqft} sq ft
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
