import type { Metadata } from 'next'
import {
  Home, Settings, User, Mail, Bell, Search, Calendar, FileText,
  Folder, Image, Heart, Star, Bookmark, Trash2, Edit, Download,
  Upload, Share2, Lock, Unlock, Eye, EyeOff, Check, X,
  Plus, Minus, ChevronRight, ChevronLeft, ArrowUp, ArrowDown,
  Phone, MessageSquare, ShoppingCart, CreditCard, Truck, Package,
  Globe, Wifi, Battery, Camera, Music, Video,
} from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Icons — AdminLTE' }

const ICONS = [
  { name: 'Home',          Icon: Home },
  { name: 'Settings',      Icon: Settings },
  { name: 'User',          Icon: User },
  { name: 'Mail',          Icon: Mail },
  { name: 'Bell',          Icon: Bell },
  { name: 'Search',        Icon: Search },
  { name: 'Calendar',      Icon: Calendar },
  { name: 'File Text',     Icon: FileText },
  { name: 'Folder',        Icon: Folder },
  { name: 'Image',         Icon: Image },
  { name: 'Heart',         Icon: Heart },
  { name: 'Star',          Icon: Star },
  { name: 'Bookmark',      Icon: Bookmark },
  { name: 'Trash',         Icon: Trash2 },
  { name: 'Edit',          Icon: Edit },
  { name: 'Download',      Icon: Download },
  { name: 'Upload',        Icon: Upload },
  { name: 'Share',         Icon: Share2 },
  { name: 'Lock',          Icon: Lock },
  { name: 'Unlock',        Icon: Unlock },
  { name: 'Eye',           Icon: Eye },
  { name: 'Eye Off',       Icon: EyeOff },
  { name: 'Check',         Icon: Check },
  { name: 'Close',         Icon: X },
  { name: 'Plus',          Icon: Plus },
  { name: 'Minus',         Icon: Minus },
  { name: 'Chevron Right', Icon: ChevronRight },
  { name: 'Chevron Left',  Icon: ChevronLeft },
  { name: 'Arrow Up',      Icon: ArrowUp },
  { name: 'Arrow Down',    Icon: ArrowDown },
  { name: 'Phone',         Icon: Phone },
  { name: 'Message',       Icon: MessageSquare },
  { name: 'Cart',          Icon: ShoppingCart },
  { name: 'Credit Card',   Icon: CreditCard },
  { name: 'Truck',         Icon: Truck },
  { name: 'Package',       Icon: Package },
  { name: 'Globe',         Icon: Globe },
  { name: 'Wifi',          Icon: Wifi },
  { name: 'Battery',       Icon: Battery },
  { name: 'Camera',        Icon: Camera },
  { name: 'Music',         Icon: Music },
  { name: 'Video',         Icon: Video },
]

export default function IconsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink">Icons</h1>
          <p className="text-sm text-steel mt-1">{ICONS.length} icons from the Lucide icon library.</p>
        </div>
        <div className="w-64">
          <input
            type="text"
            placeholder="Search icons…"
            className="w-full h-9 px-3 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-steel focus:outline-none focus:border-2 focus:border-mongo-green-dark"
          />
        </div>
      </div>

      <Card>
        <CardBody>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {ICONS.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-hairline hover:border-mongo-green hover:bg-surface transition-colors"
              >
                <Icon className="w-6 h-6 text-ink" />
                <span className="text-xs text-steel text-center">{name}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
