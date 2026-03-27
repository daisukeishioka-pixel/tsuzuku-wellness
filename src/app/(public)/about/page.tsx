import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'つづくウェルネスについて',
  description:
    '「健康は人生最大の自己投資」——つづくウェルネスは、パーソナルジムRESISTのトレーナーが監修する、科学的根拠に基づいたウェルネスメディアです。',
  alternates: {
    canonical: 'https://tsuzuku-wellness.vercel.app/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
