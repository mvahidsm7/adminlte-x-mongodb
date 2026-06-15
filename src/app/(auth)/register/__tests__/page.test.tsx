import { render, screen } from '@testing-library/react'
import RegisterPage from '../page'

describe('RegisterPage', () => {
  it('renders create account heading', () => {
    render(<RegisterPage />)
    expect(screen.getByRole('heading', { name: /create account/i })).toBeInTheDocument()
  })

  it('has full name, email, password, and confirm password inputs', () => {
    render(<RegisterPage />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('has create account button', () => {
    render(<RegisterPage />)
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('has terms of service checkbox', () => {
    render(<RegisterPage />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('has link to sign in page', () => {
    render(<RegisterPage />)
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '/login')
  })
})
