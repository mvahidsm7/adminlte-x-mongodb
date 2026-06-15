import { render, screen } from '@testing-library/react'
import FormLayoutPage from '../page'

describe('FormLayoutPage', () => {
  it('renders form layout heading', () => {
    render(<FormLayoutPage />)
    expect(screen.getByRole('heading', { name: /form layout/i })).toBeInTheDocument()
  })

  it('shows vertical layout section', () => {
    render(<FormLayoutPage />)
    expect(screen.getByText(/vertical form/i)).toBeInTheDocument()
  })

  it('shows horizontal layout section', () => {
    render(<FormLayoutPage />)
    expect(screen.getByText(/horizontal form/i)).toBeInTheDocument()
  })

  it('shows inline layout section', () => {
    render(<FormLayoutPage />)
    expect(screen.getByText(/inline form/i)).toBeInTheDocument()
  })

  it('has submit buttons in each form', () => {
    render(<FormLayoutPage />)
    expect(screen.getAllByRole('button', { name: /submit/i }).length).toBeGreaterThanOrEqual(2)
  })
})
