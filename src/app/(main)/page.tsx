import { ShoppingCart, Users, DollarSign, BarChart2, Download, UserCheck } from 'lucide-react'
import SmallBox from '@/components/widgets/SmallBox'
import InfoBox from '@/components/widgets/InfoBox'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import AreaChart, { AreaChartDataPoint } from '@/components/charts/AreaChart'

const salesData: AreaChartDataPoint[] = [
  { name: 'Jan', value: 4200 },
  { name: 'Feb', value: 3800 },
  { name: 'Mar', value: 5100 },
  { name: 'Apr', value: 4700 },
  { name: 'May', value: 6200 },
  { name: 'Jun', value: 5800 },
  { name: 'Jul', value: 7100 },
]

const orders = [
  { id: '#001', product: 'AdminLTE Pro',       date: '2026-06-01', status: 'Completed',  amount: '$349' },
  { id: '#002', product: 'Dashboard Template', date: '2026-06-03', status: 'Pending',    amount: '$199' },
  { id: '#003', product: 'UI Kit',             date: '2026-06-05', status: 'Completed',  amount: '$89'  },
  { id: '#004', product: 'Bootstrap Theme',    date: '2026-06-07', status: 'Processing', amount: '$129' },
  { id: '#005', product: 'React Components',   date: '2026-06-10', status: 'Completed',  amount: '$249' },
]

const statusBadge: Record<string, string> = {
  Completed:  'bg-mongo-green-soft text-mongo-green-dark',
  Pending:    'bg-yellow-50 text-yellow-700',
  Processing: 'bg-blue-50 text-blue-700',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Dashboard</h1>
        <p className="text-sm text-steel mt-1">Welcome back, Admin</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <SmallBox
          title="New Orders"
          value="150"
          color="green"
          icon={<ShoppingCart className="w-10 h-10" />}
          href="/pages/projects"
        />
        <SmallBox
          title="Bounce Rate"
          value="53%"
          color="teal"
          icon={<BarChart2 className="w-10 h-10" />}
          href="/dashboard/analytics"
        />
        <SmallBox
          title="Registrations"
          value="44"
          color="purple"
          icon={<Users className="w-10 h-10" />}
          href="/pages/profile"
        />
        <SmallBox
          title="Revenue"
          value="$65k"
          color="orange"
          icon={<DollarSign className="w-10 h-10" />}
          href="/pages/invoice"
        />
      </div>

      {/* Info boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoBox
          icon={<Download className="w-8 h-8" />}
          title="Downloads"
          value="3,200"
          color="green"
          progress={70}
          progressText="70% of monthly target"
        />
        <InfoBox
          icon={<UserCheck className="w-8 h-8" />}
          title="New Users"
          value="1,840"
          color="teal"
          progress={40}
          progressText="40% of monthly target"
        />
      </div>

      {/* Chart + orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <h2 className="text-base font-semibold text-ink">Monthly Sales</h2>
          </CardHeader>
          <CardBody>
            <AreaChart data={salesData} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-base font-semibold text-ink">Recent Orders</h2>
          </CardHeader>
          <div className="divide-y divide-hairline">
            {orders.map(order => (
              <div key={order.id} className="px-6 py-3 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink truncate">{order.product}</p>
                  <p className="text-xs text-steel">{order.date}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold text-ink">{order.amount}</p>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusBadge[order.status]}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
