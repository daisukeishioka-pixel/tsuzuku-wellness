'use client'

import { siteConfig, howItWorksSteps } from '@/data/siteData'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function HowItWorks() {
  return (
    <section className="section-padding bg-dark text-white overflow-hidden">
      <div className="container-main px-5 md:px-12">
        <div className="md:flex md:items-start md:justify-between md:gap-16">
          {/* Left: Heading */}
          <div className="md:w-2/5 mb-8 md:mb-0 md:sticky md:top-32">
            <p className="eyebrow-light">How it Works</p>
            <h2 className="heading-serif text-section text-white mb-6">
              RESISTを始める
              <br />
              3ステップ
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
              パーソナルジム＆ピラティス RESIST の体験は、カンタン3ステップ。
              あなたに合った「つづく」習慣を一緒に見つけます。
            </p>
            <a
              href={siteConfig.resistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              まずは体験する
              <ArrowRight size={16} className="ml-3" />
            </a>
          </div>

          {/* Right: Steps */}
          <div className="md:w-1/2 space-y-8 md:space-y-12">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-4 md:gap-6"
              >
                <div className="shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-lg font-serif font-light text-white/80 border border-white/20"
                  >
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-light mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
