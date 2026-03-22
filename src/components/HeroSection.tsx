import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteData'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(255,107,53,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-main relative px-6 md:px-12 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <p className="eyebrow-light">{siteConfig.nameEn}</p>

          {/* Main heading — Serif */}
          <h1 className="heading-serif text-hero text-white mb-8">
            からだが変わる、
            <br />
            <span className="text-gradient">習慣がつづく。</span>
          </h1>

          {/* Sub copy */}
          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-12 max-w-lg font-light">
            続けるから、変わる。パーソナルジム RESIST
            が届けるウェルネスメディア。科学的根拠に基づいた情報で、あなたの健康習慣をサポートします。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#articles" className="btn-primary">
              記事を読む
              <ArrowRight size={16} className="ml-3" />
            </a>
            <a
              href={siteConfig.resistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              RESISTを体験する
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-white/20"
        />
      </motion.div>
    </section>
  )
}
