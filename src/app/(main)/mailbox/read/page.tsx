import type { Metadata } from 'next'
import { Reply, Forward, Trash2, ArrowLeft, Star, Printer, Send } from 'lucide-react'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Avatar from '@/components/ui/Avatar'

export const metadata: Metadata = { title: 'Read Mail — AdminLTE' }

const EMAIL = {
  id: 1,
  from: 'Alice Martin',
  fromEmail: 'alice@example.com',
  to: 'me@admin.com',
  subject: 'Project Kickoff Meeting',
  body: `Hi,\n\nI wanted to confirm the project kickoff meeting scheduled for next Monday at 10 AM. We'll go over the project scope, timelines, and assign responsibilities.\n\nPlease make sure to review the attached brief before the meeting. The document covers:\n\n1. Project goals and success criteria\n2. Team roles and responsibilities\n3. Initial timeline with key milestones\n4. Budget overview\n\nIf you have any questions or agenda items you'd like to add, please send them over by Friday.\n\nLooking forward to a productive session!\n\nBest regards,\nAlice Martin\nProject Manager`,
  date: 'January 20, 2025',
  time: '09:42 AM',
  tag: 'Work',
  starred: true,
}

export default function ReadPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink">Read Mail</h1>
          <p className="text-sm text-steel mt-1">Viewing message details.</p>
        </div>
        <a
          href="/mailbox/inbox"
          className="inline-flex items-center gap-1.5 text-sm text-mongo-green-dark font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Inbox
        </a>
      </div>

      <Card>
        {/* Email header */}
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <Avatar name={EMAIL.from} size="lg" />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg font-semibold text-ink">{EMAIL.subject}</h2>
                  <Badge variant="green">{EMAIL.tag}</Badge>
                  {EMAIL.starred && <Star className="w-4 h-4 text-accent-orange fill-accent-orange" />}
                </div>
                <p className="text-sm text-steel mt-1">
                  From: <span className="font-medium text-ink">{EMAIL.from}</span> &lt;{EMAIL.fromEmail}&gt;
                </p>
                <p className="text-sm text-steel">
                  To: <span className="font-medium text-ink">{EMAIL.to}</span>
                </p>
                <p className="text-xs text-stone mt-1">{EMAIL.date} · {EMAIL.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button variant="ghost" className="text-xs px-2 py-1 h-auto">
                <Printer className="w-3.5 h-3.5 mr-1" />
                Print
              </Button>
              <Button variant="ghost" className="text-xs px-2 py-1 h-auto text-accent-orange">
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                Delete
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Email body */}
        <CardBody>
          <div className="text-sm text-ink leading-relaxed whitespace-pre-wrap">
            {EMAIL.body}
          </div>
        </CardBody>

        {/* Reply/Forward actions */}
        <div className="px-6 py-4 border-t border-hairline flex items-center gap-3">
          <Button variant="primary">
            <Reply className="w-4 h-4 mr-2" />
            Reply
          </Button>
          <Button variant="secondary">
            <Forward className="w-4 h-4 mr-2" />
            Forward
          </Button>
        </div>
      </Card>

      {/* Quick reply box */}
      <Card>
        <CardHeader>
          <h3 className="text-sm font-semibold text-ink">Quick Reply</h3>
        </CardHeader>
        <CardBody className="space-y-3">
          <textarea
            rows={4}
            placeholder="Write your reply here…"
            className="w-full px-3 py-2.5 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-stone focus:outline-none focus:border-2 focus:border-mongo-green-dark resize-none"
          />
          <Button variant="primary">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
