'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'

const STEPS = [
  { id: 1, label: 'Personal Info' },
  { id: 2, label: 'Account'       },
  { id: 3, label: 'Preferences'   },
  { id: 4, label: 'Review'        },
]

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-between mb-8">
      {STEPS.map((step, i) => {
        const done   = step.id < current
        const active = step.id === current
        return (
          <div key={step.id} className="flex-1 flex items-center">
            <div className="flex flex-col items-center">
              <div className={clsx(
                'w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors',
                done   ? 'bg-mongo-green text-ink'           :
                active ? 'bg-mongo-teal-deep text-mongo-green border-2 border-mongo-green' :
                         'bg-hairline text-steel'
              )}>
                {done ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <span className={clsx(
                'text-xs mt-1.5 font-medium whitespace-nowrap',
                active ? 'text-ink' : done ? 'text-mongo-green-dark' : 'text-steel'
              )}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={clsx('flex-1 h-0.5 mx-2 mb-5', done ? 'bg-mongo-green' : 'bg-hairline')} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function Step1() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink mb-1">Personal Information</h2>
      <p className="text-sm text-steel mb-6">Tell us a bit about yourself.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="First name"    type="text"  placeholder="John"             />
        <Input label="Last name"     type="text"  placeholder="Doe"              />
        <Input label="Email address" type="email" placeholder="you@example.com"  />
        <Input label="Phone number"  type="tel"   placeholder="+1 555 000 0000"  />
      </div>
    </div>
  )
}

function Step2() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink mb-1">Account Setup</h2>
      <p className="text-sm text-steel mb-6">Choose your username and password.</p>
      <div className="space-y-4 max-w-sm">
        <Input label="Username"         type="text"     placeholder="johndoe"          />
        <Input label="Password"         type="password" placeholder="••••••••" hint="At least 8 characters" />
        <Input label="Confirm password" type="password" placeholder="••••••••"          />
      </div>
    </div>
  )
}

function Step3() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink mb-1">Preferences</h2>
      <p className="text-sm text-steel mb-6">Customize your experience.</p>
      <div className="space-y-4 max-w-sm">
        <Select label="Timezone" defaultValue="America/Los_Angeles">
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="Europe/London">London (GMT)</option>
        </Select>
        <Select label="Language" defaultValue="en">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </Select>
        <div className="space-y-2 pt-2">
          <p className="text-sm font-medium text-ink">Notifications</p>
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="SMS alerts" />
          <Checkbox label="Weekly digest" defaultChecked />
        </div>
      </div>
    </div>
  )
}

function Step4() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink mb-1">Review &amp; Submit</h2>
      <p className="text-sm text-steel mb-6">Review your information before submitting.</p>
      <div className="space-y-3 max-w-md">
        {[
          { section: 'Personal Info', items: [['Name', 'John Doe'], ['Email', 'john@example.com'], ['Phone', '+1 555 000 0000']] },
          { section: 'Account',       items: [['Username', 'johndoe'], ['Password', '••••••••']] },
          { section: 'Preferences',   items: [['Timezone', 'Pacific Time (PT)'], ['Language', 'English'], ['Notifications', 'Email, Weekly digest']] },
        ].map(({ section, items }) => (
          <div key={section} className="border border-hairline rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-surface border-b border-hairline">
              <p className="text-xs font-semibold text-steel uppercase tracking-wider">{section}</p>
            </div>
            <div className="divide-y divide-hairline-soft">
              {items.map(([key, val]) => (
                <div key={key} className="flex items-center justify-between px-4 py-2.5 text-sm">
                  <span className="text-steel">{key}</span>
                  <span className="text-ink font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WizardPage() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-ink">Form Wizard</h1>
        <Card>
          <CardBody className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-mongo-green flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-ink" />
            </div>
            <h2 className="text-xl font-bold text-ink mb-2">All done!</h2>
            <p className="text-sm text-steel mb-6">Your account has been created successfully.</p>
            <Button variant="secondary" onClick={() => { setStep(1); setDone(false) }}>Start over</Button>
          </CardBody>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Form Wizard</h1>
        <p className="text-sm text-steel mt-1">Multi-step form with progress indicator.</p>
      </div>

      <Card>
        <CardBody className="p-8">
          <StepIndicator current={step} />

          <div className="min-h-[280px]">
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-hairline">
            <Button
              variant="secondary"
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
            >
              Previous
            </Button>
            {step < 4 ? (
              <Button variant="primary" onClick={() => setStep(s => s + 1)}>
                Next
              </Button>
            ) : (
              <Button variant="primary" onClick={() => setDone(true)}>
                Submit
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
