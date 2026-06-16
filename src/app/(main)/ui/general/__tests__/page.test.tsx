import { render, screen } from '@testing-library/react'
import GeneralPage from '../page'

describe('GeneralPage', () => {
  it('renders general UI elements heading', () => {
    render(<GeneralPage />)
    expect(screen.getByRole('heading', { name: /general ui elements/i })).toBeInTheDocument()
  })

  it('shows typography samples', () => {
    render(<GeneralPage />)
    expect(screen.getByRole('heading', { name: /^heading 1$/i })).toBeInTheDocument()
  })

  it('shows color swatches', () => {
    render(<GeneralPage />)
    expect(screen.getByText(/mongo green/i)).toBeInTheDocument()
  })

  it('shows alert banners', () => {
    render(<GeneralPage />)
    expect(screen.getByText(/this is a success alert/i)).toBeInTheDocument()
    expect(screen.getByText(/this is an error alert/i)).toBeInTheDocument()
  })

  it('shows badge variants', () => {
    render(<GeneralPage />)
    expect(screen.getAllByText(/^primary$/i).length).toBeGreaterThanOrEqual(1)
  })

  it('shows button variants', () => {
    render(<GeneralPage />)
    expect(screen.getByRole('button', { name: /^primary button$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^secondary button$/i })).toBeInTheDocument()
  })
})
