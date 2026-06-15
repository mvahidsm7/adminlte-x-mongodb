import { render, screen } from '@testing-library/react'
import MaintenancePage from '../page'

describe('MaintenancePage', () => {
  it('renders maintenance heading', () => {
    render(<MaintenancePage />)
    expect(screen.getByRole('heading', { name: /under maintenance/i })).toBeInTheDocument()
  })

  it('shows descriptive message', () => {
    render(<MaintenancePage />)
    expect(screen.getByText(/be back soon/i)).toBeInTheDocument()
  })

  it('has back to home link', () => {
    render(<MaintenancePage />)
    expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/')
  })
})
