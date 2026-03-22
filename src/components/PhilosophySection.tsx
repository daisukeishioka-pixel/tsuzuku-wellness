import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: '動く',
    subtitle: 'Movement',
    desc: '特別なトレーニングではなく、日常の中に「動き」を取り入れる。散歩、ストレッチ、階段。小さな動きが、からだを変えていく。',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
  },
  {
    number: '02',
    title: '食べる',
    subtitle: 'Nourish',
    desc: '制限ではなく、からだを満たす食事。何を食べるかだけでなく、どう食べるか。食事は、自分への思いやり。',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=500&fit=crop',
  },
  {
    number: '03',
    title: '休む',
    subtitle: 'Rest',
    desc: '眠ること、何もしないこと、ぼーっとすること。それも立派なウェルネス。回復なくして、成長なし。',
    image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=400&h=500&fit=crop',
  },
  {
    number: '04',
    title: 'ととのえる',
    subtitle: 'Balance',
    desc: '心とからだは、つながっている。呼吸を整え、ストレスと上手に付き合い、自分のペースを大切にする。',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop',
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding bg-bg-warm">
      <div className="container-main px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="heading-serif text-section text-text mb-6">
            健康とは、幸せに<br/>生きるための土台。
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
            ジムに通うことだけが健康ではありません。
            よく眠り、よく食べ、適度に動き、心を整える。
            その小さな積み重ねが、あなたの人生を豊かにしていく。
            私たちは、そう信じています。
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-5">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="text-[0.6rem] tracking-[0.2em] text-text-light">{pillar.number}</span>
              <h3 className="font-serif text-2xl text-text mt-1 mb-1">{pillar.title}</h3>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-primary/60 mb-3">{pillar.subtitle}</p>
              <p className="text-xs text-text-secondary leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
