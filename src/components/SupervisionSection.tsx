import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteData'

export function SupervisionSection() {
  return (
    <section className="section-padding bg-dark text-white overflow-hidden">
      <div className="container-main px-5 md:px-12">
        <div className="md:flex md:items-center md:gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-5/12 mb-8 md:mb-0"
          >
            <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=667&fit=crop"
                alt="RESIST トレーニング風景"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:w-7/12"
          >
            <p className="eyebrow-light">Supervised by RESIST</p>
            <h2 className="heading-serif text-[clamp(1.5rem,4vw,3rem)] leading-[1.2] text-white mb-4 md:mb-6">
              すべての記事は、
              <br />
              現場のプロが監修。
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-6 md:mb-8">
              つづくウェルネスの記事は、パーソナルジム＆ピラティススタジオ「RESIST」の
              有資格トレーナーチームが監修。毎日クライアントと向き合う現場のプロだからこそ伝えられる、
              実践的で信頼できる情報をお届けします。
            </p>

            <div className="space-y-2.5 mb-8 md:mb-10">
              {[
                'NSCA-CPT、NESTA-PFT等の有資格トレーナーが監修',
                '最新の研究論文・エビデンスに基づく情報',
                '西新宿・北浦和の2店舗で実践知を蓄積',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="shrink-0 text-primary mt-0.5" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={siteConfig.resistUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                RESISTについて <ArrowRight size={16} className="ml-3" />
              </a>
              <a href={siteConfig.resistUrl} target="_blank" rel="noopener noreferrer" className="btn-light">
                体験予約はこちら
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
