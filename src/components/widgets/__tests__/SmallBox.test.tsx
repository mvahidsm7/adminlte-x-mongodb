import { render, screen } from '@testing-library/react'
import SmallBox from '../SmallBox'
import { ShoppingCart } from 'lucide-react'

describe('SmallBox', () => {
  const defaultProps = {
    title: 'New Orders',
    value: '150',
    icon: <ShoppingCart data-testid="icon" />,
  }

  it('renders title and value', () => {
    render(<SmallBox {...defaultProps} />)
    expect(screen.getByText('New Orders')).toBeInTheDocument()
    expect(screen.getByText('150')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<SmallBox {...defaultProps} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('green color applies mongo-green background', () => {
    const { container } = render(<SmallBox {...defaultProps} color="green" />)
    expect(container.firstChild).toHaveClass('bg-mongo-green')
  })

  it('teal color applies teal-deep background', () => {
    const { container } = render(<SmallBox {...defaultProps} color="teal" />)
    expect(container.firstChild).toHaveClass('bg-mongo-teal-deep')
  })

  it('renders the link text', () => {
    render(<SmallBox {...defaultProps} linkText="View details" />)
    expect(screen.getByText('View details')).toBeInTheDocument()
  })

  it('link href is applied', () => {
    render(<SmallBox {...defaultProps} href="/orders" linkText="Go" />)
    expect(screen.getByRole('link', { name: /Go/i })).toHaveAttribute('href', '/orders')
  })
})
