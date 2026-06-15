import { render, screen } from '@testing-library/react'
import FAQPage from '../page'

describe('FAQPage', () => {
  it('renders FAQ heading', () => {
    render(<FAQPage />)
    expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument()
  })

  it('renders FAQ items', () => {
    render(<FAQPage />)
    expect(screen.getByText(/what is adminlte/i)).toBeInTheDocument()
  })

  it('renders multiple questions', () => {
    render(<FAQPage />)
    const groups = screen.getAllByRole('group')
    expect(groups.length).toBeGreaterThanOrEqual(4)
  })

  it('has contact section', () => {
    render(<FAQPage />)
    expect(screen.getByText(/still have questions/i)).toBeInTheDocument()
  })
})
