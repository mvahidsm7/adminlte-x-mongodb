import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ValidationPage from '../page'

describe('ValidationPage', () => {
  it('renders validation heading', () => {
    render(<ValidationPage />)
    expect(screen.getByRole('heading', { name: /form validation/i })).toBeInTheDocument()
  })

  it('shows success state section', () => {
    render(<ValidationPage />)
    expect(screen.getByText(/valid input/i)).toBeInTheDocument()
  })

  it('shows error state section', () => {
    render(<ValidationPage />)
    expect(screen.getByText(/invalid input/i)).toBeInTheDocument()
  })

  it('shows errors on submit when fields are empty', async () => {
    render(<ValidationPage />)
    await userEvent.click(screen.getByRole('button', { name: /validate/i }))
    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
  })

  it('clears error after typing', async () => {
    render(<ValidationPage />)
    await userEvent.click(screen.getByRole('button', { name: /validate/i }))
    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    await userEvent.type(screen.getByLabelText(/your name/i), 'John')
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument()
  })
})
