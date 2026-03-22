import { ArrowRight, MessageCircle, Users } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export function ArticleCTAInline() {
  return (
    <div className="my-12 p-6 md:p-8 bg-bg-cream border-l-2 border-primary">
      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-primary/60 mb-2">Community</p>
      <h4 className="font-serif text-lg text-text mb-2">
        つづくウェルネス コミュニティ
      </h4>
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        LINEで毎週のウェルネスライブ配信、全国各地でのイベント情報をお届け。
        同じ志を持つ仲間と一緒に、健康習慣を「つづける」環境がここにあります。
      </p>
      <a
        href={siteConfig.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary !text-[0.7rem] !py-3 !px-6"
      >
        <MessageCircle size={14} className="mr-2" />
        LINEでコミュニティに参加する
      </a>
    </div>
  )
}

export function ArticleCTABottom() {
  return (
    <div className="mt-16 space-y-6">
      {/* LINE Community */}
      <div className="p-6 md:p-8 bg-dark text-white">
        <div className="flex items-start gap-4">
          <Users size={24} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">Join the Community</p>
            <h4 className="font-serif text-xl text-white mb-2">
              つづくウェルネス メンバーシップ
            </h4>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              LINEコミュニティに参加すると、毎週のライブ配信で記事の内容をさらに深掘り。
              全国各地で開催するウェルネスイベントにも優先参加できます。
              一人では続かないことも、仲間となら続けられる。
            </p>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={14} className="mr-3" />
              LINE登録して参加する
            </a>
          </div>
        </div>
      </div>

      {/* RESIST */}
      <div className="p-6 md:p-8 bg-bg-warm border border-border">
        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-2">Supervised by</p>
        <h4 className="font-serif text-lg text-text mb-2">
          この記事の監修
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          パーソナルジム＆ピラティス RESIST のトレーナーチームが監修。
          記事の内容をトレーナーと一緒に実践したい方は、体験セッションをどうぞ。
        </p>
        <a
          href={siteConfig.resistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs tracking-[0.1em] uppercase text-primary hover:text-primary-dark transition-colors"
        >
          RESISTで体験する
          <ArrowRight size={12} className="ml-2" />
        </a>
      </div>
    </div>
  )
}
