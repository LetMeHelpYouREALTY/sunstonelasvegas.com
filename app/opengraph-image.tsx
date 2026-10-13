import { ImageResponse } from 'next/og'

export const alt = 'Capella at Sunstone homes for sale in Las Vegas 89143'
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
          LAS VEGAS 89143
        </div>
        <div style={{ fontSize: 68, marginTop: 18 }}>Capella at Sunstone</div>
        <div style={{ fontSize: 32, marginTop: 12 }}>Homes for sale</div>
        <div style={{ fontSize: 28, marginTop: 18 }}>
          Sunstone | Homes by Dr. Jan Duffy
        </div>
      </div>
    ),
    { ...size },
  )
}
