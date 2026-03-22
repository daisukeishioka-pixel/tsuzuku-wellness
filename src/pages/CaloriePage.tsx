import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

const activityLevels = [
  { value: 1.2, label: 'ほぼ運動しない', desc: 'デスクワーク中心、運動習慣なし' },
  { value: 1.375, label: '軽い運動（週1-3回）', desc: '軽い散歩やストレッチを週数回' },
  { value: 1.55, label: '中程度の運動（週3-5回）', desc: 'ジョギングや筋トレを定期的に' },
  { value: 1.725, label: '激しい運動（週6-7回）', desc: 'ハードなトレーニングをほぼ毎日' },
  { value: 1.9, label: '非常に激しい運動', desc: 'アスリートレベルの運動量' },
]

const goals = [
  { value: -500, label: '減量（-0.5kg/週）', color: '#5C6BC0' },
  { value: -250, label: 'ゆるやかな減量（-0.25kg/週）', color: '#42A5F5' },
  { value: 0, label: '維持', color: '#4CAF50' },
  { value: 250, label: 'ゆるやかな増量（+0.25kg/週）', color: '#FF9800' },
  { value: 500, label: '増量（+0.5kg/週）', color: '#F44336' },
]

interface CalorieResult {
  bmr: number
  tdee: number
  targets: { label: string; kcal: number; color: string }[]
  macros: { protein: number; fat: number; carb: number }
}

