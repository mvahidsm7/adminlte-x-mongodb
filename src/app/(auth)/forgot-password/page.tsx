import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const metadata: Metadata = { title: 'Forgot Password — AdminLTE' }

export default function ForgotPasswordPage() {
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
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-surface-feature flex items-center justify-center">
                <Mail className="w-6 h-6 text-mongo-green-dark" />
              </div>
            </div>

            <h1 className="text-xl font-bold text-ink text-center mb-1">
              Forgot your password?
            </h1>
            <p className="text-sm text-steel text-center mb-6">
              Enter your email and we&apos;ll send you a reset link.
            </p>

            <form className="space-y-4">
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />

              <Button variant="primary" className="w-full justify-center">
                Send reset link
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-steel">
              Remember your password?{' '}
              <Link href="/login" className="text-mongo-green-dark font-medium hover:underline">
                Back to sign in
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
