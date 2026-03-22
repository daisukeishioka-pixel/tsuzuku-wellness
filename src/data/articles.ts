import type { Article, Author } from '@/types'

// ===========================================
// Authors (Trainers)
// ===========================================

export const authors: Author[] = [
  {
    id: 'trainer-01',
    name: '石岡 大輔',
    role: '代表 / パーソナルトレーナー',
    bio: '株式会社No Side代表。RESIST創業者。運動を日常に、変化は自然に。をモットーに、パーソナルジム＆ピラティススタジオを運営。',
    credentials: ['NSCA-CPT', 'NESTA-PFT'],
  },
  {
    id: 'trainer-02',
    name: 'トレーナーA',
    role: 'パーソナルトレーナー / ピラティスインストラクター',
    bio: 'RESISTトレーナー。ピラティスとファンクショナルトレーニングを専門とし、初心者から経験者まで幅広くサポート。',
    credentials: ['BASI Pilates', 'NSCA-CPT'],
  },
]

// ===========================================
// Sample Articles
// ===========================================

export const sampleArticles: Article[] = [
  {
    id: 'art-001',
    slug: 'pilates-beginners-guide',
    title: '【完全ガイド】ピラティス初心者が知っておくべき10のこと',
    excerpt:
      'ピラティスに興味があるけど、何から始めればいいかわからない。そんなあなたに、RESISTトレーナーが初心者向けの基礎知識をわかりやすく解説します。',
    content: '',
    category: 'pilates',
    author: authors[1],
    imageUrl: '/images/articles/pilates-beginner.jpg',
    publishedAt: '2026-03-20',
    readingTime: 8,
    tags: ['ピラティス', '初心者', '体幹', '姿勢改善'],
    isFeatured: true,
  },
  {
    id: 'art-002',
    slug: 'morning-stretch-routine',
    title: '朝5分でOK！目覚めが変わるモーニングストレッチ',
    excerpt:
      '忙しい朝でもたった5分でできるストレッチルーティン。1週間続けるだけで、朝の目覚めと1日のパフォーマンスが劇的に変わります。',
    content: '',
    category: 'selfcare',
    author: authors[0],
    imageUrl: '/images/articles/morning-stretch.jpg',
    publishedAt: '2026-03-18',
    readingTime: 5,
    tags: ['ストレッチ', '朝活', '習慣', 'セルフケア'],
    isFeatured: true,
  },
  {
    id: 'art-003',
    slug: 'protein-intake-guide',
    title: 'タンパク質の「本当の」摂り方｜トレーナーが教える実践ガイド',
    excerpt:
      '「プロテインを飲めばOK」は間違い。食事からのタンパク質摂取を基本に、あなたの体重・目標に合った最適な量と方法を解説します。',
    content: '',
    category: 'nutrition',
    author: authors[0],
    imageUrl: '/images/articles/protein-guide.jpg',
    publishedAt: '2026-03-15',
    readingTime: 7,
    tags: ['タンパク質', '食事管理', '栄養', 'ダイエット'],
  },
  {
    id: 'art-004',
    slug: 'exercise-habit-psychology',
    title: '運動が「続かない」本当の理由と、続く人の3つの共通点',
    excerpt:
      '行動心理学の視点から、運動習慣が続かない原因を分析。RESISTで実際に習慣化に成功したメンバーに共通する考え方を紹介します。',
    content: '',
    category: 'habits',
    author: authors[0],
    imageUrl: '/images/articles/exercise-habit.jpg',
    publishedAt: '2026-03-12',
    readingTime: 6,
    tags: ['習慣化', 'モチベーション', '行動心理学'],
  },
  {
    id: 'art-005',
    slug: 'home-training-essentials',
    title: '自宅でできる！器具なしトレーニング15選【全身メニュー】',
    excerpt:
      'ジムに行けない日も大丈夫。自宅で器具なしでできる全身トレーニングメニューを、初心者・中級者・上級者レベル別に紹介します。',
    content: '',
    category: 'training',
    author: authors[1],
    imageUrl: '/images/articles/home-training.jpg',
    publishedAt: '2026-03-10',
    readingTime: 10,
    tags: ['自宅トレーニング', '自重トレーニング', '全身', '初心者'],
  },
  {
    id: 'art-006',
    slug: 'member-story-tanaka',
    title: '「3ヶ月で-8kg」会社員Tさんが語る、RESISTで変わった日常',
    excerpt:
      '残業続きの会社員Tさん。「続けられるか不安だった」というTさんが、RESISTの通い放題プランでどう変わったのか。リアルな体験談をお届けします。',
    content: '',
    category: 'stories',
    author: authors[0],
    imageUrl: '/images/articles/member-story.jpg',
    publishedAt: '2026-03-08',
    readingTime: 5,
    tags: ['体験談', 'ダイエット', 'ビフォーアフター', '会社員'],
  },
]
