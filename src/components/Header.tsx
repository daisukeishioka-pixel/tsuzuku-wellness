import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig, categories } from '@/data/siteData'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-text">
            <span className="font-serif font-light text-xl">つづく</span>
            <span className="font-sans font-light text-[0.7rem] tracking-[0.15em] ml-1 text-text-secondary">WELLNESS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="text-xs tracking-[0.1em] uppercase text-text-secondary hover:text-text transition-colors duration-300"
            >
              {cat.nameEn}
            </Link>
          ))}
          <a href="/#articles" className="btn-primary !py-2 !px-5 !text-[0.65rem]">
            記事を読む
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="text-sm tracking-[0.05em] text-text-secondary hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <hr className="border-border my-1" />
            <a
              href={siteConfig.resistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-light"
            >
              監修: RESIST公式サイト →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
