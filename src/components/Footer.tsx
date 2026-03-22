import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'
import { siteConfig, categories } from '@/data/siteData'

export function Footer() {
  return (
    <footer className="bg-dark-soft text-white/50 border-t border-dark-border">
      <div className="container-main px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <span className="text-white">
                <span className="font-serif font-light text-xl">つづく</span>
                <span className="font-sans font-light text-sm tracking-[0.15em] ml-1">WELLNESS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-white/30">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.social.instagram} className="text-white/30 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href={siteConfig.social.twitter} className="text-white/30 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-5">Categories</h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/tools/bmi" className="text-sm text-white/40 hover:text-white transition-colors">BMI計算</Link></li>
              <li><Link to="/tools/calorie" className="text-sm text-white/40 hover:text-white transition-colors">カロリー計算</Link></li>
              <li><Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* RESIST */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-5">RESIST</h4>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.resistUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
                  公式サイト
                </a>
              </li>
              <li><span className="text-sm text-white/30">西新宿店 / 北浦和店</span></li>
              <li><span className="text-sm text-white/30">月額49,800円 通い放題</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} 株式会社No Side. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-white/20 hover:text-white/50 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-white/20 hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
