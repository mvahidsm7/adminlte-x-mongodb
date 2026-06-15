import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const metadata: Metadata = { title: 'Sign In — AdminLTE' }

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-md bg-mongo-teal-deep flex items-center justify-center">
            <span className="text-mongo-green font-bold text-sm select-none">A</span>
          </div>
          <span className="text-xl font-semibold text-ink">AdminLTE</span>
        </div>

        <Card>
          <CardBody>
            <h1 className="text-xl font-bold text-ink mb-1">Welcome back</h1>
            <p className="text-sm text-steel mb-6">Sign in to your account</p>

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
              <Link href="/register" className="text-mongo-green-dark font-medium hover:underline">
                Create one
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
