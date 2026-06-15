'use client'
import { useState } from 'react'
import clsx from 'clsx'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export default function Tabs({ tabs, defaultTab, className = '' }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? '')
  const current = tabs.find(t => t.id === active)

  return (
    <div className={className}>
      <div className="flex gap-1 p-1 bg-surface rounded-lg border border-hairline mb-6 w-fit">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={clsx(
              'px-5 py-2 text-sm font-medium rounded-md transition-colors',
              active === tab.id
                ? 'bg-white text-ink shadow-level-1'
                : 'text-steel hover:text-ink'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{current?.content}</div>
    </div>
  )
}
