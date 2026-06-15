import { render, screen } from '@testing-library/react'
import LoginPage from '../page'

describe('LoginPage', () => {
  it('renders the welcome back heading', () => {
    render(<LoginPage />)
    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument()
  })

  it('has email and password inputs', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  })

  it('has a sign in button', () => {
    render(<LoginPage />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('has a link to the register page', () => {
    render(<LoginPage />)
    expect(screen.getByRole('link', { name: /create one/i })).toHaveAttribute('href', '/register')
  })

  it('has a link to forgot password', () => {
    render(<LoginPage />)
    expect(screen.getByRole('link', { name: /forgot password/i })).toHaveAttribute('href', '/forgot-password')
  })

  it('has remember me checkbox', () => {
    render(<LoginPage />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
