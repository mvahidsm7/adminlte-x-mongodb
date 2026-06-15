import clsx from 'clsx'

interface ProgressProps {
  value: number
  color?: 'green' | 'teal' | 'purple' | 'orange'
  size?: 'sm' | 'md'
  label?: string
  className?: string
}

const colorClasses: Record<string, string> = {
  green: 'bg-mongo-green',
  teal: 'bg-mongo-teal',
  purple: 'bg-accent-purple',
  orange: 'bg-accent-orange',
}

export default function Progress({ value, color = 'green', size = 'sm', label, className = '' }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const h = size === 'sm' ? 'h-1.5' : 'h-2.5'
  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between text-xs text-steel mb-1">
          <span>{label}</span>
          <span>{clamped}%</span>
        </div>
      )}
      <div className={clsx('w-full rounded-full bg-hairline', h)}>
        <div
          className={clsx(h, 'rounded-full transition-all', colorClasses[color])}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
