import { HeroSection } from '@/components/HeroSection'
import { TrustBadges } from '@/components/TrustBadges'
import { PhilosophySection } from '@/components/PhilosophySection'
import { CategorySection } from '@/components/CategorySection'
import { FeaturedArticles } from '@/components/FeaturedArticles'
import { SupervisionSection } from '@/components/SupervisionSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <PhilosophySection />
      <CategorySection />
      <FeaturedArticles />
      <SupervisionSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
