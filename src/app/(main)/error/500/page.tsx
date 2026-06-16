'use client'
import Link from 'next/link'
import { ServerCrash, RotateCw, Home } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ServerErrorShowcasePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
        <ServerCrash className="w-10 h-10 text-red-600" />
      </div>
      <p className="text-6xl font-bold text-red-600 tracking-tight">500</p>
      <h1 className="text-2xl font-bold text-ink mt-4">Internal Server Error</h1>
      <p className="text-sm text-steel mt-2 max-w-md">
        Something went wrong on our end. We&apos;ve been notified and are working on a fix. Please try again in a moment.
      </p>
      <div className="flex items-center gap-3 mt-6">
        <Button variant="primary" onClick={() => window.location.reload()}>
          <RotateCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-hairline-strong text-ink text-sm font-semibold hover:bg-surface transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
