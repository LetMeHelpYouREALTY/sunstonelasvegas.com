import { notFound, permanentRedirect } from 'next/navigation'

// Former service-area pages (pre-October 2026 site). Only areas that still
// have an equivalent page on this Sunstone site are redirected; the rest 404.
const MOVED: Record<string, string> = {
  'capella-at-sunstone': '/communities/capella',
  'sunstone-master-plan': '/communities',
}

export default async function ServiceAreaRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = MOVED[slug]
  if (!destination) {
    notFound()
  }
  permanentRedirect(destination)
}
