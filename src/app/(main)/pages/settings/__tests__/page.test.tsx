import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SettingsPage from '../page'

describe('SettingsPage', () => {
  it('renders settings heading', () => {
    render(<SettingsPage />)
    expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
  })

  it('shows Profile tab content by default', () => {
    render(<SettingsPage />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
  })

  it('switches to Security tab', async () => {
    render(<SettingsPage />)
    await userEvent.click(screen.getByRole('button', { name: 'Security' }))
    expect(screen.getByLabelText(/current password/i)).toBeInTheDocument()
  })

  it('switches to Notifications tab', async () => {
    render(<SettingsPage />)
    await userEvent.click(screen.getByRole('button', { name: 'Notifications' }))
    expect(screen.getByText(/email notifications/i)).toBeInTheDocument()
  })
})
