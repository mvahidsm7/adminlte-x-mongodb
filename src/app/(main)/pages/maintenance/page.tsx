import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'Maintenance — AdminLTE' }

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 rounded-full bg-surface-feature flex items-center justify-center mb-6">
        <Wrench className="w-10 h-10 text-mongo-green-dark" />
      </div>

      <h1 className="text-3xl font-bold text-ink mb-3">Under Maintenance</h1>
      <p className="text-steel max-w-sm mb-2">
        We&apos;re performing scheduled maintenance to improve your experience.
      </p>
      <p className="text-steel max-w-sm mb-8">We&apos;ll be back soon — thank you for your patience.</p>

      <Link href="/">
        <Button variant="primary">Back to home</Button>
      </Link>
    </div>
  )
}
