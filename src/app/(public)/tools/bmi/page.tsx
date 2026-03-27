'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

type BMICategory = { label: string; color: string; range: string; advice: string }

const bmiCategories: BMICategory[] = [
  { label: '低体重', color: '#5C6BC0', range: '18.5未満', advice: '健康的な体重増加のために、バランスの良い食事と適度な筋力トレーニングをおすすめします。' },
  { label: '普通体重', color: '#4CAF50', range: '18.5〜24.9', advice: '健康的な範囲です。現在の生活習慣を維持しながら、運動と食事のバランスを大切にしましょう。' },
  { label: '肥満（1度）', color: '#FF9800', range: '25.0〜29.9', advice: '生活習慣の見直しで改善が期待できます。まずは日常に「歩く」を取り入れることから始めてみましょう。' },
  { label: '肥満（2度）', color: '#F44336', range: '30.0〜34.9', advice: '医療機関への相談も視野に入れつつ、食事と運動の両面からアプローチすることが大切です。' },
  { label: '肥満（3度以上）', color: '#D32F2F', range: '35.0以上', advice: '医療機関への相談をおすすめします。専門家のサポートを受けながら、無理のない範囲で取り組みましょう。' },
]

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return bmiCategories[0]
  if (bmi < 25) return bmiCategories[1]
  if (bmi < 30) return bmiCategories[2]
  if (bmi < 35) return bmiCategories[3]
  return bmiCategories[4]
}

export default function BMIPage() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<{ bmi: number; category: BMICategory; idealWeight: number } | null>(null)

  const calculate = () => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return
    const bmi = w / (h * h)
    const idealWeight = 22 * h * h
    setResult({ bmi, category: getBMICategory(bmi), idealWeight })
  }

  return (
    <div className="pt-20">
      <section className="bg-bg-warm border-b border-border">
        <div className="container-main px-5 md:px-12 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow">Health Tool</p>
            <h1 className="heading-serif text-3xl md:text-5xl text-text mb-4">BMI計算</h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
              身長と体重からBMI（体格指数）を計算します。BMIは肥満度の目安として広く使われている指標です。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main px-5 md:px-12 max-w-2xl">
          <div className="p-6 md:p-8 bg-bg-warm border border-border mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">身長 (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  className="w-full px-4 py-3 bg-white border border-border text-text text-lg font-serif focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">体重 (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="65"
                  className="w-full px-4 py-3 bg-white border border-border text-text text-lg font-serif focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <button onClick={calculate} className="btn-primary w-full justify-center">
              計算する
            </button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="p-6 md:p-8 border border-border">
                <div className="text-center mb-6">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-2">あなたのBMI</p>
                  <p className="font-serif text-4xl md:text-6xl text-text mb-2">{result.bmi.toFixed(1)}</p>
                  <span
                    className="inline-block text-xs tracking-[0.1em] uppercase px-4 py-1.5 text-white"
                    style={{ backgroundColor: result.category.color }}
                  >
                    {result.category.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-[0.6rem] tracking-[0.15em] uppercase text-text-light mb-1">適正体重 (BMI 22)</p>
                    <p className="font-serif text-2xl text-text">{result.idealWeight.toFixed(1)}<span className="text-sm ml-1">kg</span></p>
                  </div>
                  <div className="text-center">
                    <p className="text-[0.6rem] tracking-[0.15em] uppercase text-text-light mb-1">適正体重との差</p>
                    <p className="font-serif text-2xl text-text">
                      {(parseFloat(weight) - result.idealWeight) > 0 ? '+' : ''}
                      {(parseFloat(weight) - result.idealWeight).toFixed(1)}<span className="text-sm ml-1">kg</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-bg-warm">
                  <p className="text-sm text-text-secondary leading-relaxed">{result.category.advice}</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="mb-12">
            <h2 className="font-serif text-xl text-text mb-5">BMIの分類（日本肥満学会基準）</h2>
            <div className="space-y-2">
              {bmiCategories.map((cat) => (
                <div key={cat.label} className="flex items-center gap-3 py-2 border-b border-border/50">
                  <span className="w-3 h-3 shrink-0 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm text-text w-24 md:w-28 shrink-0">{cat.label}</span>
                  <span className="text-sm text-text-secondary">{cat.range}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-bg-warm border-l-2 border-text-light">
            <Info size={16} className="shrink-0 text-text-light mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed">
              BMIは身長と体重のみから算出する簡易的な指標であり、筋肉量・体脂肪率・年齢・性別などは考慮されていません。
              健康状態の正確な評価には、医療機関での検査をおすすめします。
              本ツールは情報提供を目的としたものであり、医療アドバイスの代替ではありません。
            </p>
          </div>

          <div className="mt-16">
            <p className="eyebrow">Related</p>
            <h3 className="font-serif text-lg text-text mb-4">あわせて読みたい記事</h3>
            <div className="space-y-3">
              {[
                { title: '歩くだけで幸福度が上がる？　散歩と幸福感の科学的な関係', slug: 'walking-happiness' },
                { title: '「何を食べるか」より「どう食べるか」。マインドフルイーティング入門', slug: 'mindful-eating' },
              ].map((a) => (
                <Link key={a.slug} href={`/article/${a.slug}`} className="block text-sm text-primary hover:underline">
                  → {a.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
