import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { sampleArticles } from '@/data/articles'
import { categories } from '@/data/siteData'

function ArticleCard({ article }: { article: (typeof sampleArticles)[0] }) {
  const category = categories.find((c) => c.slug === article.category)

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group card-hover block rounded-2xl overflow-hidden bg-white border border-border"
    >
      {/* Thumbnail placeholder */}
      <div
        className="aspect-video w-full relative overflow-hidden"
        style={{ backgroundColor: category?.color + '18' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30">{category?.emoji}</span>
        </div>
        {article.isFeatured && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white rounded-full bg-gradient-brand">
            注目
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category tag */}
        <span
          className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2"
          style={{
            color: category?.color,
            backgroundColor: category?.color + '15',
          }}
        >
          {category?.name}
        </span>

        {/* Title */}
        <h3 className="text-base font-semibold text-text leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-text-light">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readingTime}分
          </span>
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </Link>
  )
}

export function FeaturedArticles() {
  return (
    <section id="articles" className="section-padding bg-bg-warm">
      <div className="container-main">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2 font-display">
              Articles
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              最新の記事
            </h2>
          </div>
          <Link
            to="/category/training"
            className="hidden md:inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            すべて見る
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* Featured article (large) */}
        {sampleArticles.filter((a) => a.isFeatured).length > 0 && (
          <div className="mb-8">
            <Link
              to={`/article/${sampleArticles[0].slug}`}
              className="group card-hover block rounded-2xl overflow-hidden bg-white border border-border md:flex"
            >
              <div
                className="aspect-video md:aspect-auto md:w-1/2 relative overflow-hidden"
                style={{
                  backgroundColor:
                    categories.find(
                      (c) => c.slug === sampleArticles[0].category
                    )?.color + '18',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-20">
                    {
                      categories.find(
                        (c) => c.slug === sampleArticles[0].category
                      )?.emoji
                    }
                  </span>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-brand">
                  注目記事
                </span>
              </div>
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                <span className="inline-block text-xs font-medium text-primary mb-3">
                  {
                    categories.find(
                      (c) => c.slug === sampleArticles[0].category
                    )?.name
                  }
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-text leading-snug mb-3 group-hover:text-primary transition-colors">
                  {sampleArticles[0].title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {sampleArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {sampleArticles[0].readingTime}分で読める
                  </span>
                  <span>{sampleArticles[0].publishedAt}</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Mobile "see all" link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/category/training"
            className="inline-flex items-center text-sm font-medium text-primary"
          >
            すべての記事を見る
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
