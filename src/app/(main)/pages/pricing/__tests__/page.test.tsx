import { render, screen } from '@testing-library/react'
import PricingPage from '../page'

describe('PricingPage', () => {
  it('renders pricing heading', () => {
    render(<PricingPage />)
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument()
  })

  it('shows three pricing tiers', () => {
    render(<PricingPage />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('shows pricing amounts', () => {
    render(<PricingPage />)
    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
  })

  it('has get started buttons', () => {
    render(<PricingPage />)
    expect(screen.getAllByRole('button', { name: /get started/i }).length).toBeGreaterThanOrEqual(2)
  })
})
