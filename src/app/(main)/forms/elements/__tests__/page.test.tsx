import { render, screen } from '@testing-library/react'
import ElementsPage from '../page'

describe('ElementsPage', () => {
  it('renders form elements heading', () => {
    render(<ElementsPage />)
    expect(screen.getByRole('heading', { name: /form elements/i })).toBeInTheDocument()
  })

  it('shows text input section', () => {
    render(<ElementsPage />)
    expect(screen.getByLabelText(/text input/i)).toBeInTheDocument()
  })

  it('shows select dropdown', () => {
    render(<ElementsPage />)
    expect(screen.getByLabelText(/select option/i)).toBeInTheDocument()
  })

  it('shows textarea', () => {
    render(<ElementsPage />)
    expect(screen.getByRole('textbox', { name: /textarea/i })).toBeInTheDocument()
  })

  it('shows error state input', () => {
    render(<ElementsPage />)
    expect(screen.getByText(/this field is required/i)).toBeInTheDocument()
  })

  it('shows checkboxes', () => {
    render(<ElementsPage />)
    expect(screen.getAllByRole('checkbox').length).toBeGreaterThanOrEqual(2)
  })

  it('shows radio buttons', () => {
    render(<ElementsPage />)
    expect(screen.getAllByRole('radio').length).toBeGreaterThanOrEqual(2)
  })
})
