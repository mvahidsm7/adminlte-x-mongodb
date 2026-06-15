'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Plus } from 'lucide-react'
import Button from '@/components/ui/Button'

const events = [
  { title: 'Team Standup',     date: '2026-06-16', color: '#00684a' },
  { title: 'Design Review',    date: '2026-06-17', color: '#7b3ff2' },
  { title: 'Sprint Planning',  date: '2026-06-18', color: '#00684a' },
  { title: 'Client Demo',      date: '2026-06-20', color: '#fa6e39' },
  { title: 'Retrospective',    date: '2026-06-25', color: '#00684a' },
  { title: 'Product Launch',   date: '2026-06-28', color: '#fa6e39' },
  { title: '1:1 with Manager', date: '2026-06-19', color: '#001e2b' },
]

export default function CalendarPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Calendar</h1>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add event
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-hairline p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events}
          height="auto"
          eventBorderColor="transparent"
        />
      </div>
    </div>
  )
}
