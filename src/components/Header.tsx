import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'
import { siteConfig, categories } from '@/data/siteData'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-text">
            つづく<span className="text-gradient">ウェルネス</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <a
            href={siteConfig.resistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm !px-4 !py-2 flex items-center gap-1"
          >
            RESIST公式
            <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container-main py-4 flex flex-col gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="flex items-center gap-2 py-2 text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
            <hr className="border-border" />
            <a
              href={siteConfig.resistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-sm"
            >
              RESIST公式サイト
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
