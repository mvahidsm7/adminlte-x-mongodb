import { render, screen } from '@testing-library/react'
import CalendarPage from '../page'

jest.mock('@fullcalendar/react', () => ({
  __esModule: true,
  default: ({ events }: { events: { title: string }[] }) => (
    <div data-testid="fullcalendar">
      {events.map((e: { title: string }, i: number) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  ),
}))
jest.mock('@fullcalendar/daygrid', () => ({ __esModule: true, default: {} }))
jest.mock('@fullcalendar/timegrid', () => ({ __esModule: true, default: {} }))
jest.mock('@fullcalendar/interaction', () => ({ __esModule: true, default: {} }))

describe('CalendarPage', () => {
  it('renders calendar heading', () => {
    render(<CalendarPage />)
    expect(screen.getByRole('heading', { name: /calendar/i })).toBeInTheDocument()
  })

  it('renders the fullcalendar component', () => {
    render(<CalendarPage />)
    expect(screen.getByTestId('fullcalendar')).toBeInTheDocument()
  })

  it('shows mock events', () => {
    render(<CalendarPage />)
    expect(screen.getByText('Team Standup')).toBeInTheDocument()
  })

  it('shows add event button', () => {
    render(<CalendarPage />)
    expect(screen.getByRole('button', { name: /add event/i })).toBeInTheDocument()
  })
})
