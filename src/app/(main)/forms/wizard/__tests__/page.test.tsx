import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WizardPage from '../page'

describe('WizardPage', () => {
  it('renders wizard heading', () => {
    render(<WizardPage />)
    expect(screen.getByRole('heading', { name: /form wizard/i })).toBeInTheDocument()
  })

  it('shows step 1 content by default', () => {
    render(<WizardPage />)
    expect(screen.getByText(/personal information/i)).toBeInTheDocument()
  })

  it('navigates to step 2 on Next click', async () => {
    render(<WizardPage />)
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText(/account setup/i)).toBeInTheDocument()
  })

  it('navigates back to step 1 from step 2', async () => {
    render(<WizardPage />)
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    await userEvent.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText(/personal information/i)).toBeInTheDocument()
  })

  it('shows submit button on last step', async () => {
    render(<WizardPage />)
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })
})
