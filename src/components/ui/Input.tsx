import { forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-ink">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'h-[44px] w-full rounded-md border border-hairline-strong bg-white px-4 text-base text-ink',
            'placeholder:text-muted',
            'focus:outline-none focus:border-2 focus:border-mongo-green-dark',
            error && 'border-red-500 focus:border-red-500',
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        {hint && !error && <p className="text-sm text-steel">{hint}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
