import { DRIVES } from '@/lib/area'

const LAS_VEGAS_CENTER = '36.1699,-115.1398'
const SUNSTONE_PIN = '36.32484,-115.30583'
const MAP_EMBED_URL = `https://maps.google.com/maps?ll=${LAS_VEGAS_CENTER}&q=${SUNSTONE_PIN}&z=9&output=embed`

export function SunstoneMap() {
  return (
    <figure className="grid gap-3">
      <iframe
        title="Map of Las Vegas with the Sunstone area marked in ZIP 89143"
        src={MAP_EMBED_URL}
        className="h-64 w-full border border-[#3a342c]"
        loading="lazy"
      />
      <figcaption className="grid gap-2 text-sm">
          <p>Las Vegas sits in the center of this map.</p>
          <p>The pin marks the Sunstone area in ZIP 89143.</p>
          <p>
            Off-peak routing on September 30, 2026 put Bellagio about 29
            minutes away. Harry Reid International Airport was about 49 minutes
            that morning.
          </p>
          <p>
            <a href={DRIVES}>Drive times measured September 30, 2026</a>
          </p>
      </figcaption>
    </figure>
  )
}
