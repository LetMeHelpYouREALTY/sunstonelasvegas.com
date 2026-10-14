import { notFound, permanentRedirect } from 'next/navigation'

const legacyDestinations: Record<string, string> = {
  'capella-at-sunstone': '/communities/capella',
  'sunstone-master-plan': '/communities',
  summerlin: '/communities',
  'skye-canyon': '/communities',
  'northwest-las-vegas': '/communities',
}

type ServiceAreaPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(legacyDestinations).map((slug) => ({ slug }))
}

export default async function ServiceAreaRedirect({
  params,
}: ServiceAreaPageProps) {
  const { slug } = await params
  const destination = legacyDestinations[slug]
  if (!destination) {
    notFound()
  }
  permanentRedirect(destination)
}
