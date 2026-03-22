import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Radio, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig, categories } from '@/data/siteData'

const values = [
  {
    number: '01',
    title: '科学的根拠を大切にする',
    desc: '感覚や流行ではなく、研究やエビデンスに基づいた情報だけを発信します。根拠が曖昧な健康情報は掲載しません。',
  },
  {
    number: '02',
    title: '「続けられる」を最優先にする',
    desc: '理想論ではなく、忙しい毎日の中で実践できる方法を提案します。完璧よりも、小さな一歩を大切にします。',
  },
  {
    number: '03',
    title: '心とからだの両方を見る',
    desc: '運動や食事だけでなく、睡眠、ストレス、人間関係まで。健康を「全体」として捉え、バランスよく情報をお届けします。',
  },
  {
    number: '04',
    title: '誰にでも開かれた情報であること',
    desc: 'すべての記事は無料で公開しています。正しい健康情報は、特定の人だけのものであってはならないと考えています。',
  },
]

const timeline = [
  { year: '2024', event: 'パーソナルジム＆ピラティス RESIST 西新宿店オープン' },
  { year: '2025', event: 'RESIST 北浦和店オープン。会員向けウェルネスコラムの配信開始' },
  { year: '2026', event: 'つづくウェルネス メディアサイト公開。LINEコミュニティ開始' },
]

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-bg-warm border-b border-border">
        <div className="container-main px-6 md:px-12 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="eyebrow">About Us</p>
            <h1 className="heading-serif text-hero text-text mb-6">
              健康を通じて、
              <br />
              人生の幸福を
              <br />
              <span className="text-gradient">最大化する。</span>
            </h1>
            <p className="text-base text-text-secondary leading-relaxed">
              つづくウェルネスは、「健康は人生最大の自己投資である」という信念のもと生まれたウェルネスメディアです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-main px-6 md:px-12">
          <div className="md:flex md:gap-16 md:items-start">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="eyebrow">Our Mission</p>
              <h2 className="heading-serif text-section text-text mb-6">
                正しい知識が、<br/>行動を変える。<br/>行動が、人生を変える。
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm text-text-secondary leading-[1.9] mb-5">
                インターネットには健康情報があふれています。しかし、根拠のない情報、極端な方法、不安を煽る記事も少なくありません。
              </p>
              <p className="text-sm text-text-secondary leading-[1.9] mb-5">
                私たちは、パーソナルジム＆ピラティススタジオ「RESIST」のトレーナーとして、毎日クライアントと向き合う中で気づきました。多くの人が求めているのは、特別なメソッドではなく「信頼できる、シンプルな情報」だということに。
              </p>
              <p className="text-sm text-text-secondary leading-[1.9]">
                つづくウェルネスは、その答えです。運動、食事、睡眠、メンタルケア——生活のあらゆる面から、科学的根拠に基づいた「続けられる」健康習慣を提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-warm">
        <div className="container-main px-6 md:px-12">
          <p className="eyebrow">Our Values</p>
          <h2 className="heading-serif text-section text-text mb-12">
            私たちが大切にしていること
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-5"
              >
                <span className="text-[0.65rem] tracking-[0.2em] text-text-light shrink-0 pt-1">{v.number}</span>
                <div>
                  <h3 className="font-serif text-lg text-text mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-main px-6 md:px-12">
          <p className="eyebrow">What We Cover</p>
          <h2 className="heading-serif text-section text-text mb-10">
            6つのテーマ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group p-5 md:p-6 bg-bg-warm border border-transparent hover:border-primary/20 transition-all duration-300"
              >
                <p className="text-[0.6rem] tracking-[0.15em] uppercase text-text-light mb-1">{cat.nameEn}</p>
                <h3 className="font-serif text-base md:text-lg text-text group-hover:text-primary transition-colors mb-2">{cat.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supervision */}
      <section className="section-padding bg-dark text-white">
        <div className="container-main px-6 md:px-12">
          <div className="md:flex md:gap-16 md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=525&fit=crop"
                  alt="RESIST トレーニング風景"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="eyebrow-light">Supervised by</p>
              <h2 className="heading-serif text-section text-white mb-6">
                パーソナルジム＆ピラティス<br/>RESIST
              </h2>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                つづくウェルネスのすべての記事は、RESISTの有資格トレーナーチームが監修しています。
                西新宿と北浦和に2店舗を構え、月額49,800円の通い放題で、「続けられるフィットネス」を追求しています。
              </p>
              <div className="space-y-2 mb-8">
                {['NSCA-CPT / NESTA-PFT 有資格トレーナー在籍', '1回30分のパーソナルセッション', '月額49,800円 通い放題サブスクリプション'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="shrink-0 text-primary mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <a href={siteConfig.resistUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                RESIST公式サイト <ArrowRight size={16} className="ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-padding bg-white">
        <div className="container-main px-6 md:px-12 max-w-3xl text-center">
          <p className="eyebrow">Community</p>
          <h2 className="heading-serif text-section text-text mb-6">
            つづくウェルネス<br/>メンバーシップ
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            LINEで「つづくウェルネス」のコミュニティに参加しませんか？
            毎週のライブ配信で記事の内容をさらに深掘り。全国各地で開催するウェルネスイベントの情報もお届けします。
            一人では続かないことも、仲間となら続けられる。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: <Radio size={20} strokeWidth={1.5} />, title: '毎週ライブ配信', desc: '記事の深掘りやQ&Aをリアルタイムで' },
              { icon: <MapPin size={20} strokeWidth={1.5} />, title: '各地イベント開催', desc: '全国各地でウェルネスイベントを企画' },
              { icon: <Users size={20} strokeWidth={1.5} />, title: 'コミュニティ', desc: '同じ志を持つ仲間と繋がる' },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-bg-warm text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 text-primary mb-3">{item.icon}</span>
                <h3 className="text-sm font-medium text-text mb-1">{item.title}</h3>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            LINEで参加する <ArrowRight size={16} className="ml-3" />
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg-warm">
        <div className="container-main px-6 md:px-12 max-w-2xl">
          <p className="eyebrow">History</p>
          <h2 className="heading-serif text-section text-text mb-10">あゆみ</h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-sm font-serif text-text-light shrink-0 w-12">{t.year}</span>
                <div className="border-l border-border pl-6 pb-2">
                  <p className="text-sm text-text-secondary leading-relaxed">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
