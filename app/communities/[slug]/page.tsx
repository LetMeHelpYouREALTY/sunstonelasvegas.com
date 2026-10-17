import Link from 'next/link'
import { notFound } from 'next/navigation'

import { AgentCredit, Answer, Eyebrow, LogoLine, SourceLine } from '@/components/editorial'
import { JsonLd } from '@/components/json-ld'
import { collectionGuides } from '@/lib/area'
import { pageMeta } from '@/lib/metadata'
import { buildBreadcrumbList } from '@/lib/structured-data'

type CollectionPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return collectionGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params
  const guide = collectionGuides.find((item) => item.slug === slug)
  if (!guide) {
    return pageMeta({
      title: 'Collection not found',
      description: 'That Sunstone collection is not on this site.',
      path: '/communities',
    })
  }
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: guide.path,
  })
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const guide = collectionGuides.find((item) => item.slug === slug)
  if (!guide) {
    notFound()
  }

  return (
    <div className="mx-auto grid max-w-3xl gap-8 px-4 py-16">
      <JsonLd
        id={`schema-${guide.slug}-breadcrumb`}
        data={buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Neighborhoods', path: '/communities' },
          { name: guide.name, path: guide.path },
        ])}
      />
      <header className="grid gap-4">
        <Eyebrow>{guide.builder}</Eyebrow>
        <h1 className="font-heading text-5xl sm:text-6xl">{guide.name}</h1>
        <LogoLine />
        <AgentCredit checked="October 12, 2026" />
        <Answer>{guide.sentences[0]}</Answer>
      </header>
      <div className="grid gap-4 text-muted-foreground">
        {guide.sentences.slice(1).map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
      </div>
      <SourceLine href={guide.sourceHref}>{guide.sourceLabel}</SourceLine>
      <Link className="btn w-fit" href={guide.ctaHref}>
        {guide.ctaLabel}
      </Link>
      <nav aria-label={`More about ${guide.name}`} className="grid gap-3">
        <h2 className="font-heading text-3xl">More about {guide.name}</h2>
        <ul className="grid gap-2">
          {guide.related.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Other Sunstone neighborhoods" className="grid gap-3">
        <h2 className="font-heading text-3xl">Other Sunstone neighborhoods</h2>
        <ul className="grid gap-2">
          {collectionGuides
            .filter((item) => item.slug !== guide.slug)
            .map((item) => (
              <li key={item.slug}>
                <Link href={item.path}>
                  {item.name} at Sunstone, {item.builder}
                </Link>
              </li>
            ))}
          <li>
            <Link href="/trilogy">Trilogy Sunstone 55+ rules, Shea Homes</Link>
          </li>
          <li>
            <Link href="/communities">All ten Sunstone neighborhoods</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
