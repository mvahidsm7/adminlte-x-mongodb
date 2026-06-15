'use client'
import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

interface FormErrors {
  name?: string
  email?: string
  plan?: string
}

export default function ValidationPage() {
  const [values, setValues] = useState({ name: '', email: '', plan: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (vals: typeof values): FormErrors => {
    const errs: FormErrors = {}
    if (!vals.name.trim()) errs.name = 'Name is required'
    if (!vals.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) errs.email = 'Enter a valid email address'
    if (!vals.plan) errs.plan = 'Please select a plan'
    return errs
  }

  const handleChange = (field: keyof typeof values, value: string) => {
    const updated = { ...values, [field]: value }
    setValues(updated)
    if (errors[field]) {
      const newErrors = validate(updated)
      setErrors(prev => ({ ...prev, [field]: newErrors[field] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Form Validation</h1>
        <p className="text-sm text-steel mt-1">Validation states and live feedback patterns.</p>
      </div>

      {/* Static state examples */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Validation States</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Success */}
            <div>
              <p className="text-sm font-semibold text-mongo-green-dark mb-3 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Success
              </p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor="valid-name" className="block text-sm font-medium text-ink">Full name</label>
                  <input
                    id="valid-name"
                    type="text"
                    defaultValue="John Doe"
                    className="h-[44px] w-full rounded-md border-2 border-mongo-green-dark px-3 text-sm text-ink focus:outline-none"
                    readOnly
                  />
                  <p className="text-xs text-mongo-green-dark flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Looks good!
                  </p>
                </div>
                <div className="space-y-1">
                  <label htmlFor="valid-email" className="block text-sm font-medium text-ink">Email</label>
                  <input
                    id="valid-email"
                    type="email"
                    defaultValue="john@example.com"
                    className="h-[44px] w-full rounded-md border-2 border-mongo-green-dark px-3 text-sm text-ink focus:outline-none"
                    readOnly
                  />
                  <p className="text-xs text-mongo-green-dark flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Valid email address
                  </p>
                </div>
              </div>
            </div>

            {/* Error */}
            <div>
              <p className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-1">
                <XCircle className="w-4 h-4" /> Invalid input
              </p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor="invalid-name" className="block text-sm font-medium text-ink">Full name</label>
                  <input
                    id="invalid-name"
                    type="text"
                    defaultValue=""
                    placeholder="Enter your name"
                    className="h-[44px] w-full rounded-md border-2 border-red-500 px-3 text-sm text-ink focus:outline-none"
                    readOnly
                  />
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> This field is required
                  </p>
                </div>
                <div className="space-y-1">
                  <label htmlFor="invalid-email" className="block text-sm font-medium text-ink">Email</label>
                  <input
                    id="invalid-email"
                    type="email"
                    defaultValue="not-an-email"
                    className="h-[44px] w-full rounded-md border-2 border-red-500 px-3 text-sm text-ink focus:outline-none"
                    readOnly
                  />
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> Enter a valid email address
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Live validation form */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">Live Validation</h2>
          <p className="text-xs text-steel mt-0.5">Errors appear on submit and clear as you type.</p>
        </CardHeader>
        <CardBody>
          {submitted ? (
            <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-mongo-green">
              <CheckCircle2 className="w-6 h-6 text-mongo-green-dark shrink-0" />
              <div>
                <p className="text-sm font-semibold text-mongo-green-dark">Form submitted successfully!</p>
                <p className="text-xs text-steel mt-0.5">All fields validated.</p>
              </div>
              <Button variant="ghost" className="ml-auto text-xs" onClick={() => { setSubmitted(false); setValues({ name: '', email: '', plan: '' }); setErrors({}) }}>
                Reset
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <Input
                label="Your name"
                type="text"
                placeholder="John Doe"
                value={values.name}
                onChange={e => handleChange('name', e.target.value)}
                error={errors.name}
              />
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={e => handleChange('email', e.target.value)}
                error={errors.email}
              />
              <Select
                label="Select plan"
                value={values.plan}
                onChange={e => handleChange('plan', e.target.value)}
                error={errors.plan}
              >
                <option value="">Choose a plan…</option>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </Select>
              <Button variant="primary" type="submit">Validate</Button>
            </form>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
