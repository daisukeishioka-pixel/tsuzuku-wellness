import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'
import { siteConfig, categories } from '@/data/siteData'

export function Footer() {
  return (
    <footer className="bg-dark-soft text-white/50 border-t border-dark-border">
      <div className="container-main px-5 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <span className="text-white">
                <span className="font-serif font-light text-xl">つづく</span>
                <span className="font-sans font-light text-[0.7rem] tracking-[0.15em] ml-1 text-white/40">WELLNESS</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-white/25 mb-5">
              健康を通じて、人生の幸福を最大化する。
              <br />
              科学的根拠に基づいたウェルネス情報メディア。
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.social.instagram} className="text-white/25 hover:text-white/60 transition-colors" aria-label="Instagram"><Instagram size={16} strokeWidth={1.5} /></a>
              <a href={siteConfig.social.twitter} className="text-white/25 hover:text-white/60 transition-colors" aria-label="Twitter"><Twitter size={16} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-5">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/category/${cat.slug}`} className="text-xs text-white/35 hover:text-white/70 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-5">Resources</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-xs text-white/35 hover:text-white/70 transition-colors">つづくウェルネスについて</Link></li>
              <li><Link to="/tools/bmi" className="text-xs text-white/35 hover:text-white/70 transition-colors">BMI計算</Link></li>
              <li><Link to="/tools/calorie" className="text-xs text-white/35 hover:text-white/70 transition-colors">カロリー計算</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-5">Supervision</h4>
            <ul className="space-y-2.5">
              <li><a href={siteConfig.resistUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/35 hover:text-white/70 transition-colors">RESIST 公式サイト</a></li>
              <li><span className="text-xs text-white/20">パーソナルジム＆ピラティス</span></li>
              <li><span className="text-xs text-white/20">西新宿店 / 北浦和店</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.6rem] text-white/15">
            &copy; {new Date().getFullYear()} 株式会社No Side. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[0.6rem] text-white/15 hover:text-white/40 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[0.6rem] text-white/15 hover:text-white/40 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
