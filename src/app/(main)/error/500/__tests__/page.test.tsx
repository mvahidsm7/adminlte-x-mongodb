import { render, screen } from '@testing-library/react'
import ServerErrorShowcasePage from '../page'

describe('ServerErrorShowcasePage', () => {
  it('renders 500 code', () => {
    render(<ServerErrorShowcasePage />)
    expect(screen.getByText('500')).toBeInTheDocument()
  })

  it('renders internal server error heading', () => {
    render(<ServerErrorShowcasePage />)
    expect(screen.getByRole('heading', { name: /internal server error/i })).toBeInTheDocument()
  })

  it('shows explanatory message', () => {
    render(<ServerErrorShowcasePage />)
    expect(screen.getByText(/something went wrong on our end/i)).toBeInTheDocument()
  })

  it('has a try again button', () => {
    render(<ServerErrorShowcasePage />)
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('has a link back to the dashboard', () => {
    render(<ServerErrorShowcasePage />)
    const link = screen.getByRole('link', { name: /back to dashboard/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
