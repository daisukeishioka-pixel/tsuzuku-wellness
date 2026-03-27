import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'つづくウェルネス | からだが変わる、習慣がつづく。',
  description:
    'つづくウェルネスは、パーソナルジムRESISTが届けるウェルネスメディア。科学的根拠に基づいたトレーニング、ピラティス、食事、セルフケアの情報で、あなたの健康習慣をサポートします。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
