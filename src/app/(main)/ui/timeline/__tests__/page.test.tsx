import { render, screen } from '@testing-library/react'
import TimelinePage from '../page'

describe('TimelinePage', () => {
  it('renders timeline heading', () => {
    render(<TimelinePage />)
    expect(screen.getByRole('heading', { name: /timeline/i })).toBeInTheDocument()
  })

  it('shows timeline date markers', () => {
    render(<TimelinePage />)
    expect(screen.getByText(/june 16, 2026/i)).toBeInTheDocument()
  })

  it('shows timeline event titles', () => {
    render(<TimelinePage />)
    expect(screen.getByText(/deployed to production/i)).toBeInTheDocument()
  })

  it('shows timeline event descriptions', () => {
    render(<TimelinePage />)
    expect(screen.getByText(/version 4\.2\.0 was deployed/i)).toBeInTheDocument()
  })

  it('shows at least 4 timeline entries', () => {
    render(<TimelinePage />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(4)
  })
})
