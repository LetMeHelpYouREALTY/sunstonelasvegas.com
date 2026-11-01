import { permanentRedirect } from 'next/navigation'

export default function ServiceAreaRedirect() {
  permanentRedirect('/communities')
}
