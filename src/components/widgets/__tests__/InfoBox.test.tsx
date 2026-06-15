import { render, screen } from '@testing-library/react'
import InfoBox from '../InfoBox'
import { Download } from 'lucide-react'

describe('InfoBox', () => {
  const defaultProps = {
    icon: <Download data-testid="icon" />,
    title: 'Downloads',
    value: '3,200',
  }

  it('renders title and value', () => {
    render(<InfoBox {...defaultProps} />)
    expect(screen.getByText('Downloads')).toBeInTheDocument()
    expect(screen.getByText('3,200')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<InfoBox {...defaultProps} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('green color applies mongo-green to icon panel', () => {
    render(<InfoBox {...defaultProps} color="green" />)
    const iconPanel = screen.getByTestId('icon').closest('[class*="bg-mongo-green"]')
    expect(iconPanel).toBeInTheDocument()
  })

  it('renders progress bar when progress prop provided', () => {
    render(<InfoBox {...defaultProps} progress={70} />)
    const bar = document.querySelector('[style*="width: 70%"]')
    expect(bar).toBeInTheDocument()
  })

  it('does not render progress bar when progress is undefined', () => {
    render(<InfoBox {...defaultProps} />)
    const bar = document.querySelector('[style*="width"]')
    expect(bar).not.toBeInTheDocument()
  })

  it('clamps progress to 100 max', () => {
    render(<InfoBox {...defaultProps} progress={150} />)
    const bar = document.querySelector('[style*="width: 100%"]')
    expect(bar).toBeInTheDocument()
  })

  it('renders progressText when provided', () => {
    render(<InfoBox {...defaultProps} progress={70} progressText="70% of target" />)
    expect(screen.getByText('70% of target')).toBeInTheDocument()
  })
})
