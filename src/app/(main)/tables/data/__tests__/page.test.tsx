import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DataTablePage from '../page'

describe('DataTablePage', () => {
  it('renders data table heading', () => {
    render(<DataTablePage />)
    expect(screen.getByRole('heading', { name: /data table/i })).toBeInTheDocument()
  })

  it('renders a table element', () => {
    render(<DataTablePage />)
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('shows a search input', () => {
    render(<DataTablePage />)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
  })

  it('shows column headers for name, email, role, status', () => {
    render(<DataTablePage />)
    expect(screen.getByRole('columnheader', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /role/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /status/i })).toBeInTheDocument()
  })

  it('shows first page of users by default', () => {
    render(<DataTablePage />)
    expect(screen.getByText('Alice Martin')).toBeInTheDocument()
  })

  it('filters rows when searching', async () => {
    render(<DataTablePage />)
    await userEvent.type(screen.getByPlaceholderText(/search/i), 'Karen')
    expect(screen.getByText('Karen White')).toBeInTheDocument()
    expect(screen.queryByText('Alice Martin')).not.toBeInTheDocument()
  })

  it('navigates to next page', async () => {
    render(<DataTablePage />)
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Karen White')).toBeInTheDocument()
  })

  it('shows pagination info', () => {
    render(<DataTablePage />)
    expect(screen.getByText(/showing/i)).toBeInTheDocument()
  })
})
