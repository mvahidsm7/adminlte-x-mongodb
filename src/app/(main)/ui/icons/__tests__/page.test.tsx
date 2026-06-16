import { render, screen } from '@testing-library/react'
import IconsPage from '../page'

describe('IconsPage', () => {
  it('renders icons heading', () => {
    render(<IconsPage />)
    expect(screen.getByRole('heading', { name: /icons/i })).toBeInTheDocument()
  })

  it('shows icon name labels', () => {
    render(<IconsPage />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('renders a search input to filter icons', () => {
    render(<IconsPage />)
    expect(screen.getByPlaceholderText(/search icons/i)).toBeInTheDocument()
  })

  it('shows total icon count', () => {
    render(<IconsPage />)
    expect(screen.getByText(/\d+ icons/i)).toBeInTheDocument()
  })
})
