import { render, screen } from '@testing-library/react'
import Input from '../Input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders a label when label prop is provided', () => {
    render(<Input label="Email address" />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByText('Email address')).toBeInTheDocument()
  })

  it('input has 44px height class', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toHaveClass('h-[44px]')
  })

  it('input has rounded-md and border classes', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('rounded-md')
    expect(input).toHaveClass('border')
    expect(input).toHaveClass('border-hairline-strong')
  })

  it('renders error message when error prop provided', () => {
    render(<Input error="This field is required" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('renders hint when hint prop provided and no error', () => {
    render(<Input hint="Enter your email" />)
    expect(screen.getByText('Enter your email')).toBeInTheDocument()
  })

  it('hint is hidden when error is also provided', () => {
    render(<Input hint="Hint text" error="Error text" />)
    expect(screen.queryByText('Hint text')).not.toBeInTheDocument()
    expect(screen.getByText('Error text')).toBeInTheDocument()
  })

  it('passes through placeholder', () => {
    render(<Input placeholder="user@example.com" />)
    expect(screen.getByPlaceholderText('user@example.com')).toBeInTheDocument()
  })
})
