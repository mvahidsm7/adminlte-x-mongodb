import type { Metadata } from 'next'
import clsx from 'clsx'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'Simple Table — AdminLTE' }

const USERS = [
  { id: 1,  name: 'Alice Martin',    email: 'alice@example.com',    role: 'Admin',     status: 'Active',   joined: '2024-01-15' },
  { id: 2,  name: 'Bob Chen',        email: 'bob@example.com',      role: 'Editor',    status: 'Active',   joined: '2024-02-03' },
  { id: 3,  name: 'Carol Davis',     email: 'carol@example.com',    role: 'Viewer',    status: 'Inactive', joined: '2024-03-10' },
  { id: 4,  name: 'David Kim',       email: 'david@example.com',    role: 'Editor',    status: 'Active',   joined: '2024-04-22' },
  { id: 5,  name: 'Eva Torres',      email: 'eva@example.com',      role: 'Admin',     status: 'Active',   joined: '2024-05-08' },
  { id: 6,  name: 'Frank Lee',       email: 'frank@example.com',    role: 'Viewer',    status: 'Inactive', joined: '2024-06-14' },
  { id: 7,  name: 'Grace Wong',      email: 'grace@example.com',    role: 'Editor',    status: 'Active',   joined: '2024-07-01' },
  { id: 8,  name: 'Henry Park',      email: 'henry@example.com',    role: 'Viewer',    status: 'Active',   joined: '2024-07-19' },
  { id: 9,  name: 'Iris Nguyen',     email: 'iris@example.com',     role: 'Editor',    status: 'Inactive', joined: '2024-08-05' },
  { id: 10, name: 'James Brown',     email: 'james@example.com',    role: 'Admin',     status: 'Active',   joined: '2024-08-30' },
]

const roleBadge: Record<string, 'green' | 'purple' | 'orange'> = {
  Admin:  'green',
  Editor: 'purple',
  Viewer: 'orange',
}

export default function SimpleTablePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Simple Table</h1>
        <p className="text-sm text-steel mt-1">Basic table layout with Tailwind styling — striped rows, badges, actions.</p>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-ink">User List</h2>
          <p className="text-xs text-steel mt-0.5">Showing {USERS.length} users</p>
        </CardHeader>
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-hairline bg-surface">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider">#</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider">Joined</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-steel uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-soft">
                {USERS.map((user, i) => (
                  <tr
                    key={user.id}
                    className={clsx(
                      'hover:bg-surface transition-colors',
                      i % 2 === 1 && 'bg-surface/50'
                    )}
                  >
                    <td className="px-4 py-3 text-steel">{user.id}</td>
                    <td className="px-4 py-3 font-medium text-ink">{user.name}</td>
                    <td className="px-4 py-3 text-steel">{user.email}</td>
                    <td className="px-4 py-3">
                      <Badge variant={roleBadge[user.role]}>{user.role}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <span className={clsx(
                        'inline-flex items-center gap-1.5 text-xs font-medium',
                        user.status === 'Active' ? 'text-mongo-green-dark' : 'text-steel'
                      )}>
                        <span className={clsx(
                          'w-1.5 h-1.5 rounded-full',
                          user.status === 'Active' ? 'bg-mongo-green' : 'bg-hairline-strong'
                        )} />
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-steel">{user.joined}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" className="text-xs px-2 py-1 h-auto">View</Button>
                        <Button variant="ghost" className="text-xs px-2 py-1 h-auto">Edit</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Bordered variant */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Bordered Variant</h2></CardHeader>
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-mongo-teal-deep text-mongo-green">
                  <th className="border border-mongo-teal-deep px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
                  <th className="border border-mongo-teal-deep px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
                  <th className="border border-mongo-teal-deep px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Role</th>
                  <th className="border border-mongo-teal-deep px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {USERS.slice(0, 5).map(user => (
                  <tr key={user.id} className="hover:bg-surface transition-colors">
                    <td className="border border-hairline px-4 py-3 text-ink">{user.name}</td>
                    <td className="border border-hairline px-4 py-3 text-steel">{user.email}</td>
                    <td className="border border-hairline px-4 py-3">
                      <Badge variant={roleBadge[user.role]}>{user.role}</Badge>
                    </td>
                    <td className="border border-hairline px-4 py-3 text-steel">{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
