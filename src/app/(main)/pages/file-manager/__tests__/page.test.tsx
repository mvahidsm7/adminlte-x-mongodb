import { render, screen } from '@testing-library/react'
import FileManagerPage from '../page'

describe('FileManagerPage', () => {
  it('renders file manager heading', () => {
    render(<FileManagerPage />)
    expect(screen.getByRole('heading', { name: /file manager/i })).toBeInTheDocument()
  })

  it('shows folder tree', () => {
    render(<FileManagerPage />)
    expect(screen.getByText('Documents')).toBeInTheDocument()
  })

  it('shows files in main area', () => {
    render(<FileManagerPage />)
    expect(screen.getByText('project-brief.pdf')).toBeInTheDocument()
  })

  it('has upload button', () => {
    render(<FileManagerPage />)
    expect(screen.getByRole('button', { name: /upload/i })).toBeInTheDocument()
  })
})
