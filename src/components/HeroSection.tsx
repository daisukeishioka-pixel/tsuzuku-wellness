import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-14 md:pt-20 md:min-h-screen md:flex md:items-center">
      <div className="container-main px-5 md:px-12 w-full py-6 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">

          {/* Image - on mobile shown first but compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-[90%] mx-auto lg:max-w-lg lg:mx-0 lg:ml-auto">
              {/* Main image - shorter on mobile */}
              <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=875&fit=crop&crop=center"
                  alt="ウェルネスイメージ"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card - inside image on mobile */}
              <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg p-3 md:p-5 md:-bottom-6 md:-left-6 md:bg-white md:shadow-2xl max-w-[160px] md:max-w-[200px]">
                <p className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-0.5">Supervised by</p>
                <p className="text-[0.65rem] md:text-sm font-serif text-text">パーソナルジム<br/>RESIST トレーナー監修</p>
              </div>
              {/* Small decorative image */}
              <div className="absolute -top-3 -right-3 w-20 h-20 md:w-28 md:h-28 overflow-hidden hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop"
                  alt="栄養イメージ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="eyebrow">Wellness for your lifetime</p>

            <h1 className="heading-serif text-[clamp(1.8rem,7vw,5rem)] leading-[1.15] text-text mb-4 md:mb-6">
              健康は、
              <br />
              いちばんの
              <br />
              <span className="text-gradient">自己投資。</span>
            </h1>

            <p className="text-[0.8rem] md:text-base text-text-secondary leading-relaxed mb-6 md:mb-10 max-w-md font-light">
              よく眠り、よく食べ、よく動き、よく休む。
              小さな習慣の積み重ねが、あなたの人生を変えていく。
              科学的根拠に基づいたウェルネス情報を、毎週お届けします。
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#articles" className="btn-primary">
                記事を読む
                <ArrowRight size={16} className="ml-3" />
              </a>
              <a href="#philosophy" className="btn-secondary">
                つづくウェルネスとは
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-text-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-text-light/30"
        />
      </motion.div>
    </section>
  )
}
