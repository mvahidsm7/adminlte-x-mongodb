import type { Metadata } from 'next'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'

export const metadata: Metadata = { title: 'Form Elements — AdminLTE' }

export default function ElementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Form Elements</h1>
        <p className="text-sm text-steel mt-1">Showcase of all available form input components and states.</p>
      </div>

      {/* Text Inputs */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Text Inputs</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Text input"    type="text"     placeholder="Enter text"            />
            <Input label="Email input"   type="email"    placeholder="you@example.com"        />
            <Input label="Password"      type="password" placeholder="••••••••"               />
            <Input label="Number input"  type="number"   placeholder="0"                      />
            <Input label="Tel input"     type="tel"      placeholder="+1 (555) 000-0000"      />
            <Input label="URL input"     type="url"      placeholder="https://example.com"    />
          </div>
        </CardBody>
      </Card>

      {/* Input States */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Input States</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Default"      type="text" placeholder="Default state"               />
            <Input label="With value"   type="text" defaultValue="Filled in value"             />
            <Input label="With hint"    type="text" placeholder="Enter username" hint="Letters and numbers only" />
            <Input label="Error state"  type="text" defaultValue="invalid@" error="This field is required" />
            <Input label="Disabled"     type="text" defaultValue="Cannot edit" disabled        />
            <Input label="Read only"    type="text" defaultValue="Read-only value" readOnly    />
          </div>
        </CardBody>
      </Card>

      {/* Select */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Select</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select label="Select option">
              <option value="">Choose one…</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Select>
            <Select label="Select with hint" hint="Pick the best option">
              <option value="">Choose one…</option>
              <option value="a">Alpha</option>
              <option value="b">Beta</option>
            </Select>
            <Select label="Select error" error="Please select an option">
              <option value="">Choose one…</option>
              <option value="x">Option X</option>
            </Select>
            <Select label="Select disabled" disabled>
              <option value="locked">Locked value</option>
            </Select>
          </div>
        </CardBody>
      </Card>

      {/* Textarea */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Textarea</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="textarea-basic" className="block text-sm font-medium text-ink">Textarea</label>
              <textarea
                id="textarea-basic"
                placeholder="Type your message here…"
                rows={4}
                className="w-full rounded-md border border-hairline-strong px-3 py-2 text-sm text-ink focus:outline-none focus:border-2 focus:border-mongo-green-dark resize-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="textarea-disabled" className="block text-sm font-medium text-ink">Disabled message box</label>
              <textarea
                id="textarea-disabled"
                defaultValue="This textarea is disabled and cannot be edited."
                rows={4}
                disabled
                className="w-full rounded-md border border-hairline-strong px-3 py-2 text-sm text-ink bg-surface resize-none opacity-60 cursor-not-allowed"
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Date & Time */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Date &amp; Time</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Date"          type="date"           />
            <Input label="Time"          type="time"           />
            <Input label="Date + Time"   type="datetime-local" />
          </div>
        </CardBody>
      </Card>

      {/* Special Inputs */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Special Inputs</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="color-input" className="block text-sm font-medium text-ink">Color picker</label>
              <input
                id="color-input"
                type="color"
                defaultValue="#00ed64"
                className="h-[44px] w-full rounded-md border border-hairline-strong cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="range-input" className="block text-sm font-medium text-ink">Range slider</label>
              <input
                id="range-input"
                type="range"
                min={0}
                max={100}
                defaultValue={60}
                className="w-full mt-4 accent-mongo-green"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="file-input" className="block text-sm font-medium text-ink">File upload</label>
              <input
                id="file-input"
                type="file"
                className="block w-full text-sm text-steel file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-mongo-green file:text-ink hover:file:bg-mongo-green-mid cursor-pointer"
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Checkboxes */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Checkboxes</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-ink mb-3">Default checkboxes</p>
              <div className="space-y-2">
                <Checkbox label="Option A" defaultChecked />
                <Checkbox label="Option B" />
                <Checkbox label="Option C — disabled" disabled />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">Checked states</p>
              <div className="space-y-2">
                <Checkbox label="Checked by default" defaultChecked />
                <Checkbox label="Unchecked by default" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Radio buttons */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Radio Buttons</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-ink mb-3">Pick a plan</p>
              <div className="space-y-2">
                {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
                  <label key={plan} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      value={plan.toLowerCase()}
                      defaultChecked={i === 1}
                      className="accent-mongo-green"
                    />
                    <span className="text-sm text-ink">{plan}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">Notification preference</p>
              <div className="space-y-2">
                {['Email', 'SMS', 'Push'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="notify"
                      value={opt.toLowerCase()}
                      className="accent-mongo-green"
                    />
                    <span className="text-sm text-ink">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Toggle switches */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Toggle Switches</h2></CardHeader>
        <CardBody>
          <div className="space-y-3">
            {[
              { label: 'Email notifications', on: true  },
              { label: 'SMS alerts',          on: false },
              { label: 'Weekly digest',       on: true  },
              { label: 'Dark mode',           on: false },
            ].map(({ label, on }) => (
              <div key={label} className="flex items-center justify-between max-w-xs">
                <span className="text-sm text-ink">{label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={on} className="sr-only peer" />
                  <div className="w-11 h-6 bg-hairline peer-focus:outline-none rounded-full peer peer-checked:bg-mongo-green transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
