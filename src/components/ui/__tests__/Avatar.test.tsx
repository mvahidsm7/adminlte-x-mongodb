import { render, screen } from '@testing-library/react'
import Avatar from '../Avatar'

describe('Avatar', () => {
  it('renders initials from name', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders image when src provided', () => {
    render(<Avatar name="Jane Smith" src="/avatar.jpg" />)
    expect(screen.getByRole('img', { name: 'Jane Smith' })).toBeInTheDocument()
  })

  it('applies size classes', () => {
    const { container } = render(<Avatar name="AB" size="xl" />)
    expect(container.firstChild).toHaveClass('w-20')
  })

  it('uses first two initials only', () => {
    render(<Avatar name="Alice Bob Charlie" />)
    expect(screen.getByText('AB')).toBeInTheDocument()
  })
})
