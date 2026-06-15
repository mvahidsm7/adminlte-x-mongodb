import { forwardRef, useId } from 'react'
import clsx from 'clsx'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  hint?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, className, children, id: idProp, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : autoId)
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-ink">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={clsx(
            'h-[44px] w-full rounded-md border px-3 text-ink text-sm bg-white',
            'focus:outline-none focus:border-2 focus:border-mongo-green-dark',
            error ? 'border-red-500' : 'border-hairline-strong',
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && <p className="text-xs text-red-600">{error}</p>}
        {!error && hint && <p className="text-xs text-steel">{hint}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'
export default Select
