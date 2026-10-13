import { DRIVES } from '@/lib/area'

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=36.32484,-115.30583&z=14&output=embed'

export function SunstoneMap() {
  return (
    <figure className="grid gap-3">
      <iframe
        title="Map of the Sunstone area in Las Vegas 89143"
        src={MAP_EMBED_URL}
        className="h-72 w-full border border-[#3a342c]"
        loading="lazy"
      />
      <figcaption className="grid gap-2 text-sm">
          <p>This map is centered on the Sunstone area in ZIP 89143.</p>
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
