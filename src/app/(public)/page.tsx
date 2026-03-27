import { HeroSection } from '@/components/HeroSection'
import { TrustBadges } from '@/components/TrustBadges'
import { PhilosophySection } from '@/components/PhilosophySection'
import { CategorySection } from '@/components/CategorySection'
import { FeaturedArticles } from '@/components/FeaturedArticles'
import { SupervisionSection } from '@/components/SupervisionSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'
import { faqs } from '@/data/siteData'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'つづくウェルネス',
  url: 'https://tsuzuku-wellness.vercel.app',
  description:
    '健康を通じて人生の幸福を最大化するウェルネスメディア。パーソナルジムRESISTが監修。',
  founder: {
    '@type': 'Person',
    name: '石岡 大輔',
    jobTitle: 'RESIST 代表 / パーソナルトレーナー',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: '株式会社No Side',
    url: 'https://resist-official.com',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
