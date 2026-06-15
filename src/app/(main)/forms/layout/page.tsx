import type { Metadata } from 'next'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'

export const metadata: Metadata = { title: 'Form Layout — AdminLTE' }

export default function FormLayoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Form Layout</h1>
        <p className="text-sm text-steel mt-1">Different form layout patterns — vertical, horizontal, and inline.</p>
      </div>

      {/* Vertical form */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">Vertical Form</h2>
          <p className="text-xs text-steel mt-0.5">Labels stacked above inputs — the default layout.</p>
        </CardHeader>
        <CardBody>
          <form className="space-y-4 max-w-md">
            <Input label="Full name"     type="text"  placeholder="John Doe"         />
            <Input label="Email address" type="email" placeholder="you@example.com"  />
            <Select label="Country">
              <option value="">Select country…</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </Select>
            <Checkbox label="I agree to the terms and conditions" />
            <Button variant="primary" type="submit">Submit</Button>
          </form>
        </CardBody>
      </Card>

      {/* Horizontal form */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">Horizontal Form</h2>
          <p className="text-xs text-steel mt-0.5">Labels aligned to the left, inputs on the right.</p>
        </CardHeader>
        <CardBody>
          <form className="space-y-4 max-w-xl">
            {[
              { label: 'Full name',     type: 'text',  placeholder: 'John Doe'        },
              { label: 'Email address', type: 'email', placeholder: 'you@example.com' },
              { label: 'Phone number',  type: 'tel',   placeholder: '+1 555 000 0000' },
            ].map(field => (
              <div key={field.label} className="flex items-center gap-4">
                <label
                  htmlFor={field.label.toLowerCase().replace(/\s+/g, '-')}
                  className="w-36 shrink-0 text-sm font-medium text-ink text-right"
                >
                  {field.label}
                </label>
                <div className="flex-1">
                  <Input
                    label=""
                    id={field.label.toLowerCase().replace(/\s+/g, '-')}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <div className="w-36 shrink-0" />
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {/* Inline form */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">Inline Form</h2>
          <p className="text-xs text-steel mt-0.5">All fields on one line — ideal for search/filter bars.</p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[180px]">
              <Input label="Search" type="text" placeholder="Search…" />
            </div>
            <div className="w-40">
              <Select label="Category">
                <option value="">All categories</option>
                <option value="design">Design</option>
                <option value="dev">Development</option>
              </Select>
            </div>
            <div className="w-36">
              <Select label="Status">
                <option value="">Any status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
            </div>
            <Button variant="primary" type="submit" className="mb-0.5">Submit</Button>
          </form>
        </CardBody>
      </Card>

      {/* Grid form (2-column) */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">Grid Form</h2>
          <p className="text-xs text-steel mt-0.5">Multi-column layout for dense data entry.</p>
        </CardHeader>
        <CardBody>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First name" type="text" placeholder="John"     />
              <Input label="Last name"  type="text" placeholder="Doe"      />
              <Input label="Email"      type="email" placeholder="you@example.com" />
              <Input label="Phone"      type="tel"   placeholder="+1 555 000 0000" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="City"     type="text" placeholder="San Francisco" />
              <Select label="State">
                <option value="">Select state…</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="tx">Texas</option>
              </Select>
              <Input label="ZIP code" type="text" placeholder="94105" />
            </div>
            <div className="flex justify-end">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
