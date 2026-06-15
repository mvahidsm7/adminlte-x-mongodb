import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tabs from '../Tabs'

const tabs = [
  { id: 'about', label: 'About', content: <div>About content</div> },
  { id: 'activity', label: 'Activity', content: <div>Activity content</div> },
]

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Activity' })).toBeInTheDocument()
  })

  it('shows first tab content by default', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('About content')).toBeInTheDocument()
  })

  it('switches content on tab click', async () => {
    render(<Tabs tabs={tabs} />)
    await userEvent.click(screen.getByRole('button', { name: 'Activity' }))
    expect(screen.getByText('Activity content')).toBeInTheDocument()
  })

  it('respects defaultTab prop', () => {
    render(<Tabs tabs={tabs} defaultTab="activity" />)
    expect(screen.getByText('Activity content')).toBeInTheDocument()
  })
})
