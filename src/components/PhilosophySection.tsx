'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: '動く',
    subtitle: 'Movement',
    desc: '特別なトレーニングではなく、日常の中に「動き」を取り入れる。散歩、ストレッチ、階段。小さな動きが、からだを変えていく。',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=225&fit=crop',
  },
  {
    number: '02',
    title: '食べる',
    subtitle: 'Nourish',
    desc: '制限ではなく、からだを満たす食事。何を食べるかだけでなく、どう食べるか。食事は、自分への思いやり。',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=225&fit=crop',
  },
  {
    number: '03',
    title: '休む',
    subtitle: 'Rest',
    desc: '眠ること、何もしないこと、ぼーっとすること。それも立派なウェルネス。回復なくして、成長なし。',
    image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=300&h=225&fit=crop',
  },
  {
    number: '04',
    title: 'ととのえる',
    subtitle: 'Balance',
    desc: '心とからだは、つながっている。呼吸を整え、ストレスと上手に付き合い、自分のペースを大切にする。',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=225&fit=crop',
  },
  {
    number: '05',
    title: 'つづける',
    subtitle: 'Habits',
    desc: '完璧を目指さない。三日坊主でも、また始めればいい。小さな習慣を積み重ねることが、いちばんの近道。',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=225&fit=crop',
  },
]

function PillarCard({ pillar, i }: { pillar: typeof pillars[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      className="group"
    >
      <div className="aspect-[4/3] overflow-hidden mb-3 relative">
        <Image
          src={pillar.image}
          alt={pillar.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 150px, 20vw"
        />
      </div>
      <span className="text-[0.5rem] md:text-[0.55rem] tracking-[0.2em] text-text-light">{pillar.number}</span>
      <h3 className="font-serif text-base md:text-lg text-text mt-1 mb-0.5">{pillar.title}</h3>
      <p className="text-[0.5rem] md:text-[0.55rem] tracking-[0.15em] uppercase text-primary/60 mb-1.5">{pillar.subtitle}</p>
      <p className="text-[0.6rem] md:text-[0.7rem] text-text-secondary leading-relaxed">{pillar.desc}</p>
    </motion.div>
  )
}

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding bg-bg-warm">
      <div className="container-main px-5 md:px-12">
        <div className="max-w-2xl mb-10 md:mb-16">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="heading-serif text-section text-text mb-4 md:mb-6">
            健康とは、幸せに<br/>生きるための土台。
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
            ジムに通うことだけが健康ではありません。
            よく動き、よく食べ、しっかり休み、心を整え、そしてそれを続ける。
            この5つの循環が、あなたの人生を豊かにしていく。
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-5 px-5">
          <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
            {pillars.map((pillar, i) => (
              <div key={pillar.number} className="w-[150px] shrink-0">
                <PillarCard pillar={pillar} i={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 5-column grid */}
        <div className="hidden md:grid grid-cols-5 gap-4 lg:gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
