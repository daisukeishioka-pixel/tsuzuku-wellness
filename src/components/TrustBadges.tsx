import { Shield, BookOpen, Infinity, MapPin } from 'lucide-react'
import { trustBadges } from '@/data/siteData'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={16} strokeWidth={1.5} />,
  BookOpen: <BookOpen size={16} strokeWidth={1.5} />,
  Infinity: <Infinity size={16} strokeWidth={1.5} />,
  MapPin: <MapPin size={16} strokeWidth={1.5} />,
}

export function TrustBadges() {
  return (
    <section className="bg-bg-warm border-b border-border">
      <div className="container-main px-6 md:px-12 py-5">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-text-secondary"
            >
              <span className="text-primary opacity-70">{iconMap[badge.icon]}</span>
              <span className="text-xs tracking-[0.05em]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
