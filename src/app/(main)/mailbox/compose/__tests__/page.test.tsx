import { render, screen } from '@testing-library/react'
import ComposePage from '../page'

describe('ComposePage', () => {
  it('renders compose heading', () => {
    render(<ComposePage />)
    expect(screen.getByRole('heading', { name: /compose/i })).toBeInTheDocument()
  })

  it('renders To field', () => {
    render(<ComposePage />)
    expect(screen.getByLabelText(/to/i)).toBeInTheDocument()
  })

  it('renders Subject field', () => {
    render(<ComposePage />)
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
  })

  it('renders message body textarea', () => {
    render(<ComposePage />)
    expect(screen.getByPlaceholderText(/write your message/i)).toBeInTheDocument()
  })

  it('renders Send button', () => {
    render(<ComposePage />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('renders Save Draft button', () => {
    render(<ComposePage />)
    expect(screen.getByRole('button', { name: /save draft/i })).toBeInTheDocument()
  })
})
