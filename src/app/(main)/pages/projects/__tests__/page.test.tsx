import { render, screen } from '@testing-library/react'
import ProjectsPage from '../page'

describe('ProjectsPage', () => {
  it('renders projects heading', () => {
    render(<ProjectsPage />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })

  it('shows project cards', () => {
    render(<ProjectsPage />)
    expect(screen.getByText('AdminLTE Next.js')).toBeInTheDocument()
    expect(screen.getByText('MongoDB Dashboard')).toBeInTheDocument()
  })

  it('shows project progress bars', () => {
    render(<ProjectsPage />)
    expect(screen.getAllByRole('progressbar').length).toBeGreaterThanOrEqual(1)
  })

  it('shows status badges', () => {
    render(<ProjectsPage />)
    expect(screen.getAllByText(/active|completed|on hold/i).length).toBeGreaterThanOrEqual(1)
  })
})
