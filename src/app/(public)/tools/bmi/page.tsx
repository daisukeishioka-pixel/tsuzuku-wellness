import type { Metadata } from 'next'
import BMIPageClient from './BMIPageClient'

export const metadata: Metadata = {
  title: 'BMI計算ツール',
  description:
    '身長と体重からBMI（体格指数）を簡単に計算。日本肥満学会基準の分類と適正体重もわかります。',
  alternates: {
    canonical: 'https://tsuzuku-wellness.vercel.app/tools/bmi',
  },
}

export default function BMIPage() {
  return <BMIPageClient />
}
