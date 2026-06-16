import { render, screen } from '@testing-library/react'
import WidgetsPage from '../page'

describe('WidgetsPage', () => {
  it('renders widgets heading', () => {
    render(<WidgetsPage />)
    expect(screen.getByRole('heading', { name: /^widgets$/i })).toBeInTheDocument()
  })

  it('shows SmallBox stat widgets', () => {
    render(<WidgetsPage />)
    expect(screen.getByText('New Orders')).toBeInTheDocument()
    expect(screen.getByText('1,410')).toBeInTheDocument()
  })

  it('shows InfoBox widgets with progress', () => {
    render(<WidgetsPage />)
    expect(screen.getByText('CPU Usage')).toBeInTheDocument()
  })

  it('shows card variants section', () => {
    render(<WidgetsPage />)
    expect(screen.getByText(/card variants/i)).toBeInTheDocument()
  })

  it('renders multiple SmallBox color variants', () => {
    render(<WidgetsPage />)
    expect(screen.getByText('New Orders')).toBeInTheDocument()
    expect(screen.getByText('Bounce Rate')).toBeInTheDocument()
  })
})
