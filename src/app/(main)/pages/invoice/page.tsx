import type { Metadata } from 'next'
import { Printer } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'Invoice — AdminLTE' }

const lineItems = [
  { description: 'AdminLTE Pro License',         qty: 1, unit: '$299.00', total: '$299.00' },
  { description: 'Priority Support (12 months)', qty: 1, unit: '$120.00', total: '$120.00' },
  { description: 'Custom Theme Development',     qty: 8, unit: '$75.00',  total: '$600.00' },
  { description: 'Training Session (2h)',         qty: 2, unit: '$150.00', total: '$300.00' },
]

export default function InvoicePage() {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Invoice</h1>
        <Button variant="secondary">
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
      </div>

      <Card>
        <CardBody className="p-8 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-md bg-mongo-teal-deep flex items-center justify-center">
                  <span className="text-mongo-green font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold text-ink">AdminLTE Inc.</span>
              </div>
              <p className="text-sm text-steel">123 MongoDB Street</p>
              <p className="text-sm text-steel">San Francisco, CA 94105</p>
              <p className="text-sm text-steel">billing@adminlte.io</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-ink">#INV-2026-001</p>
              <p className="text-sm text-steel mt-1">Date: June 15, 2026</p>
              <p className="text-sm text-steel">Due: July 15, 2026</p>
              <span className="inline-block mt-2 px-3 py-1 bg-mongo-green-soft text-mongo-green-dark text-xs font-semibold rounded-full">
                Unpaid
              </span>
            </div>
          </div>

          {/* Bill To */}
          <div>
            <p className="text-xs font-semibold text-steel uppercase tracking-wider mb-2">Bill To</p>
            <p className="font-semibold text-ink">John Smith</p>
            <p className="text-sm text-steel">Acme Corporation</p>
            <p className="text-sm text-steel">456 Business Ave, New York, NY 10001</p>
            <p className="text-sm text-steel">john.smith@acme.com</p>
          </div>

          {/* Line items */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-hairline text-left">
                <th className="pb-3 text-steel font-medium">Description</th>
                <th className="pb-3 text-steel font-medium text-center w-16">Qty</th>
                <th className="pb-3 text-steel font-medium text-right">Unit Price</th>
                <th className="pb-3 text-steel font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((item, i) => (
                <tr key={i} className="border-b border-hairline-soft">
                  <td className="py-3 text-ink">{item.description}</td>
                  <td className="py-3 text-steel text-center">{item.qty}</td>
                  <td className="py-3 text-ink text-right">{item.unit}</td>
                  <td className="py-3 text-ink font-medium text-right">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-64 space-y-2 text-sm">
              <div className="flex justify-between text-steel">
                <span>Net Amount</span><span>$1,319.00</span>
              </div>
              <div className="flex justify-between text-steel">
                <span>Tax (8%)</span><span>$105.52</span>
              </div>
              <div className="flex justify-between font-bold text-ink border-t border-hairline pt-2 text-base">
                <span>Total</span><span>$1,424.52</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="border-t border-hairline pt-6">
            <p className="text-xs text-steel font-semibold uppercase tracking-wider mb-1">Payment Note</p>
            <p className="text-sm text-steel">Payment is due within 30 days. Please include the invoice number on your payment. Thank you for your business!</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
