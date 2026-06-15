import { render, screen } from '@testing-library/react'
import RegisterV2Page from '../page'

describe('RegisterV2Page', () => {
  it('renders create account heading', () => {
    render(<RegisterV2Page />)
    expect(screen.getByRole('heading', { name: /create account/i })).toBeInTheDocument()
  })

  it('has full name, email, password, confirm password inputs', () => {
    render(<RegisterV2Page />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('has create account button', () => {
    render(<RegisterV2Page />)
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('left panel tagline is rendered', () => {
    render(<RegisterV2Page />)
    expect(screen.getByText(/build something/i)).toBeInTheDocument()
  })

  it('has link to login-v2 page', () => {
    render(<RegisterV2Page />)
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '/login-v2')
  })
})
