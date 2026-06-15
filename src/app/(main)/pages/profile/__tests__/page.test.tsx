import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfilePage from '../page'

describe('ProfilePage', () => {
  it('renders profile heading with user name', () => {
    render(<ProfilePage />)
    expect(screen.getByRole('heading', { name: /admin user/i })).toBeInTheDocument()
  })

  it('shows user stats', () => {
    render(<ProfilePage />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Tasks Done')).toBeInTheDocument()
  })

  it('renders About tab content by default', () => {
    render(<ProfilePage />)
    expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument()
  })

  it('switches to Activity tab', async () => {
    render(<ProfilePage />)
    await userEvent.click(screen.getByRole('button', { name: 'Activity' }))
    expect(screen.getByText(/created project/i)).toBeInTheDocument()
  })
})
