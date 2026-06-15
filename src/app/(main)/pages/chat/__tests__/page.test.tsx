import { render, screen } from '@testing-library/react'
import ChatPage from '../page'

describe('ChatPage', () => {
  it('renders chat heading', () => {
    render(<ChatPage />)
    expect(screen.getByRole('heading', { name: /chat/i })).toBeInTheDocument()
  })

  it('shows conversation list', () => {
    render(<ChatPage />)
    expect(screen.getByText('Alice Brown')).toBeInTheDocument()
  })

  it('shows chat messages', () => {
    render(<ChatPage />)
    expect(screen.getByText(/hey, how's the project going/i)).toBeInTheDocument()
  })

  it('has message input', () => {
    render(<ChatPage />)
    expect(screen.getByPlaceholderText(/type a message/i)).toBeInTheDocument()
  })
})
