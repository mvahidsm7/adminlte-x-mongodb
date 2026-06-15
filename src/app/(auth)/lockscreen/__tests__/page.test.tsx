import { render, screen } from '@testing-library/react'
import LockscreenPage from '../page'

describe('LockscreenPage', () => {
  it('renders session locked heading', () => {
    render(<LockscreenPage />)
    expect(screen.getByRole('heading', { name: /session locked/i })).toBeInTheDocument()
  })

  it('shows user name and email', () => {
    render(<LockscreenPage />)
    expect(screen.getByText('Admin User')).toBeInTheDocument()
    expect(screen.getByText('admin@example.com')).toBeInTheDocument()
  })

  it('has password input', () => {
    render(<LockscreenPage />)
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  })

  it('has unlock button', () => {
    render(<LockscreenPage />)
    expect(screen.getByRole('button', { name: /unlock/i })).toBeInTheDocument()
  })

  it('has link to sign in as different user', () => {
    render(<LockscreenPage />)
    expect(screen.getByRole('link', { name: /sign in as different user/i })).toHaveAttribute('href', '/login')
  })
})
