import { HeroSection } from '@/components/HeroSection'
import { TrustBadges } from '@/components/TrustBadges'
import { CategorySection } from '@/components/CategorySection'
import { FeaturedArticles } from '@/components/FeaturedArticles'
import { HowItWorks } from '@/components/HowItWorks'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <CategorySection />
      <FeaturedArticles />
      <HowItWorks />
      <FAQSection />
      <CTASection />
    </>
  )
}
