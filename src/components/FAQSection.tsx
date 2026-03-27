'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/siteData'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-text pr-6 group-hover:text-primary transition-colors duration-300">
          {question}
        </span>
        <span className="shrink-0 text-text-light">
          {isOpen ? <Minus size={18} strokeWidth={1} /> : <Plus size={18} strokeWidth={1} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main px-5 md:px-12 max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-serif text-section text-text">
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
