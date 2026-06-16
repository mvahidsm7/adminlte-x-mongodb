import { render, screen } from '@testing-library/react'
import ReadPage from '../page'

describe('ReadPage', () => {
  it('renders read mail heading', () => {
    render(<ReadPage />)
    expect(screen.getByRole('heading', { name: /read mail/i })).toBeInTheDocument()
  })

  it('shows email subject', () => {
    render(<ReadPage />)
    expect(screen.getByText('Project Kickoff Meeting')).toBeInTheDocument()
  })

  it('shows sender name', () => {
    render(<ReadPage />)
    expect(screen.getByText('Alice Martin')).toBeInTheDocument()
  })

  it('shows email body text', () => {
    render(<ReadPage />)
    expect(screen.getByText(/project kickoff meeting scheduled/i)).toBeInTheDocument()
  })

  it('shows Reply button', () => {
    render(<ReadPage />)
    expect(screen.getByRole('button', { name: /reply/i })).toBeInTheDocument()
  })

  it('shows Forward button', () => {
    render(<ReadPage />)
    expect(screen.getByRole('button', { name: /forward/i })).toBeInTheDocument()
  })

  it('shows Back to Inbox link', () => {
    render(<ReadPage />)
    expect(screen.getByText(/back to inbox/i)).toBeInTheDocument()
  })
})
