import type { SiteConfig, Category, FAQ, Step } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'つづくウェルネス',
  nameEn: 'TSUZUKU WELLNESS',
  tagline: 'からだが変わる、習慣がつづく。',
  description:
    'つづくウェルネスは、健康を通じて人生の幸福を最大化するためのウェルネスメディアです。運動・食事・睡眠・メンタルケアまで、科学的根拠に基づいた情報をお届けします。',
  url: 'https://tsuzuku-wellness.vercel.app',
  resistUrl: 'https://resist-official.com',
  lineUrl: '#',
  social: {
    instagram: '#',
    twitter: '#',
  },
}

export const categories: Category[] = [
  {
    slug: 'movement',
    name: '動くからだ',
    nameEn: 'Movement',
    emoji: '🏃',
    description: '日常に取り入れられる運動習慣。ストレッチから筋トレまで、無理なく続けられる方法を紹介',
    color: '#FF6B35',
  },
  {
    slug: 'nutrition',
    name: '食べるちから',
    nameEn: 'Nutrition',
    emoji: '🥗',
    description: '制限ではなく、満たす食事。栄養学の知見に基づいた、心もからだも喜ぶ食の知識',
    color: '#4CAF50',
  },
  {
    slug: 'rest',
    name: '休むじかん',
    nameEn: 'Rest & Recovery',
    emoji: '🌙',
    description: '質の高い睡眠とリカバリー。休むことも、立派なウェルネス習慣',
    color: '#5C6BC0',
  },
  {
    slug: 'mind',
    name: 'ととのえる心',
    nameEn: 'Mindfulness',
    emoji: '🧘',
    description: 'ストレスとの向き合い方、瞑想、呼吸法。心の健康が、すべての土台になる',
    color: '#AB47BC',
  },
  {
    slug: 'habits',
    name: 'つづく習慣',
    nameEn: 'Habits',
    emoji: '✨',
    description: '三日坊主を卒業する。行動科学に基づいた、習慣づくりのヒント',
    color: '#FF9800',
  },
  {
    slug: 'stories',
    name: '変わった人たち',
    nameEn: 'Stories',
    emoji: '💬',
    description: '小さな習慣で人生が変わった、リアルな体験談を集めました',
    color: '#E63946',
  },
]

export const trustBadges = [
  { label: '有資格トレーナー監修', icon: 'Shield' },
  { label: '科学的エビデンスに基づく情報', icon: 'BookOpen' },
  { label: 'すべて無料で読める', icon: 'Heart' },
  { label: '毎週更新', icon: 'Clock' },
]

export const howItWorksSteps: Step[] = [
  {
    number: 1,
    title: 'Web予約',
    description:
      'カンタン30秒で体験予約完了。ご希望の店舗・日時を選ぶだけ。',
  },
  {
    number: 2,
    title: 'カウンセリング',
    description:
      'トレーナーがあなたの目標と体の状態をヒアリング。最適なプランをご提案します。',
  },
  {
    number: 3,
    title: '体験セッション',
    description:
      '30分のパーソナルセッションを体験。あなたに合った「つづく」習慣が見つかります。',
  },
]

export const faqs: FAQ[] = [
  {
    question: 'つづくウェルネスとは何ですか？',
    answer:
      '「つづくウェルネス」は、健康を通じて人生の幸福を最大化することを目指すウェルネスメディアです。運動・食事・睡眠・メンタルケアなど、日々の暮らしに取り入れられる健康習慣を、科学的根拠に基づいて発信しています。',
  },
  {
    question: '記事は誰が監修していますか？',
    answer:
      'すべての記事は、パーソナルジム＆ピラティススタジオ「RESIST」の有資格トレーナーが監修しています。NSCA-CPT、NESTA-PFTなどの資格を持つ専門家が、最新の研究やエビデンスに基づいて内容を確認しています。',
  },
  {
    question: '記事はすべて無料で読めますか？',
    answer:
      'はい、すべての記事を無料で公開しています。健康に関する正しい情報は、誰もがアクセスできるべきだと考えています。',
  },
  {
    question: '特定の症状や病気についての医療アドバイスは受けられますか？',
    answer:
      '当メディアは健康に関する一般的な情報提供を目的としており、医療アドバイスの代替ではありません。具体的な症状や病気については、必ず医療機関にご相談ください。',
  },
  {
    question: 'トレーナーに直接相談したい場合はどうすれば良いですか？',
    answer:
      '記事を監修しているRESISTでは、体験セッションを受け付けています。記事の内容をトレーナーと一緒に実践したい方は、RESIST公式サイトから体験予約が可能です。',
  },
]
