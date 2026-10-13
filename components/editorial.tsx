import Link from 'next/link'

import type { AreaFaq } from '@/lib/area'
import { SITE_LOGO } from '@/lib/site'

export function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>
}

export function LogoLine({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm tracking-wide ${className}`.trim()}>{SITE_LOGO}</p>
  )
}

export function AgentCredit() {
  return <p className="mt-3 text-sm text-muted-foreground">Dr. Jan Duffy</p>
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

export function FaqList({ faqs }: { faqs: AreaFaq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="cursor-pointer font-heading text-2xl text-foreground">
            {faq.question}
          </summary>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  )
}
