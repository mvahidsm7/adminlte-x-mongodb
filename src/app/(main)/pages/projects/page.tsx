import type { Metadata } from 'next'
import { Users, Calendar } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Progress from '@/components/ui/Progress'
import Avatar from '@/components/ui/Avatar'

export const metadata: Metadata = { title: 'Projects — AdminLTE' }

const projects = [
  {
    id: 1,
    name: 'AdminLTE Next.js',
    description: 'Rebuilding AdminLTE v4 as a Next.js application with MongoDB design system.',
    status: 'Active',
    progress: 65,
    color: 'green' as const,
    team: ['Alice Brown', 'Bob Chen', 'Carol Davis'],
    dueDate: '2026-07-30',
  },
  {
    id: 2,
    name: 'MongoDB Dashboard',
    description: 'Real-time analytics dashboard connected to MongoDB Atlas.',
    status: 'Active',
    progress: 40,
    color: 'teal' as const,
    team: ['Dave Evans', 'Eve Foster'],
    dueDate: '2026-08-15',
  },
  {
    id: 3,
    name: 'Design System',
    description: 'Unified component library following MongoDB design guidelines.',
    status: 'Completed',
    progress: 100,
    color: 'green' as const,
    team: ['Frank Green', 'Grace Hall', 'Henry Ito', 'Iris Jones'],
    dueDate: '2026-05-31',
  },
  {
    id: 4,
    name: 'API Gateway',
    description: 'Centralized API gateway with rate limiting and authentication.',
    status: 'On Hold',
    progress: 25,
    color: 'orange' as const,
    team: ['Jack Kim', 'Karen Lee'],
    dueDate: '2026-09-01',
  },
  {
    id: 5,
    name: 'Mobile App',
    description: 'React Native companion app for the admin dashboard.',
    status: 'Active',
    progress: 15,
    color: 'purple' as const,
    team: ['Liam Moore', 'Mia Nelson'],
    dueDate: '2026-10-31',
  },
  {
    id: 6,
    name: 'E2E Test Suite',
    description: 'Comprehensive end-to-end tests using Playwright.',
    status: 'Active',
    progress: 50,
    color: 'teal' as const,
    team: ['Noah Owen', 'Olivia Park'],
    dueDate: '2026-07-15',
  },
]

const statusVariant: Record<string, 'green' | 'orange' | 'purple'> = {
  Active: 'green',
  Completed: 'green',
  'On Hold': 'orange',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Projects</h1>
        <p className="text-sm text-steel mt-1">Track and manage all your active projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map(project => (
          <Card key={project.id}>
            <CardBody>
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-base font-semibold text-ink">{project.name}</h2>
                <Badge variant={statusVariant[project.status] ?? 'green'}>
                  {project.status}
                </Badge>
              </div>

              <p className="text-sm text-steel mb-4 leading-relaxed">{project.description}</p>

              <Progress
                value={project.progress}
                color={project.color}
                label="Progress"
                className="mb-4"
              />

              <div className="flex items-center justify-between text-xs text-steel">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{project.team.length} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.dueDate}</span>
                </div>
              </div>

              <div className="flex mt-3 -space-x-2">
                {project.team.slice(0, 4).map(member => (
                  <Avatar key={member} name={member} size="sm" className="border-2 border-white" />
                ))}
                {project.team.length > 4 && (
                  <div className="w-8 h-8 rounded-full bg-hairline border-2 border-white flex items-center justify-center text-xs text-steel font-medium">
                    +{project.team.length - 4}
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
