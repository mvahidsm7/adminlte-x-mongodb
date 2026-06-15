'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { navigation, NavItem, NavSection } from '@/lib/navigation'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function NavMenuItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)
  const isActive = item.href === pathname
  const hasChildren = (item.children?.length ?? 0) > 0
  const Icon = item.icon

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setExpanded(prev => !prev)}
          className={clsx(
            'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
            depth === 0
              ? 'text-white/80 hover:bg-white/10 hover:text-white'
              : 'text-white/60 hover:text-white/90 pl-10',
          )}
        >
          {Icon && <Icon className="w-4 h-4 shrink-0" />}
          <span className="flex-1 text-left">{item.label}</span>
          {expanded
            ? <ChevronDown className="w-3 h-3 shrink-0" />
            : <ChevronRight className="w-3 h-3 shrink-0" />
          }
        </button>
        {expanded && (
          <ul className="mt-1 space-y-0.5">
            {item.children!.map(child => (
              <NavMenuItem key={child.label} item={child} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <li>
      <Link
        href={item.href!}
        className={clsx(
          'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
          depth > 0 && 'pl-10',
          isActive
            ? 'bg-mongo-green/20 text-mongo-green font-medium'
            : depth === 0
              ? 'text-white/80 hover:bg-white/10 hover:text-white'
              : 'text-white/60 hover:text-white/90',
        )}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        {item.label}
      </Link>
    </li>
  )
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'flex flex-col w-[260px] bg-mongo-teal-deep shrink-0 overflow-y-auto z-30 transition-transform duration-300 ease-in-out',
        'fixed inset-y-0 left-0 lg:relative lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {/* Brand */}
      <div className="flex items-center justify-between h-14 px-4 border-b border-white/10 shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-mongo-green flex items-center justify-center">
            <span className="text-ink font-bold text-xs select-none">A</span>
          </div>
          <span className="text-white font-semibold text-[15px]">AdminLTE</span>
        </Link>
        <button
          onClick={onClose}
          className="lg:hidden text-white/60 hover:text-white p-1 transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
        {navigation.map((section: NavSection) => (
          <div key={section.heading}>
            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[1px] text-white/30">
              {section.heading}
            </p>
            <ul className="space-y-0.5">
              {section.items.map(item => (
                <NavMenuItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
