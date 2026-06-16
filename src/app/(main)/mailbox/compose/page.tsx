import type { Metadata } from 'next'
import { Send, Save, Paperclip, X } from 'lucide-react'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'Compose Mail — AdminLTE' }

export default function ComposePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Compose</h1>
        <p className="text-sm text-steel mt-1">Write and send a new message.</p>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">New Message</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          {/* To */}
          <div>
            <label htmlFor="compose-to" className="block text-sm font-medium text-ink mb-1">To</label>
            <input
              id="compose-to"
              type="email"
              placeholder="recipient@example.com"
              className="w-full h-11 px-3 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-stone focus:outline-none focus:border-2 focus:border-mongo-green-dark"
            />
          </div>

          {/* CC */}
          <div>
            <label htmlFor="compose-cc" className="block text-sm font-medium text-ink mb-1">CC</label>
            <input
              id="compose-cc"
              type="email"
              placeholder="cc@example.com"
              className="w-full h-11 px-3 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-stone focus:outline-none focus:border-2 focus:border-mongo-green-dark"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="compose-subject" className="block text-sm font-medium text-ink mb-1">Subject</label>
            <input
              id="compose-subject"
              type="text"
              placeholder="Email subject"
              className="w-full h-11 px-3 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-stone focus:outline-none focus:border-2 focus:border-mongo-green-dark"
            />
          </div>

          {/* Body */}
          <div>
            <label htmlFor="compose-body" className="block text-sm font-medium text-ink mb-1">Message</label>
            <textarea
              id="compose-body"
              rows={10}
              placeholder="Write your message here…"
              className="w-full px-3 py-2.5 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-stone focus:outline-none focus:border-2 focus:border-mongo-green-dark resize-none"
            />
          </div>

          {/* Attachment hint */}
          <div className="flex items-center gap-2 text-sm text-steel">
            <Paperclip className="w-4 h-4" />
            <span>Attach files by dragging &amp; dropping or clicking here.</span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-hairline">
            <div className="flex items-center gap-3">
              <Button variant="primary">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
              <Button variant="secondary">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
            </div>
            <Button variant="ghost" className="text-steel">
              <X className="w-4 h-4 mr-1" />
              Discard
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
