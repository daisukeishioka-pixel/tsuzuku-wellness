import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteData'

export function SupervisionSection() {
  return (
    <section className="section-padding bg-dark text-white overflow-hidden">
      <div className="container-main px-6 md:px-12">
        <div className="md:flex md:items-center md:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-5/12 mb-10 md:mb-0"
          >
            <div className="aspect-[3/4] overflow-hidden max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=667&fit=crop"
                alt="RESIST トレーニング風景"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:w-7/12"
          >
            <p className="eyebrow-light">Supervised by RESIST</p>
            <h2 className="heading-serif text-section text-white mb-6">
              すべての記事は、
              <br />
              現場のプロが監修。
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-lg">
              つづくウェルネスの記事は、パーソナルジム＆ピラティススタジオ「RESIST」の
              有資格トレーナーチームが監修しています。
              机上の理論ではなく、毎日クライアントと向き合う現場のプロだからこそ伝えられる、
              実践的で信頼できる情報をお届けします。
            </p>

            <div className="space-y-3 mb-10">
              {[
                'NSCA-CPT、NESTA-PFT等の有資格トレーナーが執筆・監修',
                '最新の研究論文・エビデンスに基づく情報のみ掲載',
                '西新宿・北浦和の2店舗で実践知を蓄積',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="shrink-0 text-primary mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.resistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                RESISTについて
                <ArrowRight size={16} className="ml-3" />
              </a>
              <a
                href={siteConfig.resistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                体験予約はこちら
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
