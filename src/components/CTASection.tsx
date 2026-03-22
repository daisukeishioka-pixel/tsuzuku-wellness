import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export function CTASection() {
  return (
    <section className="section-padding bg-bg-cream">
      <div className="container-main px-5 md:px-12 text-center">
        <p className="eyebrow">Start Today</p>
        <h2 className="heading-serif text-section text-text mb-6 leading-tight">
          小さな一歩が、
          <br />
          あなたの人生を変えていく。
        </h2>
        <p className="text-sm text-text-secondary max-w-md mx-auto mb-10 leading-relaxed">
          つづくウェルネスの記事は、すべて無料で読めます。
          毎週更新される新着記事を、LINEでお届けします。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#articles" className="btn-primary">
            記事を読む
            <ArrowRight size={16} className="ml-3" />
          </a>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle size={14} className="mr-3" />
            LINEで新着を受け取る
          </a>
        </div>
      </div>
    </section>
  )
}