export function CaloriePage() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [activity, setActivity] = useState(1.55)
  const [result, setResult] = useState<CalorieResult | null>(null)

  const calculate = () => {
    const a = parseInt(age), h = parseFloat(height), w = parseFloat(weight)
    if (!a || !h || !w) return

    const bmr = gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161

    const tdee = bmr * activity

    const targets = goals.map((g) => ({
      label: g.label,
      kcal: Math.round(tdee + g.value),
      color: g.color,
    }))

    const protein = Math.round(w * 1.6)
    const fat = Math.round((tdee * 0.25) / 9)
    const carbKcal = tdee - (protein * 4) - (fat * 9)
    const carb = Math.round(carbKcal / 4)

    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), targets, macros: { protein, fat, carb } })
  }

  return (
    <div className="pt-20">
      <section className="bg-bg-warm border-b border-border">
        <div className="container-main px-6 md:px-12 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow">Health Tool</p>
            <h1 className="heading-serif text-4xl md:text-5xl text-text mb-4">カロリー計算</h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
              基礎代謝量（BMR）と1日の消費カロリー（TDEE）を計算し、目標に合わせた摂取カロリーの目安を算出します。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main px-6 md:px-12 max-w-2xl">
          <div className="p-6 md:p-8 bg-bg-warm border border-border mb-8">
            {/* Gender */}
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">性別</label>
              <div className="flex gap-3">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-3 text-sm border transition-all duration-300 ${
                      gender === g
                        ? 'bg-text text-white border-text'
                        : 'bg-white text-text-secondary border-border hover:border-text-light'
                    }`}
                  >
                    {g === 'male' ? '男性' : '女性'}
                  </button>
                ))}
              </div>
            </div>

            {/* Age, Height, Weight */}
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div>
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">年齢</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30"
                  className="w-full px-3 py-3 bg-white border border-border text-text text-lg font-serif focus:outline-none focus:border-primary transition-colors text-center" />
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">身長 (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="170"
                  className="w-full px-3 py-3 bg-white border border-border text-text text-lg font-serif focus:outline-none focus:border-primary transition-colors text-center" />
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">体重 (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="65"
                  className="w-full px-3 py-3 bg-white border border-border text-text text-lg font-serif focus:outline-none focus:border-primary transition-colors text-center" />
              </div>
            </div>

            {/* Activity level */}
            <div className="mb-6">
              <label className="text-[0.65rem] tracking-[0.15em] uppercase text-text-light block mb-2">活動レベル</label>
              <div className="space-y-2">
                {activityLevels.map((al) => (
                  <button
                    key={al.value}
                    onClick={() => setActivity(al.value)}
                    className={`w-full text-left px-4 py-3 border transition-all duration-300 ${
                      activity === al.value
                        ? 'bg-text text-white border-text'
                        : 'bg-white text-text border-border hover:border-text-light'
                    }`}
                  >
                    <span className="text-sm">{al.label}</span>
                    <span className={`block text-xs mt-0.5 ${activity === al.value ? 'text-white/60' : 'text-text-light'}`}>
                      {al.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={calculate} className="btn-primary w-full justify-center">
              計算する
            </button>
          </div>

          {/* Result */}
          {result && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
              <div className="p-6 md:p-8 border border-border">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-bg-warm">
                    <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-1">基礎代謝量 (BMR)</p>
                    <p className="font-serif text-3xl text-text">{result.bmr}<span className="text-sm ml-1">kcal</span></p>
                    <p className="text-[0.6rem] text-text-light mt-1">何もしなくても消費するカロリー</p>
                  </div>
                  <div className="text-center p-4 bg-bg-warm">
                    <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-1">1日の消費カロリー (TDEE)</p>
                    <p className="font-serif text-3xl text-text">{result.tdee}<span className="text-sm ml-1">kcal</span></p>
                    <p className="text-[0.6rem] text-text-light mt-1">活動量を含む総消費カロリー</p>
                  </div>
                </div>

                {/* Goal targets */}
                <h3 className="font-serif text-lg text-text mb-4">目標別の摂取カロリー目安</h3>
                <div className="space-y-2 mb-8">
                  {result.targets.map((t) => (
                    <div key={t.label} className="flex items-center justify-between py-2.5 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                        <span className="text-sm text-text-secondary">{t.label}</span>
                      </div>
                      <span className="font-serif text-lg text-text">{t.kcal}<span className="text-xs ml-1 text-text-light">kcal</span></span>
                    </div>
                  ))}
                </div>

                {/* Macros */}
                <h3 className="font-serif text-lg text-text mb-4">PFCバランス目安（維持カロリー）</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'タンパク質', value: result.macros.protein, unit: 'g', sub: `${result.macros.protein * 4} kcal`, color: '#E63946' },
                    { label: '脂質', value: result.macros.fat, unit: 'g', sub: `${result.macros.fat * 9} kcal`, color: '#FF9800' },
                    { label: '炭水化物', value: result.macros.carb, unit: 'g', sub: `${result.macros.carb * 4} kcal`, color: '#4CAF50' },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-4 bg-bg-warm">
                      <p className="text-[0.6rem] tracking-[0.1em] uppercase mb-1" style={{ color: m.color }}>{m.label}</p>
                      <p className="font-serif text-2xl text-text">{m.value}<span className="text-xs ml-0.5">{m.unit}</span></p>
                      <p className="text-[0.6rem] text-text-light mt-0.5">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Explanation */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-text mb-4">計算式について</h2>
            <p className="text-sm text-text-secondary leading-[1.9] mb-3">
              本ツールでは、Mifflin-St Jeor式を使用して基礎代謝量（BMR）を計算しています。この式は、現在最も精度が高いとされるBMR推定式の一つです。
            </p>
            <div className="p-4 bg-bg-warm font-mono text-xs text-text-secondary leading-relaxed">
              <p>男性: BMR = 10 × 体重(kg) + 6.25 × 身長(cm) - 5 × 年齢 + 5</p>
              <p>女性: BMR = 10 × 体重(kg) + 6.25 × 身長(cm) - 5 × 年齢 - 161</p>
              <p className="mt-2">TDEE = BMR × 活動係数</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 p-4 bg-bg-warm border-l-2 border-text-light">
            <Info size={16} className="shrink-0 text-text-light mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed">
              計算結果はあくまで目安です。個人の体組成、ホルモンバランス、生活環境等により実際の値は異なります。
              減量・増量の際は、急激な変化を避け、1週間に体重の0.5-1%程度の変化を目安にすることをおすすめします。
              持病のある方や大幅な食事変更を検討される方は、医療機関にご相談ください。
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16">
            <p className="eyebrow">Related</p>
            <h3 className="font-serif text-lg text-text mb-4">あわせて読みたい記事</h3>
            <div className="space-y-3">
              {[
                { title: '「何を食べるか」より「どう食べるか」。マインドフルイーティング入門', slug: 'mindful-eating' },
                { title: '「続かない」を卒業する。ハビットスタッキングという考え方', slug: 'habit-stacking' },
              ].map((a) => (
                <Link key={a.slug} to={`/article/${a.slug}`} className="block text-sm text-primary hover:underline">
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
