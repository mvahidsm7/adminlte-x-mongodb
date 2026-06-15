import clsx from 'clsx'

type BadgeVariant = 'green' | 'green-soft' | 'purple' | 'orange' | 'popular'

interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  'green':      'bg-mongo-green text-ink rounded-sm px-2 py-0.5',
  'green-soft': 'bg-mongo-green-soft text-mongo-green-dark rounded-full px-[10px] py-1',
  'purple':     'bg-accent-purple text-white rounded-sm px-2 py-0.5',
  'orange':     'bg-accent-orange text-white rounded-sm px-2 py-0.5',
  'popular':    'bg-mongo-teal-deep text-mongo-green rounded-full px-[10px] py-1',
}

export default function Badge({ variant = 'green', className, children }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center text-[13px] font-semibold leading-[1.4]',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
