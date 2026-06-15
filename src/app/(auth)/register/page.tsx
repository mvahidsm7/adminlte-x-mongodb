import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const metadata: Metadata = { title: 'Create Account — AdminLTE' }

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-md bg-mongo-teal-deep flex items-center justify-center">
            <span className="text-mongo-green font-bold text-sm select-none">A</span>
          </div>
          <span className="text-xl font-semibold text-ink">AdminLTE</span>
        </div>

        <Card>
          <CardBody>
            <h1 className="text-xl font-bold text-ink mb-1">Create account</h1>
            <p className="text-sm text-steel mb-6">Join us today, it&apos;s free</p>

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
              <Link href="/login" className="text-mongo-green-dark font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
