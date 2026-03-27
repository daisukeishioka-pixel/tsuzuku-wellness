import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const GA_ID = 'G-GWM6V4J1MQ'

const BASE_URL = 'https://tsuzuku-wellness.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'つづくウェルネス | からだが変わる、習慣がつづく。',
    template: '%s | つづくウェルネス',
  },
  description:
    'つづくウェルネスは、パーソナルジムRESISTが届けるウェルネスメディア。科学的根拠に基づいたトレーニング、ピラティス、食事、セルフケアの情報で、あなたの健康習慣をサポートします。',
  verification: {
    google: 'WMO31wUcxAZsy2-c3bDhxY8IxDA8OZxR363EnSkmQm8',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'つづくウェルネス',
    title: 'つづくウェルネス | からだが変わる、習慣がつづく。',
    description:
      '健康を通じて人生の幸福を最大化する。科学的根拠に基づいたウェルネス情報メディア。',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'つづくウェルネス | からだが変わる、習慣がつづく。',
    description:
      '健康を通じて人生の幸福を最大化する。科学的根拠に基づいたウェルネス情報メディア。',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
