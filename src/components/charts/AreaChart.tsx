'use client'

import {
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { colors } from '@/lib/tokens'

export interface AreaChartDataPoint {
  name: string
  value: number
}

interface AreaChartProps {
  data: AreaChartDataPoint[]
  color?: string
  height?: number
}

export default function AreaChart({
  data,
  color = colors.mongo.green,
  height = 300,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ReAreaChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.hairline} vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: colors.steel }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: colors.steel }}
          axisLine={false}
          tickLine={false}
          width={40}
        />
        <Tooltip
          contentStyle={{
            borderRadius: '8px',
            border: `1px solid ${colors.hairline}`,
            fontSize: 13,
            color: colors.ink,
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill="url(#areaGradient)"
        />
      </ReAreaChart>
    </ResponsiveContainer>
  )
}
