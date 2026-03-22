import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/siteData'

export function CategorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2 font-display">
            Categories
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            あなたの「つづく」を見つける
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group relative p-6 md:p-8 rounded-2xl bg-bg-warm border border-transparent
                         hover:border-border hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl block mb-3">
                {cat.emoji}
              </span>
              <h3 className="text-base md:text-lg font-semibold text-text mb-1">
                {cat.name}
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-3">
                {cat.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                記事を見る
                <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
