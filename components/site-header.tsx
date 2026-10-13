import Image from 'next/image'
import Link from 'next/link'

import { CONTACT_PHONE, CONTACT_PHONE_LINK, SITE_LOGO } from '@/lib/site'

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
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <Image
            src="/images/about/dr-jan-duffy.webp"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11"
          />
          <span className="font-heading text-xl leading-tight sm:text-2xl">
            {SITE_LOGO}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
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
