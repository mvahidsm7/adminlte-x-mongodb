import { render, screen } from '@testing-library/react'
import ForgotPasswordPage from '../page'

describe('ForgotPasswordPage', () => {
  it('renders forgot password heading', () => {
    render(<ForgotPasswordPage />)
    expect(screen.getByRole('heading', { name: /forgot your password/i })).toBeInTheDocument()
  })

  it('has email address input', () => {
    render(<ForgotPasswordPage />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('has send reset link button', () => {
    render(<ForgotPasswordPage />)
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument()
  })

  it('has link back to sign in', () => {
    render(<ForgotPasswordPage />)
    expect(screen.getByRole('link', { name: /back to sign in/i })).toHaveAttribute('href', '/login')
  })

  it('shows instructional copy', () => {
    render(<ForgotPasswordPage />)
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument()
  })
})
