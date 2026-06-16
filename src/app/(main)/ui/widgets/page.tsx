import type { Metadata } from 'next'
import { ShoppingCart, Users, TrendingDown, DollarSign, Cpu, HardDrive, Wifi } from 'lucide-react'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import SmallBox from '@/components/widgets/SmallBox'
import InfoBox from '@/components/widgets/InfoBox'

export const metadata: Metadata = { title: 'Widgets — AdminLTE' }

export default function WidgetsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Widgets</h1>
        <p className="text-sm text-steel mt-1">Stat cards and dashboard widgets gallery.</p>
      </div>

      {/* SmallBox gallery */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Small Box Widgets</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SmallBox title="New Orders"   value="1,410" color="green"  icon={<ShoppingCart />} href="#" />
            <SmallBox title="New Users"    value="760"   color="teal"   icon={<Users />}        href="#" />
            <SmallBox title="Bounce Rate"  value="34%"   color="purple" icon={<TrendingDown />} href="#" />
            <SmallBox title="Revenue"      value="$52K"  color="orange" icon={<DollarSign />}   href="#" />
          </div>
        </CardBody>
      </Card>

      {/* InfoBox gallery */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Info Box Widgets</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoBox icon={<Cpu />}      title="CPU Usage"     value="64%" color="green"  progress={64} progressText="of 100% capacity" />
            <InfoBox icon={<HardDrive />} title="Disk Space"    value="312 GB" color="teal"   progress={78} progressText="of 400 GB used" />
            <InfoBox icon={<Wifi />}     title="Network Load"  value="12 Mbps" color="purple" progress={22} progressText="of 50 Mbps capacity" />
          </div>
        </CardBody>
      </Card>

      {/* Card variants */}
      <Card>
        <CardHeader><h2 className="text-base font-semibold text-ink">Card Variants</h2></CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader><h3 className="text-sm font-semibold text-ink">Default Card</h3></CardHeader>
              <CardBody><p className="text-sm text-steel">A standard card with header and body sections.</p></CardBody>
            </Card>
            <Card className="border-2 border-mongo-green">
              <CardHeader><h3 className="text-sm font-semibold text-ink">Highlighted Card</h3></CardHeader>
              <CardBody><p className="text-sm text-steel">A card with an accent border to draw attention.</p></CardBody>
            </Card>
            <Card>
              <CardBody><p className="text-sm text-steel">A body-only card, with no header section.</p></CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
