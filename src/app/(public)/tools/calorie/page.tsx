import type { Metadata } from 'next'
import CaloriePageClient from './CaloriePageClient'

export const metadata: Metadata = {
  title: 'カロリー計算ツール',
  description:
    '基礎代謝量（BMR）と1日の消費カロリー（TDEE）を計算。目標に合わせた摂取カロリーとPFCバランスの目安がわかります。',
  alternates: {
    canonical: 'https://tsuzuku-wellness.vercel.app/tools/calorie',
  },
}

export default function CaloriePage() {
  return <CaloriePageClient />
}
