import { render, screen } from '@testing-library/react'
import InvoicePage from '../page'

describe('InvoicePage', () => {
  it('renders invoice heading', () => {
    render(<InvoicePage />)
    expect(screen.getByRole('heading', { name: /invoice/i })).toBeInTheDocument()
  })

  it('shows invoice number', () => {
    render(<InvoicePage />)
    expect(screen.getByText(/#INV-2026-001/i)).toBeInTheDocument()
  })

  it('shows bill to section', () => {
    render(<InvoicePage />)
    expect(screen.getByText(/bill to/i)).toBeInTheDocument()
  })

  it('shows total amount', () => {
    render(<InvoicePage />)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
  })

  it('has print button', () => {
    render(<InvoicePage />)
    expect(screen.getByRole('button', { name: /print/i })).toBeInTheDocument()
  })
})
