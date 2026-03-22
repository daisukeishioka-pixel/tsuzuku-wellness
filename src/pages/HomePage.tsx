import { HeroSection } from '@/components/HeroSection'
import { TrustBadges } from '@/components/TrustBadges'
import { PhilosophySection } from '@/components/PhilosophySection'
import { CategorySection } from '@/components/CategorySection'
import { FeaturedArticles } from '@/components/FeaturedArticles'
import { SupervisionSection } from '@/components/SupervisionSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'

export function HomePage() {
  return (
    <>
      {/* 1. White hero — wellness message first */}
      <HeroSection />

      {/* 2. Trust badges — credibility */}
      <TrustBadges />

      {/* 3. Philosophy — 4 pillars of wellness */}
      <PhilosophySection />

      {/* 4. Categories — browse topics */}
      <CategorySection />

      {/* 5. Articles — latest content */}
      <FeaturedArticles />

      {/* 6. RESIST supervision — who's behind this (later) */}
      <SupervisionSection />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. CTA — subscribe / read more */}
      <CTASection />
    </>
  )
}
