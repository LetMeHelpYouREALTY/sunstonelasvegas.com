'use client'

import { useEffect, useState } from 'react'

import { DRIVES } from '@/lib/area'
import { scheduleAfterPageLoad } from '@/lib/schedule-after-load'

const LAS_VEGAS_CENTER = '36.1699,-115.1398'
const SUNSTONE_PIN = '36.32484,-115.30583'
const MAP_EMBED_URL = `https://maps.google.com/maps?ll=${LAS_VEGAS_CENTER}&q=${SUNSTONE_PIN}&z=9&output=embed`
const MAP_TITLE = 'Map of Las Vegas with the Sunstone area marked in ZIP 89143'

export function SunstoneMap() {
  const [src, setSrc] = useState<string | undefined>(undefined)

  useEffect(() => scheduleAfterPageLoad(() => setSrc(MAP_EMBED_URL)), [])

  return (
    <figure className="grid gap-3">
      <div className="h-64 w-full border border-[#3a342c]">
        {src ? (
          <iframe
            title={MAP_TITLE}
            src={src}
            className="h-full w-full"
            loading="lazy"
          />
        ) : null}
      </div>
      <figcaption className="grid gap-2 text-sm">
        <p>Las Vegas sits in the center of this map.</p>
        <p>The pin marks the Sunstone area in ZIP 89143.</p>
        <p>
          Off-peak routing on September 30, 2026 put Bellagio about 29 minutes
          away. Harry Reid International Airport was about 49 minutes that
          morning.
        </p>
        <p>
          <a href={DRIVES}>Drive times measured September 30, 2026</a>
        </p>
      </figcaption>
    </figure>
  )
}
