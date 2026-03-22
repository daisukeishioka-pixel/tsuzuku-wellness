import { siteConfig, howItWorksSteps } from '@/data/siteData'
import { ArrowRight } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2 font-display">
            How it Works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            RESISTを始める3ステップ
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            パーソナルジム＆ピラティス RESIST の体験は、カンタン3ステップ。
            あなたに合った「つづく」習慣を一緒に見つけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-4xl mx-auto">
          {howItWorksSteps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-brand text-white text-xl font-bold mb-5">
                {step.number}
              </div>

              {/* Connector line (desktop) */}
              {i < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-border" />
              )}

              <h3 className="text-lg font-semibold text-text mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={siteConfig.resistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            まずは1回、体験してみる
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
