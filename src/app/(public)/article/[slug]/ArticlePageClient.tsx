'use client'

import Link from 'next/link'
import { Clock, ArrowRight, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { sampleArticles } from '@/data/articles'
import { articleContents } from '@/data/articleContent'
import { categories } from '@/data/siteData'
import { ArticleCTAInline, ArticleCTABottom } from '@/components/ArticleCTA'

export default function ArticlePageClient({ slug }: { slug: string }) {
  const article = sampleArticles.find((a) => a.slug === slug)
  const content = slug ? articleContents[slug] : null
  const category = article ? categories.find((c) => c.slug === article.category) : null

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-text mb-4">記事が見つかりません</h1>
          <Link href="/" className="text-primary text-sm hover:underline">トップに戻る</Link>
        </div>
      </div>
    )
  }

  const currentIndex = sampleArticles.findIndex((a) => a.slug === slug)
  const nextArticle = sampleArticles[(currentIndex + 1) % sampleArticles.length]
  const relatedArticles = sampleArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3)

  return (
    <article className="pt-20">
      {/* Breadcrumb */}
      <div className="container-main px-5 md:px-12 py-3 md:py-4">
        <nav className="flex items-center gap-2 text-[0.65rem] text-text-light">
          <Link href="/" className="hover:text-primary transition-colors">TOP</Link>
          <span>/</span>
          <Link href={`/category/${article.category}`} className="hover:text-primary transition-colors">
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-text-secondary truncate max-w-[140px] md:max-w-[200px]">{article.title}</span>
        </nav>
      </div>

      {/* Article header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container-main px-5 md:px-12 mb-8"
      >
        <div className="max-w-3xl">
          <span
            className="text-[0.6rem] tracking-[0.15em] uppercase font-medium"
            style={{ color: category?.color }}
          >
            {category?.nameEn}
          </span>
          <h1 className="font-serif text-2xl md:text-4xl text-text leading-snug mt-3 mb-5">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-text-light mb-6">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readingTime}分で読める
            </span>
            <span>{article.publishedAt}</span>
            <span>監修: {article.author.name}</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </motion.header>

      {/* Hero image */}
      <div className="container-main px-5 md:px-12 mb-8 md:mb-12">
        <div className="max-w-4xl">
          <div className="aspect-[2/1] overflow-hidden bg-bg-cream">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="container-main px-5 md:px-12">
        <div className="max-w-3xl">
          {content ? (
            <>
              {/* Table of contents */}
              <nav className="mb-12 p-5 bg-bg-warm border border-border/50">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-3">Contents</p>
                <ol className="space-y-2">
                  {content.sections.map((section, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i}`}
                        className="text-sm text-text-secondary hover:text-primary transition-colors flex items-start gap-2"
                      >
                        <span className="text-text-light shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Sections */}
              {content.sections.map((section, i) => (
                <section key={i} id={`section-${i}`} className="mb-10">
                  <h2 className="font-serif text-xl md:text-2xl text-text mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  {section.body.split('\n\n').map((paragraph, j) => (
                    <p key={j} className="text-sm text-text-secondary leading-[1.9] mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {/* Insert inline CTA after section 3 */}
                  {i === 2 && <ArticleCTAInline />}
                </section>
              ))}

              {/* Key takeaways */}
              <div className="mb-12 p-6 bg-bg-warm border border-border/50">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-primary/60 mb-3">Key Takeaways</p>
                <h3 className="font-serif text-lg text-text mb-4">この記事のポイント</h3>
                <ul className="space-y-2">
                  {content.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="text-primary shrink-0 mt-0.5">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="text-text-light text-sm">この記事の本文は準備中です。</p>
            </div>
          )}

          {/* Supervisor card */}
          <div className="flex items-start gap-4 p-5 bg-bg-warm border border-border/50 mb-8">
            <div className="w-12 h-12 bg-bg-cream rounded-full flex items-center justify-center shrink-0">
              <span className="text-lg">👤</span>
            </div>
            <div>
              <p className="text-[0.6rem] tracking-[0.15em] uppercase text-text-light mb-1">この記事の監修</p>
              <p className="text-sm font-medium text-text">{article.author.name}</p>
              <p className="text-xs text-text-light">{article.author.role}</p>
              <p className="text-xs text-text-secondary mt-1">{article.author.credentials.join(' / ')}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.65rem] px-3 py-1 bg-bg-warm text-text-secondary border border-border/50"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mb-8">
            <Share2 size={14} className="text-text-light" />
            <span className="text-[0.65rem] text-text-light tracking-[0.1em] uppercase">Share this article</span>
          </div>

          {/* Bottom CTAs */}
          <ArticleCTABottom />
        </div>
      </div>

      {/* Related articles */}
      <section className="section-padding bg-bg-warm mt-16">
        <div className="container-main px-5 md:px-12">
          <p className="eyebrow">Related Articles</p>
          <h2 className="heading-serif text-section text-text mb-10">あわせて読みたい</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {relatedArticles.map((a) => {
              const cat = categories.find((c) => c.slug === a.category)
              return (
                <Link key={a.id} href={`/article/${a.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden bg-bg-cream mb-4">
                    <img
                      src={a.imageUrl}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[0.6rem] tracking-[0.15em] uppercase" style={{ color: cat?.color }}>
                    {cat?.nameEn}
                  </span>
                  <h3 className="font-serif text-base text-text leading-snug mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <span className="text-[0.65rem] text-text-light flex items-center gap-1">
                    <Clock size={10} />{a.readingTime}分
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Next article */}
      <div className="border-t border-border">
        <Link
          href={`/article/${nextArticle.slug}`}
          className="container-main px-5 md:px-12 py-8 flex items-center justify-between group"
        >
          <div>
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-1">Next Article</p>
            <p className="font-serif text-lg text-text group-hover:text-primary transition-colors line-clamp-1">
              {nextArticle.title}
            </p>
          </div>
          <ArrowRight size={20} className="text-text-light group-hover:text-primary transition-colors shrink-0 ml-4" />
        </Link>
      </div>
    </article>
  )
}
