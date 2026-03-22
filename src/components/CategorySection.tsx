import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { categories } from '@/data/siteData'

const categoryImages: Record<string, string> = {
  training: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop',
  pilates: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop',
  nutrition: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=800&fit=crop',
  selfcare: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop',
  habits: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop',
  stories: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop',
}

export function CategorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main mb-10">
        <p className="eyebrow">Categories</p>
        <h2 className="heading-serif text-section text-text">
          あなたの「つづく」を見つける
        </h2>
      </div>

      {/* Horizontal scroll carousel — Equinox style */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-6 md:px-12 pb-4" style={{ minWidth: 'max-content' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                to={`/category/${cat.slug}`}
                className="group relative block w-[260px] md:w-[300px] overflow-hidden"
              >
                {/* Image with 3:4 portrait ratio */}
                <div className="aspect-[3/4] overflow-hidden bg-dark-soft">
                  <img
                    src={categoryImages[cat.slug]}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white font-light mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-3 line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center text-xs tracking-[0.1em] uppercase text-white/60 group-hover:text-white transition-colors duration-500">
                    Explore
                    <ArrowRight size={12} className="ml-2 transition-transform duration-500 group-hover:translate-x-1" />
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
