import { render, screen } from '@testing-library/react'
import Badge from '../Badge'

describe('Badge', () => {
  it('renders label text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('green variant has mongo-green background', () => {
    render(<Badge variant="green">New</Badge>)
    expect(screen.getByText('New')).toHaveClass('bg-mongo-green')
    expect(screen.getByText('New')).toHaveClass('text-ink')
    expect(screen.getByText('New')).toHaveClass('rounded-sm')
  })

  it('green-soft variant has soft mint background', () => {
    render(<Badge variant="green-soft">Free</Badge>)
    const el = screen.getByText('Free')
    expect(el).toHaveClass('bg-mongo-green-soft')
    expect(el).toHaveClass('text-mongo-green-dark')
    expect(el).toHaveClass('rounded-full')
  })

  it('purple variant has accent-purple background', () => {
    render(<Badge variant="purple">Beta</Badge>)
    expect(screen.getByText('Beta')).toHaveClass('bg-accent-purple')
    expect(screen.getByText('Beta')).toHaveClass('text-white')
  })

  it('orange variant has accent-orange background', () => {
    render(<Badge variant="orange">Hot</Badge>)
    expect(screen.getByText('Hot')).toHaveClass('bg-accent-orange')
  })

  it('popular variant has teal-deep background with green text', () => {
    render(<Badge variant="popular">Popular</Badge>)
    const el = screen.getByText('Popular')
    expect(el).toHaveClass('bg-mongo-teal-deep')
    expect(el).toHaveClass('text-mongo-green')
    expect(el).toHaveClass('rounded-full')
  })
})
