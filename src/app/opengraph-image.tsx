import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'つづくウェルネス | からだが変わる、習慣がつづく。'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #FAF8F5 0%, #F5F0EB 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #FF6B35, #E63946)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 72,
            height: 72,
            borderRadius: 14,
            background: 'linear-gradient(135deg, #FF6B35, #E63946)',
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 40, color: 'white', fontWeight: 700 }}>つ</span>
        </div>

        {/* Site name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 700, color: '#2C2C2C', letterSpacing: 2 }}>
            つづく
          </span>
          <span style={{ fontSize: 24, fontWeight: 400, color: '#8A8A8A', letterSpacing: 6, textTransform: 'uppercase' }}>
            WELLNESS
          </span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: 22, color: '#6B6B6B', letterSpacing: 1, margin: 0 }}>
          からだが変わる、習慣がつづく。
        </p>

        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <span style={{ fontSize: 14, color: '#ABABAB', letterSpacing: 2 }}>
            科学的根拠に基づいたウェルネス情報メディア
          </span>
          <span style={{ fontSize: 14, color: '#CDCDCD' }}>|</span>
          <span style={{ fontSize: 14, color: '#ABABAB', letterSpacing: 1 }}>
            Supervised by RESIST
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
