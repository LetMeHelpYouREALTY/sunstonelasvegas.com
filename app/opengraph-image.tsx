import { ImageResponse } from 'next/og'

export const alt = 'Sunstone Woodside Homes by Dr. Jan Duffy — Capella Las Vegas 89143'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1612',
          color: '#F4EFE6',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
        }}
      >
        <div style={{ color: '#C4A574', fontSize: 22, letterSpacing: 6 }}>
          LAS VEGAS 89143 · CAPELLA AT SUNSTONE
        </div>
        <div style={{ fontSize: 64, marginTop: 18 }}>Sunstone Woodside</div>
        <div style={{ fontSize: 32, marginTop: 12 }}>
          Homes by Dr. Jan Duffy
        </div>
        <div style={{ fontSize: 24, marginTop: 18, color: '#E7E0D4' }}>
          Woodside Homes · Sunstone master plan
        </div>
      </div>
    ),
    { ...size },
  )
}
