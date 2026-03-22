import type { Article, Author } from '@/types'

export const authors: Author[] = [
  {
    id: 'trainer-01',
    name: '石岡 大輔',
    role: 'RESIST 代表 / パーソナルトレーナー',
    bio: '株式会社No Side代表。「運動を日常に、変化は自然に」をモットーに、科学的根拠に基づいた健康情報の発信に取り組む。',
    credentials: ['NSCA-CPT', 'NESTA-PFT'],
  },
  {
    id: 'trainer-02',
    name: 'RESIST トレーナーチーム',
    role: 'パーソナルトレーナー / ピラティスインストラクター',
    bio: 'RESISTのトレーナーチーム。運動科学、栄養学、メンタルヘルスの知見を活かし、記事の監修を行う。',
    credentials: ['NSCA-CPT', 'BASI Pilates', 'NESTA-PFT'],
  },
]

export const sampleArticles: Article[] = [
  {
    id: 'art-001',
    slug: 'sleep-quality-guide',
    title: '「よく眠れた」と思える朝を取り戻す。睡眠の質を変える7つの習慣',
    excerpt:
      '睡眠時間ではなく、睡眠の「質」が人生を変える。最新の睡眠科学に基づいた、今夜から実践できる具体的な方法をお届けします。',
    content: '',
    category: 'rest',
    author: authors[1],
    imageUrl: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&h=500&fit=crop',
    publishedAt: '2026-03-20',
    readingTime: 8,
    tags: ['睡眠', '生活習慣', 'リカバリー', '自律神経'],
    isFeatured: true,
  },
  {
    id: 'art-002',
    slug: 'morning-stretch-routine',
    title: '朝5分で1日が変わる。目覚めのモーニングストレッチ',
    excerpt:
      '忙しい朝でもたった5分。身体をやさしくほぐすだけで、目覚めと集中力が変わります。',
    content: '',
    category: 'movement',
    author: authors[0],
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop',
    publishedAt: '2026-03-18',
    readingTime: 5,
    tags: ['ストレッチ', '朝活', '習慣', 'セルフケア'],
  },
  {
    id: 'art-003',
    slug: 'mindful-eating',
    title: '「何を食べるか」より「どう食べるか」。マインドフルイーティング入門',
    excerpt:
      'ダイエットの敵は食べ物ではなく、食べ方かもしれない。食事との関係を見直す、マインドフルイーティングの考え方。',
    content: '',
    category: 'nutrition',
    author: authors[1],
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
    publishedAt: '2026-03-15',
    readingTime: 7,
    tags: ['マインドフルネス', '食事', '栄養', 'メンタルヘルス'],
  },
  {
    id: 'art-004',
    slug: 'stress-breathing',
    title: '1分でできるストレスリセット。科学が証明した「呼吸法」3選',
    excerpt:
      '仕事の合間、通勤中、寝る前。たった1分の呼吸で、自律神経を整え、心を落ち着かせる方法があります。',
    content: '',
    category: 'mind',
    author: authors[1],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    publishedAt: '2026-03-12',
    readingTime: 5,
    tags: ['呼吸法', 'ストレス', '自律神経', 'メンタルヘルス'],
  },
  {
    id: 'art-005',
    slug: 'habit-stacking',
    title: '「続かない」を卒業する。ハビットスタッキングという考え方',
    excerpt:
      '新しい習慣は「意志力」ではなく「設計」で続く。行動科学に基づいた、習慣を積み重ねるテクニック。',
    content: '',
    category: 'habits',
    author: authors[0],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
    publishedAt: '2026-03-10',
    readingTime: 6,
    tags: ['習慣化', '行動科学', 'モチベーション', 'セルフマネジメント'],
  },
  {
    id: 'art-006',
    slug: 'walking-happiness',
    title: '歩くだけで幸福度が上がる？　散歩と幸福感の科学的な関係',
    excerpt:
      '1日20分の散歩が、メンタルヘルスに与える影響は想像以上。最新研究から見えてきた、歩くことの力。',
    content: '',
    category: 'movement',
    author: authors[1],
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop',
    publishedAt: '2026-03-08',
    readingTime: 5,
    tags: ['ウォーキング', '幸福', 'メンタルヘルス', '有酸素運動'],
  },
]
