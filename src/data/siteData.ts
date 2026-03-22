import type { SiteConfig, Category, FAQ, Step } from '@/types'

// ===========================================
// Site Configuration
// ===========================================

export const siteConfig: SiteConfig = {
  name: 'つづくウェルネス',
  nameEn: 'TSUZUKU WELLNESS',
  tagline: 'からだが変わる、習慣がつづく。',
  description:
    'つづくウェルネスは、パーソナルジムRESISTが届けるウェルネスメディア。科学的根拠に基づいたトレーニング、ピラティス、食事、セルフケアの情報で、あなたの健康習慣をサポートします。',
  url: 'https://tsuzuku-wellness.vercel.app',
  resistUrl: 'https://resist-official.com',
  lineUrl: '#', // LINE公式アカウントURL（後日設定）
  social: {
    instagram: '#',
    twitter: '#',
  },
}

// ===========================================
// Categories
// ===========================================

export const categories: Category[] = [
  {
    slug: 'training',
    name: 'トレーニング',
    nameEn: 'Training',
    emoji: '🏋️',
    description: '初心者から上級者まで、正しいフォームと効果的なメニューを紹介',
    color: '#FF6B35',
  },
  {
    slug: 'pilates',
    name: 'ピラティス',
    nameEn: 'Pilates',
    emoji: '🧘',
    description: '体幹を鍛え、姿勢を改善するピラティスの魅力をお届け',
    color: '#E63946',
  },
  {
    slug: 'nutrition',
    name: '食事・栄養',
    nameEn: 'Nutrition',
    emoji: '🍽️',
    description: '無理なく続けられる食事管理と栄養の基礎知識',
    color: '#4CAF50',
  },
  {
    slug: 'selfcare',
    name: 'セルフケア',
    nameEn: 'Self Care',
    emoji: '😌',
    description: 'ストレッチ、リカバリー、睡眠改善で毎日を快適に',
    color: '#2196F3',
  },
  {
    slug: 'habits',
    name: '習慣づくり',
    nameEn: 'Habits',
    emoji: '💡',
    description: '運動を日常に。続けるためのマインドセットとコツ',
    color: '#FF9800',
  },
  {
    slug: 'stories',
    name: '体験ストーリー',
    nameEn: 'Stories',
    emoji: '📖',
    description: 'RESISTメンバーのリアルな変化と成長の記録',
    color: '#9C27B0',
  },
]

// ===========================================
// How it Works (RESIST体験フロー)
// ===========================================

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

// ===========================================
// Trust Badges
// ===========================================

export const trustBadges = [
  { label: '有資格トレーナー監修', icon: 'Shield' },
  { label: '科学的根拠に基づく情報', icon: 'BookOpen' },
  { label: '月額49,800円 通い放題', icon: 'Infinity' },
  { label: '西新宿・北浦和 2店舗展開', icon: 'MapPin' },
]

// ===========================================
// FAQ
// ===========================================

export const faqs: FAQ[] = [
  {
    question: 'つづくウェルネスとは何ですか？',
    answer:
      'つづくウェルネスは、パーソナルジム＆ピラティススタジオ「RESIST」が運営するウェルネスメディアです。科学的根拠に基づいたトレーニング、ピラティス、食事、セルフケアの情報を発信し、運動習慣を「つづける」ためのサポートをしています。',
  },
  {
    question: 'RESISTとはどんなジムですか？',
    answer:
      'RESISTは月額49,800円の通い放題サブスクリプション型パーソナルジム＆ピラティススタジオです。1回30分のセッションで、好きなだけ通えます。現在、西新宿と北浦和に2店舗を展開しています。',
  },
  {
    question: '記事の信頼性はどのように担保されていますか？',
    answer:
      '全ての記事はRESISTの有資格トレーナーが監修しています。科学的研究やエビデンスに基づいた情報のみを掲載し、根拠のない情報は発信しません。',
  },
  {
    question: '体験予約はどこからできますか？',
    answer:
      '記事内のCTAボタンまたはRESIST公式サイト（resist-official.com）から体験予約が可能です。30秒で予約完了します。',
  },
  {
    question: 'LINE公式アカウントでは何が届きますか？',
    answer:
      '毎週1つ、カラダが変わる習慣のヒントをお届けしています。ウェルネスコラム、トレーニングTips、限定コンテンツなどを配信中です。',
  },
]
