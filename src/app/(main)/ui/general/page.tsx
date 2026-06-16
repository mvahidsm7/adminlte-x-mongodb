import type { Metadata } from 'next'
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'General UI Elements — AdminLTE' }

const SWATCHES = [
  { name: 'Mongo Green',      hex: '#00ed64', className: 'bg-mongo-green' },
  { name: 'Evergreen',        hex: '#00684a', className: 'bg-mongo-green-dark' },
  { name: 'Midnight',         hex: '#001e2b', className: 'bg-mongo-teal-deep' },
  { name: 'Forest Teal',      hex: '#023430', className: 'bg-mongo-teal' },
  { name: 'Accent Purple',    hex: '#5e2de4', className: 'bg-accent-purple' },
  { name: 'Accent Orange',    hex: '#ff6f00', className: 'bg-accent-orange' },
]

const ALERTS = [
  { variant: 'success', icon: CheckCircle2, text: 'This is a success alert — operation completed.',     className: 'bg-surface-feature border-mongo-green text-mongo-green-dark' },
  { variant: 'warning', icon: AlertTriangle, text: 'This is a warning alert — please double check.',     className: 'bg-orange-50 border-accent-orange text-orange-700' },
  { variant: 'error',   icon: XCircle,       text: 'This is an error alert — something went wrong.',     className: 'bg-red-50 border-red-500 text-red-700' },
  { variant: 'info',    icon: Info,          text: 'This is an info alert — for your information.',      className: 'bg-blue-50 border-blue-500 text-blue-700' },
]

export default function GeneralPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">General UI Elements</h1>
        <p className="text-sm text-steel mt-1">Typography, colors, alerts, badges, and buttons.</p>
      </div>

      {/* Typography */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Typography</h2></CardHeader>
        <CardBody className="space-y-3">
          <h1 className="text-4xl font-bold text-ink">Heading 1</h1>
          <h2 className="text-3xl font-bold text-ink">Heading 2</h2>
          <h3 className="text-2xl font-bold text-ink">Heading 3</h3>
          <h4 className="text-xl font-bold text-ink">Heading 4</h4>
          <h5 className="text-lg font-bold text-ink">Heading 5</h5>
          <h6 className="text-base font-bold text-ink">Heading 6</h6>
          <p className="text-sm text-ink">This is a paragraph of body text, used for general content throughout the dashboard.</p>
          <p className="text-sm text-steel">This is muted text, used for secondary or supporting information.</p>
          <p className="text-sm text-ink">
            Text can be <strong className="font-bold">bold</strong>, <em className="italic">italic</em>, or <a href="#" className="text-mongo-green-dark underline">a link</a>.
          </p>
        </CardBody>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Color Palette</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SWATCHES.map(swatch => (
              <div key={swatch.name} className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg shrink-0 border border-hairline ${swatch.className}`} />
                <div>
                  <p className="text-sm font-medium text-ink">{swatch.name}</p>
                  <p className="text-xs text-steel">{swatch.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Alerts</h2></CardHeader>
        <CardBody className="space-y-3">
          {ALERTS.map(alert => {
            const Icon = alert.icon
            return (
              <div key={alert.variant} className={`flex items-center gap-2 px-4 py-3 rounded-md border text-sm font-medium ${alert.className}`}>
                <Icon className="w-4 h-4 shrink-0" />
                {alert.text}
              </div>
            )
          })}
        </CardBody>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Badges</h2></CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <Badge variant="green">Primary</Badge>
            <Badge variant="green-soft">Secondary</Badge>
            <Badge variant="purple">Purple</Badge>
            <Badge variant="orange">Orange</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Buttons */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Buttons</h2></CardHeader>
        <CardBody>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Button variant="primary" disabled>Disabled Button</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
