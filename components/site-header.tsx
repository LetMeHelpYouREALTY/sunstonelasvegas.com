import Link from 'next/link'

import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'

const navItems = [
  { href: '/buyers', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/communities', label: 'Neighborhoods' },
  { href: '/new-construction', label: 'New homes' },
  { href: '/market-report', label: 'Market' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
        <Link href="/" className="font-heading text-2xl leading-none text-foreground">
          Dr. Jan Duffy
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="hidden text-sm font-medium sm:inline" href={CONTACT_PHONE_LINK}>
          {CONTACT_PHONE}
        </a>
      </div>
      <details className="border-t border-border px-4 py-3 lg:hidden">
        <summary className="cursor-pointer text-sm uppercase tracking-[0.16em]">Menu</summary>
        <nav className="mt-4 grid gap-3" aria-label="Mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE}</a>
          <Link href="/contact">Contact</Link>
        </nav>
      </details>
    </header>
  )
}
