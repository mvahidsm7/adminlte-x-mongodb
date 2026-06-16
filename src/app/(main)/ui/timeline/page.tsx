import type { Metadata } from 'next'
import { Rocket, GitCommit, UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'
import { Card, CardBody } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Timeline — AdminLTE' }

const EVENTS = [
  {
    date: 'June 16, 2026',
    time: '2:30 PM',
    title: 'Deployed to production',
    description: 'Version 4.2.0 was deployed with zero downtime across all regions.',
    icon: Rocket,
    color: 'green',
  },
  {
    date: 'June 15, 2026',
    time: '11:05 AM',
    title: 'New pull request merged',
    description: 'PR #482 "feat: add dark mode toggle" was merged into main.',
    icon: GitCommit,
    color: 'purple',
  },
  {
    date: 'June 14, 2026',
    time: '4:18 PM',
    title: 'New team member joined',
    description: 'Jessica Pearson joined the Engineering team as a Senior Developer.',
    icon: UserPlus,
    color: 'teal',
  },
  {
    date: 'June 13, 2026',
    time: '9:00 AM',
    title: 'Incident resolved',
    description: 'The database connection timeout issue reported earlier has been resolved.',
    icon: CheckCircle2,
    color: 'green',
  },
  {
    date: 'June 12, 2026',
    time: '6:42 PM',
    title: 'Alert triggered',
    description: 'CPU usage exceeded 90% threshold on the api-worker-3 instance.',
    icon: AlertCircle,
    color: 'orange',
  },
] as const

const colorClasses: Record<string, string> = {
  green:  'bg-mongo-green text-ink',
  teal:   'bg-mongo-teal-deep text-white',
  purple: 'bg-accent-purple text-white',
  orange: 'bg-accent-orange text-white',
}

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Timeline</h1>
        <p className="text-sm text-steel mt-1">Recent activity across the platform.</p>
      </div>

      <Card>
        <CardBody>
          <ul className="relative space-y-8 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-hairline">
            {EVENTS.map((event, i) => {
              const Icon = event.icon
              return (
                <li key={i} className="relative flex gap-4">
                  <div className={clsx('relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0', colorClasses[event.color])}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-ink">{event.title}</p>
                      <span className="text-xs text-steel shrink-0">{event.date} · {event.time}</span>
                    </div>
                    <p className="text-sm text-steel mt-1">{event.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}
