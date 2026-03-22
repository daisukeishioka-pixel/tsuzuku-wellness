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
          ? 'bg-white/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`text-lg tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-text' : 'text-white'
            }`}
          >
            <span className="font-serif font-light text-xl">つづく</span>
            <span className="font-sans font-light text-sm tracking-[0.15em] ml-1">WELLNESS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className={`text-xs tracking-[0.12em] uppercase transition-colors duration-500 hover:opacity-60 ${
                scrolled ? 'text-text-secondary' : 'text-white/70'
              }`}
            >
              {cat.nameEn}
            </Link>
          ))}
          <a
            href={siteConfig.resistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 !text-[0.7rem]"
          >
            体験予約
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-text' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark text-white">
          <nav className="px-6 py-8 flex flex-col gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="text-sm tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <hr className="border-dark-border my-2" />
            <a
              href={siteConfig.resistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              体験予約
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
