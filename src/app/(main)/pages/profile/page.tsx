'use client'
import { MapPin, Mail, Globe, GitBranch, AtSign } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Tabs from '@/components/ui/Tabs'
import Progress from '@/components/ui/Progress'

const skills = [
  { name: 'TypeScript', level: 90, color: 'green' as const },
  { name: 'React / Next.js', level: 85, color: 'green' as const },
  { name: 'Node.js', level: 75, color: 'teal' as const },
  { name: 'MongoDB', level: 70, color: 'teal' as const },
  { name: 'Tailwind CSS', level: 95, color: 'green' as const },
]

const activity = [
  { action: 'Created project',   target: 'AdminLTE Next.js', time: '2 hours ago',  color: 'bg-mongo-green' },
  { action: 'Closed issue',      target: 'Fix sidebar bug',  time: '5 hours ago',  color: 'bg-accent-purple' },
  { action: 'Merged PR',         target: 'Auth pages',       time: '1 day ago',    color: 'bg-mongo-teal' },
  { action: 'Commented on',      target: 'Dashboard layout', time: '2 days ago',   color: 'bg-accent-orange' },
  { action: 'Completed task',    target: 'Setup testing',    time: '3 days ago',   color: 'bg-mongo-green' },
]

function AboutContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardBody>
          <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-4">About</h3>
          <p className="text-sm text-ink leading-relaxed mb-4">
            Full-stack developer specializing in React and Node.js. Passionate about building clean,
            maintainable code and great user experiences.
          </p>
          <ul className="space-y-2 text-sm text-steel">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> admin@example.com</li>
            <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> adminlte.io</li>
            <li className="flex items-center gap-2"><GitBranch className="w-4 h-4" /> github.com/admin</li>
            <li className="flex items-center gap-2"><AtSign className="w-4 h-4" /> @adminlte</li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-4">Skills</h3>
          <div className="space-y-4">
            {skills.map(skill => (
              <Progress key={skill.name} value={skill.level} color={skill.color} label={skill.name} />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

function ActivityContent() {
  return (
    <Card>
      <CardBody>
        <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-6">Recent Activity</h3>
        <ol className="relative border-l border-hairline ml-3 space-y-6">
          {activity.map((item, i) => (
            <li key={i} className="ml-6">
              <span className={`absolute -left-1.5 w-3 h-3 rounded-full ${item.color}`} />
              <p className="text-sm text-ink">
                <span className="font-medium">{item.action}</span>{' '}
                <span className="text-mongo-green-dark">{item.target}</span>
              </p>
              <p className="text-xs text-steel mt-0.5">{item.time}</p>
            </li>
          ))}
        </ol>
      </CardBody>
    </Card>
  )
}

function SettingsContent() {
  return (
    <Card>
      <CardBody>
        <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-4">Quick Settings</h3>
        <p className="text-sm text-steel">Visit <span className="font-medium text-ink">Settings</span> for full account preferences.</p>
      </CardBody>
    </Card>
  )
}

const tabs = [
  { id: 'about',    label: 'About',    content: <AboutContent /> },
  { id: 'activity', label: 'Activity', content: <ActivityContent /> },
  { id: 'settings', label: 'Settings', content: <SettingsContent /> },
]

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card>
        <div className="h-32 bg-gradient-to-r from-mongo-teal-deep to-mongo-teal rounded-t-lg" />
        <CardBody className="relative pt-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-10 mb-4">
            <Avatar name="Admin User" size="xl" className="border-4 border-white shadow-level-2 shrink-0" />
            <div className="flex-1 pb-1">
              <h1 className="text-xl font-bold text-ink">Admin User</h1>
              <p className="text-sm text-steel">Software Engineer · AdminLTE Inc.</p>
            </div>
            <div className="flex gap-2 pb-1">
              <Badge variant="green-soft">Pro</Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-hairline pt-4">
            {[
              { label: 'Projects',   value: '12'  },
              { label: 'Tasks Done', value: '84'  },
              { label: 'Followers',  value: '240' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold text-ink">{stat.value}</p>
                <p className="text-xs text-steel mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Tabs */}
      <Tabs tabs={tabs} />
    </div>
  )
}
