import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardBody, CardFooter } from '../Card'

describe('Card', () => {
  it('base variant renders with white bg and border', () => {
    render(<Card>content</Card>)
    const card = screen.getByText('content')
    expect(card).toHaveClass('bg-white')
    expect(card).toHaveClass('border')
    expect(card).toHaveClass('border-hairline')
    expect(card).toHaveClass('rounded-lg')
  })

  it('feature variant renders with mint bg and green border', () => {
    render(<Card variant="feature">content</Card>)
    const card = screen.getByText('content')
    expect(card).toHaveClass('bg-surface-feature')
    expect(card).toHaveClass('border-mongo-green')
  })

  it('dark variant renders with teal-deep bg', () => {
    render(<Card variant="dark">content</Card>)
    const card = screen.getByText('content')
    expect(card).toHaveClass('bg-mongo-teal-deep')
    expect(card).toHaveClass('text-white')
  })

  it('CardHeader renders children with bottom border', () => {
    render(<CardHeader>Header</CardHeader>)
    const header = screen.getByText('Header')
    expect(header).toHaveClass('border-b')
    expect(header).toHaveClass('border-hairline')
  })

  it('CardBody renders children with padding', () => {
    render(<CardBody>Body</CardBody>)
    const body = screen.getByText('Body')
    expect(body).toHaveClass('p-6')
  })

  it('CardFooter renders children with top border', () => {
    render(<CardFooter>Footer</CardFooter>)
    const footer = screen.getByText('Footer')
    expect(footer).toHaveClass('border-t')
  })

  it('merges custom className', () => {
    render(<Card className="col-span-2">content</Card>)
    const card = screen.getByText('content')
    expect(card).toHaveClass('col-span-2')
  })
})
