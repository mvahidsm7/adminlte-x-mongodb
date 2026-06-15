import { render, screen } from '@testing-library/react'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Remember me" />)
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument()
  })

  it('renders as a checkbox input', () => {
    render(<Checkbox label="Agree" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<Checkbox label="Opt in" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
