import type { Metadata } from 'next'
import { ChevronDown, Mail } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'FAQ — AdminLTE' }

const faqs = [
  {
    question: 'What is AdminLTE?',
    answer: 'AdminLTE is a fully responsive admin dashboard template built with Bootstrap 5 and Vanilla JS. This version rebuilds it in Next.js with the MongoDB design system.',
  },
  {
    question: 'Is AdminLTE free to use?',
    answer: 'Yes, AdminLTE is free and open-source. It is released under the MIT license, so you can use it in personal and commercial projects.',
  },
  {
    question: 'How do I install AdminLTE?',
    answer: 'Clone the repository, run npm install in the nextjs-app directory, then run npm run dev to start the development server on port 3000.',
  },
  {
    question: 'Can I use AdminLTE with a different backend?',
    answer: 'Absolutely. AdminLTE is a frontend template. You can connect it to any backend — REST API, GraphQL, tRPC, or serverless functions.',
  },
  {
    question: 'Does AdminLTE support dark mode?',
    answer: 'Dark mode is planned for a future release. The current MongoDB design system uses a light theme with a deep teal sidebar.',
  },
  {
    question: 'How do I customize the sidebar navigation?',
    answer: 'Edit src/lib/navigation.ts to add, remove, or reorder navigation items. The Sidebar component reads this config and renders the menu automatically.',
  },
  {
    question: 'Which browsers are supported?',
    answer: 'AdminLTE supports all modern browsers — Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.',
  },
  {
    question: 'How do I report a bug or request a feature?',
    answer: 'Open an issue on the GitHub repository. Please include steps to reproduce for bugs, or a clear description of the feature you need.',
  },
]

export default function FAQPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-ink">Frequently Asked Questions</h1>
        <p className="text-sm text-steel mt-1">Everything you need to know about AdminLTE.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            role="group"
            className="group border border-hairline rounded-lg bg-white overflow-hidden"
          >
            <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-surface transition-colors">
              <span className="text-sm font-medium text-ink">{faq.question}</span>
              <ChevronDown className="w-4 h-4 text-steel shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-4 pt-1">
              <p className="text-sm text-steel leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <Card>
        <CardBody className="text-center py-8">
          <Mail className="w-10 h-10 text-mongo-green-dark mx-auto mb-3" />
          <h2 className="text-base font-semibold text-ink mb-1">Still have questions?</h2>
          <p className="text-sm text-steel mb-4">Can&apos;t find the answer you&apos;re looking for? Get in touch with our support team.</p>
          <Button variant="primary">Contact support</Button>
        </CardBody>
      </Card>
    </div>
  )
}
