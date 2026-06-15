import { Bell, Menu, Search, User } from 'lucide-react'

interface TopHeaderProps {
  onMenuToggle: () => void
}

export default function TopHeader({ onMenuToggle }: TopHeaderProps) {
  return (
    <header className="flex items-center h-14 px-4 bg-white border-b border-hairline shrink-0 gap-4 z-10">
      <button
        onClick={onMenuToggle}
        className="p-1.5 text-steel hover:text-ink rounded-md hover:bg-surface transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="relative hidden sm:flex items-center flex-1 max-w-sm">
        <Search className="absolute left-3 w-4 h-4 text-muted pointer-events-none" />
        <input
          type="search"
          placeholder="Search..."
          className="h-[44px] w-full rounded-md border border-hairline-strong bg-surface pl-9 pr-4 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-2 focus:border-mongo-green-dark"
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button
          className="relative p-2 text-steel hover:text-ink rounded-md hover:bg-surface transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-mongo-green rounded-full" />
        </button>

        <button className="flex items-center gap-2 p-1.5 rounded-md hover:bg-surface transition-colors">
          <div className="w-8 h-8 rounded-full bg-mongo-teal-deep flex items-center justify-center text-mongo-green">
            <User className="w-4 h-4" />
          </div>
          <span className="hidden sm:block text-sm font-medium text-ink">Admin</span>
        </button>
      </div>
    </header>
  )
}
