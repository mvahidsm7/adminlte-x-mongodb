import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const metadata: Metadata = { title: 'Sign In — AdminLTE' }

export default function LoginV2Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left panel — dark teal */}
      <div className="hidden lg:flex lg:w-1/2 bg-mongo-teal-deep flex-col justify-between p-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-mongo-green flex items-center justify-center">
            <span className="text-ink font-bold text-xs select-none">A</span>
          </div>
          <span className="text-white font-semibold text-[15px]">AdminLTE</span>
        </div>

        <div>
          <ShieldCheck className="w-12 h-12 text-mongo-green mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Manage your workspace<br />with confidence
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            A production-ready admin dashboard built with the MongoDB design system and Next.js.
          </p>
        </div>

        <p className="text-white/30 text-sm">© 2026 AdminLTE. All rights reserved.</p>
      </div>

      {/* Right panel — white form */}
      <div className="flex flex-1 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-[380px]">
          {/* Mobile logo (hidden on lg+) */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-md bg-mongo-teal-deep flex items-center justify-center">
              <span className="text-mongo-green font-bold text-xs select-none">A</span>
            </div>
            <span className="text-ink font-semibold text-[15px]">AdminLTE</span>
          </div>

          <h1 className="text-2xl font-bold text-ink mb-1">Sign in</h1>
          <p className="text-sm text-steel mb-8">Enter your credentials to continue</p>

          <form className="space-y-4">
            <Input
              label="Email address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-steel cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-hairline-strong accent-mongo-green"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-mongo-green-dark hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Button variant="primary" className="w-full justify-center">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-steel">
            Don&apos;t have an account?{' '}
            <Link href="/register-v2" className="text-mongo-green-dark font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
