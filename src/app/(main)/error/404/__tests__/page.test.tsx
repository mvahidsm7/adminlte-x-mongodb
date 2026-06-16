import { render, screen } from '@testing-library/react'
import NotFoundShowcasePage from '../page'

describe('NotFoundShowcasePage', () => {
  it('renders 404 code', () => {
    render(<NotFoundShowcasePage />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders page not found heading', () => {
    render(<NotFoundShowcasePage />)
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  })

  it('shows explanatory message', () => {
    render(<NotFoundShowcasePage />)
    expect(screen.getByText(/the page you're looking for doesn't exist/i)).toBeInTheDocument()
  })

  it('has a link back to the dashboard', () => {
    render(<NotFoundShowcasePage />)
    const link = screen.getByRole('link', { name: /back to dashboard/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
