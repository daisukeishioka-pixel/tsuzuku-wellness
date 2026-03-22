import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/siteData'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-text pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-text-light transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-2 font-display">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            よくある質問
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
