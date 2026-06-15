import { render, screen } from '@testing-library/react'
import Select from '../Select'

describe('Select', () => {
  it('renders label', () => {
    render(<Select label="Country"><option value="us">US</option></Select>)
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument()
  })

  it('renders children as options', () => {
    render(<Select label="Size"><option value="sm">Small</option><option value="lg">Large</option></Select>)
    expect(screen.getByRole('option', { name: 'Small' })).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Select label="Plan" error="Required"><option value="">Pick one</option></Select>)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('shows hint when no error', () => {
    render(<Select label="Plan" hint="Choose wisely"><option value="a">A</option></Select>)
    expect(screen.getByText('Choose wisely')).toBeInTheDocument()
  })
})
