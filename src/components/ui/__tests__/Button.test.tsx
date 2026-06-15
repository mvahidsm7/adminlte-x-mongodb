import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('primary variant has green background and full radius by default', () => {
    render(<Button variant="primary">Primary</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-mongo-green')
    expect(btn).toHaveClass('rounded-full')
    expect(btn).toHaveClass('text-ink')
  })

  it('secondary variant has border and no fill', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('border')
    expect(btn).toHaveClass('border-hairline-strong')
    expect(btn).toHaveClass('rounded-full')
  })

  it('ghost variant has md radius', () => {
    render(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button')).toHaveClass('rounded-md')
  })

  it('link variant uses green-dark text', () => {
    render(<Button variant="link">Link</Button>)
    expect(screen.getByRole('button')).toHaveClass('text-mongo-green-dark')
  })

  it('is disabled when disabled prop passed', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('merges custom className', () => {
    render(<Button className="mt-4">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('mt-4')
  })
})
