import Link from 'next/link'

import { AgentMark, BrandLockup } from '@/components/agent-mark'
import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'

const navItems = [
  { href: '/buyers', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/services', label: 'Services' },
  { href: '/communities', label: 'Neighborhoods' },
  { href: '/woodside', label: 'Woodside' },
  { href: '/new-construction', label: 'New homes' },
  { href: '/market-report', label: 'Market' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
        <Link href="/" className="flex items-center gap-3 text-foreground no-underline">
          <AgentMark size="sm" />
          <span className="md:hidden">
            <BrandLockup compact />
          </span>
          <span className="hidden md:inline">
            <BrandLockup />
          </span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="hidden text-sm font-medium sm:inline"
          href={CONTACT_PHONE_LINK}
        >
          {CONTACT_PHONE}
        </a>
      </div>
      <details className="border-t border-border px-4 py-3 xl:hidden">
        <summary className="cursor-pointer text-sm uppercase tracking-[0.16em]">
          Menu
        </summary>
        <nav className="mt-4 grid gap-3" aria-label="Mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE}</a>
        </nav>
      </details>
    </header>
  )
}
