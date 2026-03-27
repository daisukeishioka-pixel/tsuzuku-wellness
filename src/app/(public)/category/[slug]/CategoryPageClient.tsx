'use client'

import Link from 'next/link'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { sampleArticles } from '@/data/articles'
import { categories } from '@/data/siteData'

export default function CategoryPageClient({ slug }: { slug: string }) {
  const category = categories.find((c) => c.slug === slug)
  const articles = sampleArticles.filter((a) => a.category === slug)
  const otherCategories = categories.filter((c) => c.slug !== slug)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-text mb-4">カテゴリが見つかりません</h1>
          <Link href="/" className="text-primary text-sm hover:underline">トップに戻る</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Category header */}
      <section className="bg-bg-warm border-b border-border">
        <div className="container-main px-5 md:px-12 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-3">
              Category
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-text mb-4">
              {category.name}
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-white">
        <div className="container-main px-5 md:px-12">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
              {articles.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Link href={`/article/${article.slug}`} className="group block">
                    <div className="aspect-[16/10] overflow-hidden bg-bg-cream mb-5">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="font-serif text-xl text-text leading-snug mb-3 group-hover:text-primary transition-colors duration-500 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[0.65rem] text-text-light">
                      <span className="flex items-center gap-1">
                        <Clock size={10} />{article.readingTime}分で読める
                      </span>
                      <span>{article.publishedAt}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-text mb-3">Coming soon</p>
              <p className="text-sm text-text-secondary mb-6">
                このカテゴリの記事は現在準備中です。
              </p>
              <Link href="/" className="text-xs tracking-[0.1em] uppercase text-primary hover:underline">
                トップに戻る
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="section-padding bg-bg-warm">
        <div className="container-main px-5 md:px-12">
          <p className="eyebrow">Other Categories</p>
          <h2 className="heading-serif text-section text-text mb-10">
            他のテーマも読む
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group p-5 bg-white border border-border hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-[0.6rem] tracking-[0.15em] uppercase text-text-light mb-1">
                  {cat.nameEn}
                </p>
                <h3 className="font-serif text-base text-text group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
