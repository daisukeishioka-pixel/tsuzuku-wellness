import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #FF6B35, #E63946)' }}
      />
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-white/5" />
      </div>

      <div className="container-main relative py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
          あなたの"つづく"を、
          <br className="md:hidden" />
          一緒に見つけませんか？
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-lg mx-auto mb-10">
          運動を日常に、変化は自然に。
          <br />
          RESISTで、あなたに合ったウェルネス習慣を始めましょう。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.resistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg
                       hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            体験予約はこちら
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg
                       hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle size={18} className="mr-2" />
            LINE登録
          </a>
        </div>
      </div>
    </section>
  )
}
