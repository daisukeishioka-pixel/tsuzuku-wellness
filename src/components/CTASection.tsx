import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Subtle accent glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(230,57,70,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(255,107,53,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="container-main relative px-6 md:px-12 py-section text-center">
        <p className="eyebrow-light">Start Your Journey</p>
        <h2 className="heading-serif text-section md:text-[clamp(2rem,4vw,3.5rem)] text-white mb-6 leading-tight">
          あなたの"つづく"を、
          <br />
          一緒に見つけませんか？
        </h2>
        <p className="text-sm text-white/40 max-w-md mx-auto mb-12 leading-relaxed">
          運動を日常に、変化は自然に。
          RESISTで、あなたに合ったウェルネス習慣を始めましょう。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.resistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            体験予約はこちら
            <ArrowRight size={16} className="ml-3" />
          </a>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
          >
            <MessageCircle size={14} className="mr-3" />
            LINE登録
          </a>
        </div>
      </div>
    </section>
  )
}
