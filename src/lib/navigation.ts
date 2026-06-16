import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href?: string
  icon?: LucideIcon
  children?: NavItem[]
}

export interface NavSection {
  heading: string
  items: NavItem[]
}

import {
  LayoutDashboard, User, Settings, Calendar, MessageSquare,
  HelpCircle, FolderOpen, FileText, Kanban, CreditCard,
  FolderKanban, FormInput, Table2, Mail, Palette, Box, AlertTriangle,
} from 'lucide-react'

export const navigation: NavSection[] = [
  {
    heading: 'Main Navigation',
    items: [
      {
        label: 'Dashboard',
        icon: LayoutDashboard,
        children: [
          { label: 'Dashboard v1', href: '/' },
          { label: 'Dashboard v2', href: '/dashboard' },
          { label: 'Analytics', href: '/dashboard/analytics' },
        ],
      },
    ],
  },
  {
    heading: 'Pages',
    items: [
      { label: 'Profile',      href: '/pages/profile',       icon: User },
      { label: 'Settings',     href: '/pages/settings',      icon: Settings },
      { label: 'Calendar',     href: '/pages/calendar',      icon: Calendar },
      { label: 'Chat',         href: '/pages/chat',          icon: MessageSquare },
      { label: 'FAQ',          href: '/pages/faq',           icon: HelpCircle },
      { label: 'File Manager', href: '/pages/file-manager',  icon: FolderOpen },
      { label: 'Invoice',      href: '/pages/invoice',       icon: FileText },
      { label: 'Kanban',       href: '/pages/kanban',        icon: Kanban },
      { label: 'Pricing',      href: '/pages/pricing',       icon: CreditCard },
      { label: 'Projects',     href: '/pages/projects',      icon: FolderKanban },
    ],
  },
  {
    heading: 'Forms',
    items: [
      {
        label: 'Forms',
        icon: FormInput,
        children: [
          { label: 'Elements',   href: '/forms/elements' },
          { label: 'Layout',     href: '/forms/layout' },
          { label: 'Validation', href: '/forms/validation' },
          { label: 'Wizard',     href: '/forms/wizard' },
        ],
      },
    ],
  },
  {
    heading: 'Tables',
    items: [
      {
        label: 'Tables',
        icon: Table2,
        children: [
          { label: 'Simple Table', href: '/tables/simple' },
          { label: 'Data Table',   href: '/tables/data' },
        ],
      },
    ],
  },
  {
    heading: 'Mailbox',
    items: [
      {
        label: 'Mailbox',
        icon: Mail,
        children: [
          { label: 'Inbox',     href: '/mailbox/inbox' },
          { label: 'Compose',   href: '/mailbox/compose' },
          { label: 'Read Mail', href: '/mailbox/read' },
        ],
      },
    ],
  },
  {
    heading: 'UI',
    items: [
      {
        label: 'UI Elements',
        icon: Palette,
        children: [
          { label: 'General',  href: '/ui/general' },
          { label: 'Icons',    href: '/ui/icons' },
          { label: 'Timeline', href: '/ui/timeline' },
        ],
      },
      { label: 'Widgets', href: '/ui/widgets', icon: Box },
    ],
  },
  {
    heading: 'Errors',
    items: [
      { label: '404 Page', href: '/error/404', icon: AlertTriangle },
      { label: '500 Page', href: '/error/500', icon: AlertTriangle },
    ],
  },
]
