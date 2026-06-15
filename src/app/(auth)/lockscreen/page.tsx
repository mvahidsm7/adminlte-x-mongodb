import type { Metadata } from 'next'
import Link from 'next/link'
import { User } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export const metadata: Metadata = { title: 'Locked — AdminLTE' }

export default function LockscreenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-mongo-teal-deep">
      <div className="w-full max-w-[360px]">
        {/* User avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-mongo-green flex items-center justify-center mb-3 shadow-level-3">
            <User className="w-10 h-10 text-ink" />
          </div>
          <h2 className="text-lg font-semibold text-white">Admin User</h2>
          <p className="text-sm text-white/50 mt-0.5">admin@example.com</p>
        </div>

        <Card>
          <CardBody>
            <h1 className="text-base font-semibold text-ink text-center mb-4">
              Session locked
            </h1>

            <form className="space-y-4">
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <Button variant="primary" className="w-full justify-center">
                Unlock
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-steel">
              Not you?{' '}
              <Link href="/login" className="text-mongo-green-dark font-medium hover:underline">
                Sign in as different user
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
