import type { Metadata } from 'next'
import { categories } from '@/data/siteData'
import CategoryPageClient from './CategoryPageClient'

const BASE_URL = 'https://tsuzuku-wellness.vercel.app'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return { title: 'カテゴリが見つかりません' }
  }

  return {
    title: `${category.name}（${category.nameEn}）`,
    description: category.description,
    openGraph: {
      type: 'website',
      title: `${category.name} | つづくウェルネス`,
      description: category.description,
      url: `${BASE_URL}/category/${slug}`,
    },
    twitter: {
      card: 'summary',
      title: `${category.name} | つづくウェルネス`,
      description: category.description,
    },
    alternates: {
      canonical: `${BASE_URL}/category/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params

  const breadcrumbJsonLd = {
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
        name: categories.find((c) => c.slug === slug)?.name,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CategoryPageClient slug={slug} />
    </>
  )
}
