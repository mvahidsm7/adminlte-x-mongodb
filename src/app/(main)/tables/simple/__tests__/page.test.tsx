import { render, screen } from '@testing-library/react'
import SimpleTablePage from '../page'

describe('SimpleTablePage', () => {
  it('renders simple table heading', () => {
    render(<SimpleTablePage />)
    expect(screen.getByRole('heading', { name: /simple table/i })).toBeInTheDocument()
  })

  it('renders a table element', () => {
    render(<SimpleTablePage />)
    expect(screen.getAllByRole('table').length).toBeGreaterThanOrEqual(1)
  })

  it('shows column headers', () => {
    render(<SimpleTablePage />)
    expect(screen.getAllByRole('columnheader', { name: /name/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('columnheader', { name: /email/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('columnheader', { name: /role/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('columnheader', { name: /status/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders data rows', () => {
    render(<SimpleTablePage />)
    expect(screen.getAllByText('Alice Martin').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Bob Chen').length).toBeGreaterThanOrEqual(1)
  })

  it('shows active status badge', () => {
    render(<SimpleTablePage />)
    const badges = screen.getAllByText('Active')
    expect(badges.length).toBeGreaterThanOrEqual(1)
  })
})
