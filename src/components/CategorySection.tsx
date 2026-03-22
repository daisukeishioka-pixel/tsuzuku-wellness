import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { categories } from '@/data/siteData'

const categoryImages: Record<string, string> = {
  movement: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=800&fit=crop',
  nutrition: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=800&fit=crop',
  rest: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=600&h=800&fit=crop',
  mind: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=800&fit=crop',
  habits: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=800&fit=crop',
  stories: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop',
}

export function CategorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main px-6 md:px-12 mb-10">
        <p className="eyebrow">Categories</p>
        <h2 className="heading-serif text-section text-text">
          あなたの暮らしに合う<br className="md:hidden" />テーマを探す
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-6 md:px-12 pb-4" style={{ minWidth: 'max-content' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link
                to={`/category/${cat.slug}`}
                className="group relative block w-[240px] md:w-[280px] overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden bg-bg-cream">
                  <img
                    src={categoryImages[cat.slug]}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white/40 mb-1">{cat.nameEn}</p>
                  <h3 className="font-serif text-lg text-white font-light mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-[0.65rem] text-white/40 leading-relaxed line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center text-[0.6rem] tracking-[0.1em] uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                    Explore
                    <ArrowRight size={10} className="ml-1.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
