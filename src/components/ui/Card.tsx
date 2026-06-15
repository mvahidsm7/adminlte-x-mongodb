import clsx from 'clsx'

type CardVariant = 'base' | 'feature' | 'dark'

interface CardProps {
  variant?: CardVariant
  className?: string
  children: React.ReactNode
}

interface CardSectionProps {
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<CardVariant, string> = {
  base:    'bg-white border border-hairline rounded-lg shadow-level-0',
  feature: 'bg-surface-feature border-2 border-mongo-green rounded-lg',
  dark:    'bg-mongo-teal-deep text-white rounded-lg',
}

export function Card({ variant = 'base', className, children }: CardProps) {
  return (
    <div className={clsx(variantClasses[variant], className)}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children }: CardSectionProps) {
  return (
    <div className={clsx('px-6 py-4 border-b border-hairline', className)}>
      {children}
    </div>
  )
}

export function CardBody({ className, children }: CardSectionProps) {
  return (
    <div className={clsx('p-6', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children }: CardSectionProps) {
  return (
    <div className={clsx('px-6 py-4 border-t border-hairline', className)}>
      {children}
    </div>
  )
}
