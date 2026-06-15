import clsx from 'clsx'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type SmallBoxColor = 'green' | 'teal' | 'purple' | 'orange'

interface SmallBoxProps {
  title: string
  value: string | number
  color?: SmallBoxColor
  href?: string
  linkText?: string
  icon: React.ReactNode
}

const bgClasses: Record<SmallBoxColor, string> = {
  green:  'bg-mongo-green text-ink',
  teal:   'bg-mongo-teal-deep text-white',
  purple: 'bg-accent-purple text-white',
  orange: 'bg-accent-orange text-white',
}

const linkBgClasses: Record<SmallBoxColor, string> = {
  green:  'bg-mongo-green-dark text-white',
  teal:   'bg-mongo-teal text-white',
  purple: 'bg-purple-700 text-white',
  orange: 'bg-orange-600 text-white',
}

export default function SmallBox({
  title,
  value,
  color = 'green',
  href = '#',
  linkText = 'More info',
  icon,
}: SmallBoxProps) {
  return (
    <div className={clsx('rounded-lg overflow-hidden', bgClasses[color])}>
      <div className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className="text-4xl opacity-30">{icon}</div>
      </div>
      <Link
        href={href}
        className={clsx(
          'flex items-center justify-between px-6 py-2 text-sm font-medium transition-opacity hover:opacity-80',
          linkBgClasses[color],
        )}
      >
        {linkText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
