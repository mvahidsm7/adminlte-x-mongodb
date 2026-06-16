import type { Metadata } from 'next'
import clsx from 'clsx'
import { Star, Edit } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Avatar from '@/components/ui/Avatar'

export const metadata: Metadata = { title: 'Inbox — AdminLTE' }

const EMAILS = [
  { id: 1, from: 'Alice Martin', fromEmail: 'alice@example.com', subject: 'Project Kickoff Meeting', preview: 'Hi, I wanted to confirm we are still on for next Monday...', body: 'Hi,\n\nI wanted to confirm we are still on for next Monday at 10 AM. We\'ll go over the scope, timelines, and assign responsibilities.\n\nPlease make sure to review the attached brief before the meeting.\n\nBest regards,\nAlice', date: '2025-01-20', time: '09:42 AM', read: false, starred: true,  tag: 'Work' },
  { id: 2, from: 'Bob Chen',    fromEmail: 'bob@example.com',   subject: 'Design Review Feedback',  preview: 'Thanks for sending over the designs. Here are my thoughts on the overall direction...', body: 'Thanks for sending over the designs.\n\nHere are my thoughts on the overall direction — the color palette is spot on and the layout feels very clean.', date: '2025-01-19', time: '03:15 PM', read: true,  starred: false, tag: 'Design' },
  { id: 3, from: 'Carol Davis', fromEmail: 'carol@example.com', subject: 'Monthly Report - December', preview: 'Please find attached the monthly report for December. Key highlights include...', body: 'Please find attached the monthly report for December.\n\nKey highlights:\n- Revenue up 12% YoY\n- User signups increased by 340', date: '2025-01-18', time: '11:00 AM', read: true,  starred: true,  tag: 'Reports' },
  { id: 4, from: 'David Kim',   fromEmail: 'david@example.com', subject: 'Quick question about deployment', preview: 'Hey, I was wondering if you could clarify the deployment pipeline for the new service...', body: 'Hey,\n\nI was wondering if you could clarify the deployment pipeline for the new service. Specifically, do we use the existing CI/CD workflow or create a separate one?', date: '2025-01-17', time: '04:30 PM', read: false, starred: false, tag: 'DevOps' },
  { id: 5, from: 'Eva Torres',  fromEmail: 'eva@example.com',   subject: 'Invoice #1042 is ready',  preview: 'Your invoice #1042 for the amount of $3,200.00 is now available for review...', body: 'Your invoice #1042 for the amount of $3,200.00 is now available for review.\n\nPlease log in to your account to view and download the invoice.', date: '2025-01-16', time: '08:00 AM', read: true,  starred: false, tag: 'Finance' },
]

const tagBadge: Record<string, 'green' | 'purple' | 'orange' | 'green-soft'> = {
  Work:    'green',
  Design:  'purple',
  Reports: 'orange',
  DevOps:  'green-soft',
  Finance: 'green-soft',
}

const unreadCount = EMAILS.filter(e => !e.read).length
const preview = EMAILS[0]

export default function InboxPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink">Inbox</h1>
          <p className="text-sm text-steel mt-1">{unreadCount} unread messages</p>
        </div>
        <Button variant="primary">
          <Edit className="w-4 h-4 mr-2" />
          Compose
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Email list */}
        <Card className="lg:col-span-1">
          <CardBody className="p-0 divide-y divide-hairline-soft">
            {EMAILS.map(email => (
              <div
                key={email.id}
                className={clsx(
                  'flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-surface transition-colors',
                  !email.read && 'bg-surface-feature'
                )}
              >
                <Avatar name={email.from} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={clsx('text-sm truncate', !email.read ? 'font-semibold text-ink' : 'font-medium text-steel')}>
                      {email.from}
                    </span>
                    <span className="text-[11px] text-stone shrink-0">{email.time}</span>
                  </div>
                  <p className={clsx('text-xs truncate mt-0.5', !email.read ? 'text-ink font-medium' : 'text-steel')}>
                    {email.subject}
                  </p>
                  <p className="text-[11px] text-stone truncate mt-0.5">{email.preview}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Badge variant={tagBadge[email.tag]} className="text-[10px] px-1.5 py-0">{email.tag}</Badge>
                    {email.starred && <Star className="w-3 h-3 text-accent-orange fill-accent-orange" />}
                    {!email.read && <span className="w-2 h-2 rounded-full bg-mongo-green shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Preview pane */}
        <Card className="lg:col-span-2">
          <div className="px-6 py-4 border-b border-hairline">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Avatar name={preview.from} size="md" />
                <div>
                  <p className="text-xs text-steel mt-0.5">
                    From: <span className="font-medium">{`${preview.from} <${preview.fromEmail}>`}</span>
                  </p>
                  <p className="text-[11px] text-stone mt-0.5">{preview.date} · {preview.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="ghost" className="text-xs px-2 py-1 h-auto">Reply</Button>
                <Button variant="ghost" className="text-xs px-2 py-1 h-auto">Forward</Button>
              </div>
            </div>
          </div>
          <CardBody>
            <div className="prose prose-sm max-w-none text-ink whitespace-pre-wrap text-sm leading-relaxed">
              {preview.body}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
