import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'
import { siteConfig, categories } from '@/data/siteData'

export function Footer() {
  return (
    <footer className="bg-bg-warm border-t border-border">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-lg font-bold text-text">
                つづく<span className="text-gradient">ウェルネス</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-text-light">
              Powered by{' '}
              <a
                href={siteConfig.resistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                RESIST
              </a>
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4">カテゴリ</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {cat.emoji} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4">ツール</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tools/bmi"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  BMI計算
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/calorie"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  カロリー計算
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  つづくウェルネスについて
                </Link>
              </li>
            </ul>
          </div>

          {/* RESIST Info */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4">
              RESIST（運営）
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.resistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  RESIST公式サイト
                </a>
              </li>
              <li>
                <span className="text-sm text-text-secondary">
                  西新宿店 / 北浦和店
                </span>
              </li>
              <li>
                <span className="text-sm text-text-secondary">
                  月額49,800円 通い放題
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light">
            © {new Date().getFullYear()} 株式会社No Side. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-text-light hover:text-primary transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              to="/terms"
              className="text-xs text-text-light hover:text-primary transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
