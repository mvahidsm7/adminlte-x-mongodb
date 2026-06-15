import { render, screen } from '@testing-library/react'
import LoginV2Page from '../page'

describe('LoginV2Page', () => {
  it('renders sign in heading', () => {
    render(<LoginV2Page />)
    expect(screen.getByRole('heading', { name: /^sign in$/i })).toBeInTheDocument()
  })

  it('has email and password inputs', () => {
    render(<LoginV2Page />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  })

  it('has sign in button', () => {
    render(<LoginV2Page />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('left panel tagline is rendered', () => {
    render(<LoginV2Page />)
    expect(screen.getByText(/manage your workspace/i)).toBeInTheDocument()
  })

  it('has link to register-v2 page', () => {
    render(<LoginV2Page />)
    expect(screen.getByRole('link', { name: /create one/i })).toHaveAttribute('href', '/register-v2')
  })

  it('has link to forgot password', () => {
    render(<LoginV2Page />)
    expect(screen.getByRole('link', { name: /forgot password/i })).toHaveAttribute('href', '/forgot-password')
  })
})
