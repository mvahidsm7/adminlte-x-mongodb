import { render, screen } from '@testing-library/react'
import Progress from '../Progress'

describe('Progress', () => {
  it('renders with correct aria value', () => {
    render(<Progress value={60} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60')
  })

  it('clamps value to 100', () => {
    render(<Progress value={150} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('clamps value to 0', () => {
    render(<Progress value={-10} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })

  it('renders label with percentage', () => {
    render(<Progress value={75} label="Progress" />)
    expect(screen.getByText('Progress')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })
})
