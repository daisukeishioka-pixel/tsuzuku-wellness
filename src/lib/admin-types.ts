export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string | null
  body: string | null
  category_slug: string
  tags: string[]
  image_url: string | null
  author: string
  reading_time: number
  status: 'draft' | 'published'
  published_at: string | null
  views: number
  seo_title: string | null
  seo_description: string | null
  ogp_image_url: string | null
  created_at: string
  updated_at: string
}

export interface ArticleSection {
  id: string
  article_id: string
  heading: string
  body: string
  sort_order: number
  created_at: string
}

export interface ArticleTakeaway {
  id: string
  article_id: string
  content: string
  sort_order: number
}

export interface News {
  id: string
  slug: string
  title: string
  body: string | null
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  slug: string
  title: string
  body: string | null
  event_date: string | null
  location: string | null
  event_type: 'offline' | 'online'
  capacity: number | null
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  slug: string
  name: string
  name_en: string
  description: string | null
  sort_order: number
  created_at: string
}
