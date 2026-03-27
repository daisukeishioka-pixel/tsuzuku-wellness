import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'つづくウェルネスのプライバシーポリシーです。個人情報の取り扱い、Cookie、アクセス解析ツールの利用について説明しています。',
  alternates: {
    canonical: 'https://tsuzuku-wellness.vercel.app/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-bg-warm border-b border-border">
        <div className="container-main px-5 md:px-12 py-16 md:py-24">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="heading-serif text-hero text-text">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main px-5 md:px-12 max-w-3xl">
          <div className="space-y-12">
            {/* Intro */}
            <div>
              <p className="text-sm text-text-secondary leading-[1.9]">
                つづくウェルネス（以下「当サイト」）は、株式会社No
                Sideが運営するウェルネスメディアです。当サイトでは、ご利用者様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定めます。
              </p>
            </div>

            {/* 個人情報の取り扱い */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                個人情報の取り扱いについて
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9] mb-4">
                当サイトでは、お問い合わせフォームをご利用いただく際に、お名前やメールアドレスなどの個人情報をご入力いただく場合があります。取得した個人情報は、お問い合わせへの回答や必要な情報のご連絡のためにのみ利用し、それ以外の目的では使用いたしません。
              </p>
              <p className="text-sm text-text-secondary leading-[1.9]">
                取得した個人情報は適切に管理し、法令に基づく場合を除き、ご本人の同意なく第三者に開示・提供することはありません。
              </p>
            </div>

            {/* Cookie */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                Cookieの利用について
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9]">
                当サイトでは、サイトの利便性向上やアクセス解析のためにCookieを使用しています。Cookieとは、ウェブサイトがブラウザに保存する小さなテキストファイルです。Cookieにより個人を特定できる情報は収集しておりません。ブラウザの設定により、Cookieの受け入れを拒否することも可能ですが、その場合、一部の機能がご利用いただけなくなる場合があります。
              </p>
            </div>

            {/* アクセス解析 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                アクセス解析ツールについて
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9] mb-4">
                当サイトでは、サイトの利用状況を把握し、より良いコンテンツを提供するために、以下のアクセス解析ツールを使用しています。
              </p>
              <div className="space-y-4">
                <div className="p-5 bg-bg-warm">
                  <h3 className="text-sm font-medium text-text mb-2">
                    Google Analytics 4（GA4）
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.9]">
                    Googleが提供するアクセス解析ツールです。トラフィックデータの収集のためにCookieを使用していますが、このデータは匿名で収集されており、個人を特定するものではありません。詳細は
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Googleのプライバシーポリシー
                    </a>
                    をご確認ください。
                  </p>
                </div>
                <div className="p-5 bg-bg-warm">
                  <h3 className="text-sm font-medium text-text mb-2">
                    Vercel Analytics
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.9]">
                    当サイトのホスティングプラットフォームであるVercelが提供する解析ツールです。ページビューやパフォーマンスなどの匿名の利用データを収集しています。個人を特定できる情報は収集しておりません。
                  </p>
                </div>
              </div>
            </div>

            {/* お問い合わせ */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                お問い合わせについて
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9]">
                当サイトのプライバシーポリシーに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。
              </p>
            </div>

            {/* 改定 */}
            <div>
              <h2 className="heading-serif text-lg text-text mb-4">
                プライバシーポリシーの改定について
              </h2>
              <p className="text-sm text-text-secondary leading-[1.9]">
                当サイトは、必要に応じて本プライバシーポリシーを改定することがあります。改定後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
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
