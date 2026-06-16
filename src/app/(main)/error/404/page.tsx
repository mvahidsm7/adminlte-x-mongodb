import type { Metadata } from 'next'
import Link from 'next/link'
import { SearchX, Home } from 'lucide-react'

export const metadata: Metadata = { title: '404 Not Found — AdminLTE' }

export default function NotFoundShowcasePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 rounded-full bg-surface-feature flex items-center justify-center mb-6">
        <SearchX className="w-10 h-10 text-mongo-green-dark" />
      </div>
      <p className="text-6xl font-bold text-mongo-green-dark tracking-tight">404</p>
      <h1 className="text-2xl font-bold text-ink mt-4">Page Not Found</h1>
      <p className="text-sm text-steel mt-2 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved, deleted, or you may have mistyped the URL.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-mongo-green text-ink text-sm font-semibold hover:bg-mongo-green-dark hover:text-white transition-colors"
      >
        <Home className="w-4 h-4" />
        Back to Dashboard
      </Link>
    </div>
  )
}
