import { Shield, BookOpen, Infinity, MapPin } from 'lucide-react'
import { trustBadges } from '@/data/siteData'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  BookOpen: <BookOpen size={20} />,
  Infinity: <Infinity size={20} />,
  MapPin: <MapPin size={20} />,
}

export function TrustBadges() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-main py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-text-secondary"
            >
              <span className="text-primary">{iconMap[badge.icon]}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
