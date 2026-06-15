import clsx from 'clsx'

interface AvatarProps {
  src?: string
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses: Record<string, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-xl',
}

export default function Avatar({ src, name, size = 'md', className = '' }: AvatarProps) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
  return (
    <div
      className={clsx(
        'rounded-full bg-mongo-teal-deep flex items-center justify-center overflow-hidden shrink-0',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="font-semibold text-mongo-green">{initials}</span>
      )}
    </div>
  )
}
