import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '利用規約',
  description:
    'つづくウェルネスの利用規約です。当サイトをご利用いただく前に、必ずお読みください。',
  alternates: {
    canonical: 'https://tsuzuku-wellness.vercel.app/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-bg-warm border-b border-border">
        <div className="container-main px-5 md:px-12 py-16 md:py-24">
          <p className="eyebrow">Terms of Service</p>
          <h1 className="heading-serif text-hero text-text">利用規約</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main px-5 md:px-12 max-w-3xl">
          <div className="space-y-12">
            {/* Intro */}
            <div>
              <p className="text-sm text-text-secondary leading-[1.9]">
                本利用規約（以下「本規約」）は、株式会社No
                Sideが運営するウェルネスメディア「つづくウェルネス」（以下「当サイト」）のご利用条件を定めるものです。当サイトをご利用いただく際は、本規約に同意いただいたものとみなします。
              </p>
            </div>

            {/* 健康情報に関する免責事項 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                健康情報に関する免責事項
              </h2>
              <div className="p-5 bg-bg-warm mb-4">
                <p className="text-sm text-text-secondary leading-[1.9] font-medium">
                  当サイトに掲載されている情報は、パーソナルジムRESISTのトレーナーが監修する一般的な健康情報であり、医療行為や医学的助言を目的としたものではありません。
                </p>
              </div>
              <p className="text-sm text-text-secondary leading-[1.9] mb-4">
                健康上の問題や疾患をお持ちの方、または治療中の方は、当サイトの情報を実践する前に、必ず医師や専門家にご相談ください。当サイトの情報に基づいて行われた行動の結果について、当サイトおよび運営者は一切の責任を負いかねます。
              </p>
              <p className="text-sm text-text-secondary leading-[1.9]">
                掲載されている情報の正確性には十分配慮しておりますが、医学・健康科学の発展により、情報が最新でない場合があります。あらかじめご了承ください。
              </p>
            </div>

            {/* 著作権 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                著作権について
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9] mb-4">
                当サイトに掲載されている記事、画像、イラスト、デザインその他一切のコンテンツ（以下「コンテンツ」）の著作権は、株式会社No
                Sideまたは正当な権利を有する第三者に帰属します。
              </p>
              <p className="text-sm text-text-secondary leading-[1.9]">
                コンテンツの無断転載、複製、改変、再配布は固くお断りいたします。引用する場合は、引用元として当サイトのURLを明記し、適切な範囲内でご利用ください。
              </p>
            </div>

            {/* 利用上の制限 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                禁止事項
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9] mb-4">
                当サイトのご利用にあたり、以下の行為を禁止いたします。
              </p>
              <ul className="space-y-2">
                {[
                  '当サイトのコンテンツを無断で商用利用する行為',
                  '当サイトの情報を改変し、虚偽の情報として拡散する行為',
                  '当サイトの運営を妨害する行為',
                  '当サイトに対する不正アクセスやサーバーへの過度な負荷をかける行為',
                  '他の利用者や第三者の権利を侵害する行為',
                  '法令または公序良俗に反する行為',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-text-light text-xs mt-0.5 shrink-0">
                      &mdash;
                    </span>
                    <span className="text-sm text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* リンクについて */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                リンクについて
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9]">
                当サイトへのリンクは、原則として自由に行っていただけます。ただし、以下の場合はリンクをお断りすることがあります：当サイトの名誉や信用を損なうサイトからのリンク、フレーム内表示など当サイトのコンテンツであることが不明確になるリンク、その他当サイトが不適切と判断するリンク。
              </p>
            </div>

            {/* 免責事項 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                免責事項
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9] mb-4">
                当サイトからリンクやバナーなどで移動した外部サイトで提供される情報やサービスについて、当サイトは一切の責任を負いません。
              </p>
              <p className="text-sm text-text-secondary leading-[1.9]">
                当サイトのコンテンツは予告なく変更・削除される場合があります。また、天災、サーバー障害その他の理由により、当サイトの表示が一時的に停止する場合があります。これらに起因する損害について、当サイトおよび運営者は一切の責任を負いかねます。
              </p>
            </div>

            {/* 準拠法 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                準拠法および管轄裁判所
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9]">
                本規約の解釈は日本法に準拠するものとし、当サイトに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>

            {/* 規約の改定 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                本規約の改定について
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9]">
                当サイトは、必要に応じて本規約を改定することがあります。改定後の規約は、当ページに掲載した時点で効力を生じるものとします。重要な変更がある場合は、当サイト上でお知らせいたします。
              </p>
            </div>

            {/* 運営者情報 */}
            <div className="pt-8 border-t border-border">
              <dl className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="text-text-light shrink-0 w-24">運営者</dt>
                  <dd className="text-text-secondary">株式会社No Side</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-text-light shrink-0 w-24">サイト名</dt>
                  <dd className="text-text-secondary">
                    つづくウェルネス（TSUZUKU WELLNESS）
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-text-light shrink-0 w-24">URL</dt>
                  <dd className="text-text-secondary">
                    <a
                      href="https://tsuzuku-wellness.vercel.app"
                      className="text-primary hover:underline"
                    >
                      https://tsuzuku-wellness.vercel.app
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-text-light shrink-0 w-24">制定日</dt>
                  <dd className="text-text-secondary">2026年3月27日</dd>
                </div>
              </dl>
            </div>

            {/* Back link */}
            <div className="pt-4">
              <Link
                href="/"
                className="text-sm text-text-light hover:text-primary transition-colors"
              >
                &larr; トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
