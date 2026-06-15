import { forwardRef, useId } from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id: idProp, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId
    return (
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className="w-4 h-4 rounded border-hairline-strong accent-mongo-green"
          {...props}
        />
        {label && <span className="text-sm text-ink">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'
export default Checkbox
