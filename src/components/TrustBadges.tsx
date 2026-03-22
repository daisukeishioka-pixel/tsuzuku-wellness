import { Shield, BookOpen, Heart, Clock } from 'lucide-react'
import { trustBadges } from '@/data/siteData'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={15} strokeWidth={1.5} />,
  BookOpen: <BookOpen size={15} strokeWidth={1.5} />,
  Heart: <Heart size={15} strokeWidth={1.5} />,
  Clock: <Clock size={15} strokeWidth={1.5} />,
}

export function TrustBadges() {
  return (
    <section className="bg-bg-cream/60 border-y border-border/50">
      <div className="container-main px-5 md:px-12 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-text-secondary">
              <span className="text-primary/60">{iconMap[badge.icon]}</span>
              <span className="text-[0.7rem] tracking-[0.03em]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
