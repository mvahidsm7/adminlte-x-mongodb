import clsx from 'clsx'

type InfoBoxColor = 'green' | 'teal' | 'purple' | 'orange'

interface InfoBoxProps {
  icon: React.ReactNode
  title: string
  value: string | number
  color?: InfoBoxColor
  progress?: number
  progressText?: string
}

const iconBgClasses: Record<InfoBoxColor, string> = {
  green:  'bg-mongo-green text-ink',
  teal:   'bg-mongo-teal-deep text-white',
  purple: 'bg-accent-purple text-white',
  orange: 'bg-accent-orange text-white',
}

const progressBarClasses: Record<InfoBoxColor, string> = {
  green:  'bg-mongo-green',
  teal:   'bg-mongo-teal-deep',
  purple: 'bg-accent-purple',
  orange: 'bg-accent-orange',
}

export default function InfoBox({
  icon,
  title,
  value,
  color = 'green',
  progress,
  progressText,
}: InfoBoxProps) {
  const clampedProgress = progress !== undefined
    ? Math.min(100, Math.max(0, progress))
    : undefined

  return (
    <div className="flex rounded-lg bg-white border border-hairline overflow-hidden shadow-level-1">
      <div
        className={clsx(
          'flex items-center justify-center w-[90px] shrink-0 text-3xl',
          iconBgClasses[color],
        )}
      >
        {icon}
      </div>
      <div className="flex-1 p-4 min-w-0">
        <p className="text-sm text-steel">{title}</p>
        <p className="text-2xl font-bold text-ink">{value}</p>
        {clampedProgress !== undefined && (
          <div className="mt-2">
            <div className="h-1 bg-hairline rounded-full">
              <div
                className={clsx('h-1 rounded-full', progressBarClasses[color])}
                style={{ width: `${clampedProgress}%` }}
              />
            </div>
            {progressText && (
              <p className="text-xs text-steel mt-1">{progressText}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
