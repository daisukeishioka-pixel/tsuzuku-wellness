import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { sampleArticles } from '@/data/articles'
import { categories } from '@/data/siteData'

function ArticleCard({ article, index }: { article: (typeof sampleArticles)[0]; index: number }) {
  const category = categories.find((c) => c.slug === article.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
    >
      <Link to={`/article/${article.slug}`} className="group block">
        <div className="aspect-[16/10] w-full overflow-hidden bg-bg-cream mb-4">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <span className="text-[0.6rem] tracking-[0.15em] uppercase font-medium" style={{ color: category?.color }}>
          {category?.nameEn}
        </span>

        <h3 className="font-serif text-lg text-text leading-snug mt-2 mb-2 group-hover:text-primary transition-colors duration-500 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-[0.65rem] text-text-light">
          <span className="flex items-center gap-1"><Clock size={10} />{article.readingTime}分で読める</span>
          <span>{article.publishedAt}</span>
        </div>
      </Link>
    </motion.div>
  )
}

export function FeaturedArticles() {
  const featured = sampleArticles[0]
  const featuredCat = categories.find((c) => c.slug === featured.category)

  return (
    <section id="articles" className="section-padding bg-white">
      <div className="container-main px-5 md:px-12">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="eyebrow">Latest Articles</p>
            <h2 className="heading-serif text-section text-text">
              今日から始められる<br className="md:hidden" />ウェルネス
            </h2>
          </div>
          <Link
            to="/category/movement"
            className="hidden md:inline-flex items-center text-xs tracking-[0.1em] uppercase text-text-light hover:text-primary transition-colors"
          >
            すべて見る <ArrowRight size={12} className="ml-2" />
          </Link>
        </div>

        {/* Featured */}
        <Link to={`/article/${featured.slug}`} className="group block md:flex gap-6 md:gap-10 mb-10 md:mb-16">
          <div className="md:w-3/5 overflow-hidden bg-bg-cream">
            <img
              src={featured.imageUrl}
              alt={featured.title}
              className="w-full h-full min-h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/5 flex flex-col justify-center py-6 md:py-4">
            <span className="text-[0.6rem] tracking-[0.15em] uppercase font-medium" style={{ color: featuredCat?.color }}>
              {featuredCat?.nameEn}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-text leading-snug mt-3 mb-4 group-hover:text-primary transition-colors duration-500">
              {featured.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-[0.65rem] text-text-light mb-5">
              <span className="flex items-center gap-1"><Clock size={10} />{featured.readingTime}分で読める</span>
              <span>監修: RESIST トレーナーチーム</span>
            </div>
            <span className="inline-flex items-center text-xs tracking-[0.1em] uppercase text-text-light group-hover:text-primary transition-colors">
              Read more <ArrowRight size={12} className="ml-2" />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {sampleArticles.slice(1).map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
