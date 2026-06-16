import { render, screen } from '@testing-library/react'
import NotFound from '../not-found'

describe('NotFound (root)', () => {
  it('renders 404 code', () => {
    render(<NotFound />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders page not found heading', () => {
    render(<NotFound />)
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  })

  it('has a link back to the dashboard', () => {
    render(<NotFound />)
    const link = screen.getByRole('link', { name: /back to dashboard/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('does not render the app sidebar', () => {
    render(<NotFound />)
    expect(screen.queryByText('AdminLTE')).not.toBeInTheDocument()
  })
})
