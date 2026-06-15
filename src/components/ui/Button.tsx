import { forwardRef } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link' | 'on-dark' | 'secondary-on-dark'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-mongo-green text-ink rounded-full px-[22px] py-[10px] font-semibold hover:bg-mongo-green-dark hover:text-white',
  secondary:
    'bg-transparent text-ink rounded-full px-[22px] py-[10px] border border-hairline-strong font-semibold hover:bg-surface',
  ghost:
    'bg-transparent text-ink rounded-md px-3 py-2 font-semibold hover:bg-surface',
  link:
    'bg-transparent text-mongo-green-dark font-medium text-sm p-0 hover:underline',
  'on-dark':
    'bg-mongo-green text-ink rounded-full px-[22px] py-[10px] font-semibold',
  'secondary-on-dark':
    'bg-transparent text-white rounded-full px-[22px] py-[10px] border border-hairline-dark font-semibold',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center text-sm leading-[1.3] transition-colors duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-mongo-green',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
)

Button.displayName = 'Button'
export default Button
