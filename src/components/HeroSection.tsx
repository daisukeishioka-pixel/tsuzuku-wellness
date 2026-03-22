import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg-warm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: 'linear-gradient(135deg, #FF6B35, #E63946)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'linear-gradient(135deg, #E63946, #FF6B35)' }}
        />
      </div>

      <div className="container-main relative py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium text-text-light tracking-wider uppercase mb-4 font-display">
            {siteConfig.nameEn}
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight mb-6">
            からだが変わる、
            <br />
            <span className="text-gradient">習慣がつづく。</span>
          </h1>

          {/* Sub copy */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
            続けるから、変わる。パーソナルジム RESIST
            が届けるウェルネスメディア。科学的根拠に基づいた情報で、あなたの健康習慣をサポートします。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#articles" className="btn-primary text-base">
              記事を読む
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href={siteConfig.resistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
            >
              RESISTを体験する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
