import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const metadata: Metadata = { title: 'Create Account — AdminLTE' }

export default function RegisterV2Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-mongo-teal-deep flex-col justify-between p-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-mongo-green flex items-center justify-center">
            <span className="text-ink font-bold text-xs select-none">A</span>
          </div>
          <span className="text-white font-semibold text-[15px]">AdminLTE</span>
        </div>

        <div>
          <Sparkles className="w-12 h-12 text-mongo-green mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Build something<br />extraordinary
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Join thousands of developers using AdminLTE to ship faster with the MongoDB design system.
          </p>
        </div>

        <p className="text-white/30 text-sm">© 2026 AdminLTE. All rights reserved.</p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-[400px]">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-md bg-mongo-teal-deep flex items-center justify-center">
              <span className="text-mongo-green font-bold text-xs select-none">A</span>
            </div>
            <span className="text-ink font-semibold text-[15px]">AdminLTE</span>
          </div>

          <h1 className="text-2xl font-bold text-ink mb-1">Create account</h1>
          <p className="text-sm text-steel mb-8">Start your journey today</p>

          <form className="space-y-4">
            <Input
              label="Full name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
            />
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
              autoComplete="new-password"
              hint="At least 8 characters"
            />
            <Input
              label="Confirm password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />

            <label className="flex items-start gap-2 text-sm text-steel cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 w-4 h-4 rounded border-hairline-strong accent-mongo-green"
              />
              <span>
                I agree to the{' '}
                <Link href="#" className="text-mongo-green-dark hover:underline font-medium">
                  terms of service
                </Link>
              </span>
            </label>

            <Button variant="primary" className="w-full justify-center">
              Create account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-steel">
            Already have an account?{' '}
            <Link href="/login-v2" className="text-mongo-green-dark font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
