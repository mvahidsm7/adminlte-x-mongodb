'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import Tabs from '@/components/ui/Tabs'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'

function ProfileTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Personal Information</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full name" type="text" defaultValue="Admin User" placeholder="Your name" />
            <Input label="Email address" type="email" defaultValue="admin@example.com" placeholder="you@example.com" />
            <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
            <Select label="Timezone" defaultValue="America/Los_Angeles">
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="Europe/London">London (GMT)</option>
              <option value="Asia/Tokyo">Tokyo (JST)</option>
            </Select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-ink mb-1">Bio</label>
            <textarea
              className="w-full rounded-md border border-hairline-strong px-3 py-2 text-sm text-ink focus:outline-none focus:border-2 focus:border-mongo-green-dark resize-none"
              rows={3}
              placeholder="A short bio about yourself"
              defaultValue="Full-stack developer at AdminLTE Inc."
            />
          </div>
        </CardBody>
      </Card>
      <div className="flex justify-end">
        <Button variant="primary">Save changes</Button>
      </div>
    </div>
  )
}

function SecurityTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Change Password</h2></CardHeader>
        <CardBody>
          <div className="space-y-4 max-w-sm">
            <Input label="Current password" type="password" placeholder="••••••••" />
            <Input label="New password" type="password" placeholder="••••••••" hint="At least 8 characters" />
            <Input label="Confirm new password" type="password" placeholder="••••••••" />
          </div>
        </CardBody>
      </Card>
      <div className="flex justify-end">
        <Button variant="primary">Update password</Button>
      </div>
    </div>
  )
}

function NotificationsTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Notification Preferences</h2></CardHeader>
        <CardBody>
          <div className="space-y-3">
            <Checkbox label="Email notifications for new comments" defaultChecked />
            <Checkbox label="Notify me when mentioned" defaultChecked />
            <Checkbox label="Weekly digest email" />
            <Checkbox label="Security alerts" defaultChecked />
            <Checkbox label="Product updates and announcements" />
          </div>
        </CardBody>
      </Card>
      <div className="flex justify-end">
        <Button variant="primary">Save preferences</Button>
      </div>
    </div>
  )
}

const tabs = [
  { id: 'profile',       label: 'Profile',       content: <ProfileTab /> },
  { id: 'security',      label: 'Security',      content: <SecurityTab /> },
  { id: 'notifications', label: 'Notifications', content: <NotificationsTab /> },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Settings</h1>
        <p className="text-sm text-steel mt-1">Manage your account preferences.</p>
      </div>
      <Tabs tabs={tabs} />
    </div>
  )
}
