import { render, screen } from '@testing-library/react'
import InboxPage from '../page'

describe('InboxPage', () => {
  it('renders inbox heading', () => {
    render(<InboxPage />)
    expect(screen.getByRole('heading', { name: /inbox/i })).toBeInTheDocument()
  })

  it('renders email list', () => {
    render(<InboxPage />)
    expect(screen.getByText('Alice Martin')).toBeInTheDocument()
    expect(screen.getByText('Bob Chen')).toBeInTheDocument()
  })

  it('shows email subjects', () => {
    render(<InboxPage />)
    expect(screen.getByText('Project Kickoff Meeting')).toBeInTheDocument()
  })

  it('shows unread count badge', () => {
    render(<InboxPage />)
    // Unread emails: Alice (id:1) and David (id:4)
    expect(screen.getByText(/2 unread/i)).toBeInTheDocument()
  })

  it('shows compose button', () => {
    render(<InboxPage />)
    expect(screen.getByRole('button', { name: /compose/i })).toBeInTheDocument()
  })

  it('shows email preview for first email', () => {
    render(<InboxPage />)
    expect(screen.getByText(/project kickoff meeting/i)).toBeInTheDocument()
  })
})
