import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

interface SalesChartProps {
  data: {
    date: string
    value: number
  }[]
}

export function SalesChart({ data }: SalesChartProps) {
  const [period, setPeriod] = React.useState('month')

  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `$${value / 1000}k`
    }
    return `$${value}`
  }

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-heading">Sales Overview</CardTitle>
        <Tabs defaultValue="month" value={period} onValueChange={setPeriod}>
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="quarter">Quarter</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                tickFormatter={formatYAxis}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1}
                fill="url(#colorValue)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}