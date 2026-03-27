import type { Metadata } from 'next'
import { sampleArticles } from '@/data/articles'
import { categories } from '@/data/siteData'
import { articleContents } from '@/data/articleContent'
import ArticlePageClient from './ArticlePageClient'

const BASE_URL = 'https://tsuzuku-wellness.vercel.app'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = sampleArticles.find((a) => a.slug === slug)

  if (!article) {
    return { title: '記事が見つかりません' }
  }

  const category = categories.find((c) => c.slug === article.category)

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `${BASE_URL}/article/${slug}`,
      images: [{ url: article.imageUrl, width: 800, height: 500, alt: article.title }],
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      section: category?.name,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}/article/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return sampleArticles.map((article) => ({ slug: article.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = sampleArticles.find((a) => a.slug === slug)
  const content = slug ? articleContents[slug] : null
  const category = article ? categories.find((c) => c.slug === article.category) : null

  // JSON-LD structured data
  const jsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.imageUrl,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'つづくウェルネス',
          url: BASE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/article/${slug}`,
        },
        articleSection: category?.name,
        keywords: article.tags.join(', '),
      }
    : null

  const breadcrumbJsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'TOP',
            item: BASE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: category?.name,
            item: `${BASE_URL}/category/${article.category}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
          },
        ],
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <ArticlePageClient slug={slug} />
    </>
  )
}
