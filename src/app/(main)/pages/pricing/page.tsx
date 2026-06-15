import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = { title: 'Pricing — AdminLTE' }

const tiers = [
  {
    name: 'Basic',
    price: '$9',
    period: '/month',
    description: 'Perfect for individuals and small projects.',
    features: ['5 projects', '10 GB storage', 'Email support', 'API access', 'Basic analytics'],
    cta: 'Get started',
    variant: 'secondary' as const,
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Best for growing teams and businesses.',
    features: ['Unlimited projects', '100 GB storage', 'Priority support', 'API access', 'Advanced analytics', 'Custom domains', 'Team collaboration', 'Export reports', 'SSO', 'Audit logs'],
    cta: 'Get started',
    variant: 'primary' as const,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations.',
    features: ['Unlimited everything', 'Dedicated support', 'SLA guarantee', 'On-premise option', 'Custom integrations'],
    cta: 'Contact us',
    variant: 'secondary' as const,
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-ink">Pricing</h1>
        <p className="text-steel mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map(tier => (
          <Card key={tier.name} variant={tier.featured ? 'feature' : 'base'} className="flex flex-col">
            <CardBody className="flex flex-col flex-1 p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-ink">{tier.name}</h2>
                {tier.featured && <Badge variant="green">Popular</Badge>}
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-ink">{tier.price}</span>
                {tier.period && <span className="text-steel text-sm ml-1">{tier.period}</span>}
              </div>

              <p className="text-sm text-steel mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink">
                    <Check className="w-4 h-4 text-mongo-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant={tier.variant} className="w-full justify-center">
                {tier.cta}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
