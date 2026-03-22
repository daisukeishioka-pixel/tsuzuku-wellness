// ===========================================
// つづくウェルネス - Type Definitions
// ===========================================

export type CategorySlug =
  | 'training'
  | 'pilates'
  | 'nutrition'
  | 'selfcare'
  | 'habits'
  | 'stories'

export interface Category {
  slug: CategorySlug
  name: string
  nameEn: string
  emoji: string
  description: string
  color: string
}

export interface Author {
  id: string
  name: string
  role: string
  bio: string
  imageUrl?: string
  credentials: string[]
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: CategorySlug
  author: Author
  imageUrl: string
  publishedAt: string
  updatedAt?: string
  readingTime: number // minutes
  tags: string[]
  isFeatured?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface Step {
  number: number
  title: string
  description: string
  icon?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface SiteConfig {
  name: string
  nameEn: string
  tagline: string
  description: string
  url: string
  resistUrl: string
  lineUrl: string
  social: {
    instagram?: string
    twitter?: string
    youtube?: string
  }
}
