import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Download, Calendar, Filter } from 'lucide-react'

// Mock data for the charts
const salesData = [
  { name: 'Jan', value: 42000 },
  { name: 'Feb', value: 38000 },
  { name: 'Mar', value: 45000 },
  { name: 'Apr', value: 50000 },
  { name: 'May', value: 48000 },
  { name: 'Jun', value: 55000 },
  { name: 'Jul', value: 62000 },
  { name: 'Aug', value: 58000 },
  { name: 'Sep', value: 70000 },
  { name: 'Oct', value: 75000 },
  { name: 'Nov', value: 80000 },
  { name: 'Dec', value: 90000 }
]

const pipelineData = [
  { name: 'Lead', value: 145 },
  { name: 'Qualified', value: 89 },
  { name: 'Proposal', value: 64 },
  { name: 'Negotiation', value: 37 },
  { name: 'Closed', value: 28 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const sourceData = [
  { name: 'Website', value: 35 },
  { name: 'Referral', value: 25 },
  { name: 'LinkedIn', value: 20 },
  { name: 'Conference', value: 15 },
  { name: 'Other', value: 5 }
]

const teamPerformance = [
  { name: 'John Smith', deals: 28, revenue: 320000 },
  { name: 'Sarah Johnson', deals: 24, revenue: 280000 },
  { name: 'Michael Brown', deals: 20, revenue: 240000 },
  { name: 'Emily Davis', deals: 18, revenue: 210000 },
  { name: 'David Wilson', deals: 15, revenue: 180000 }
]

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-heading">Reports</h1>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Calendar size={16} />
            Last 30 Days
          </Button>
          
          <Button variant="outline" size="icon">
            <Filter size={18} />
          </Button>
          
          <Button className="flex items-center gap-1">
            <Download size={16} />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">$487,500</span>
              <span className="text-sm text-emerald-500 font-medium">↑ 12.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Deals Closed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">28</span>
              <span className="text-sm text-emerald-500 font-medium">↑ 4 more than last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">18.6%</span>
              <span className="text-sm text-rose-500 font-medium">↓ 1.2% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="sources">Lead Sources</TabsTrigger>
          <TabsTrigger value="team">Team Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={salesData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      name="Revenue" 
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pipeline" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Pipeline Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pipelineData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pipelineData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [value, 'Deals']}
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Pipeline Value by Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'Lead', value: 550000 },
                        { name: 'Qualified', value: 420000 },
                        { name: 'Proposal', value: 380000 },
                        { name: 'Negotiation', value: 250000 },
                        { name: 'Closed', value: 180000 }
                      ]}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 70,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis 
                        type="number"
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        width={80}
                      />
                      <Tooltip 
                        formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Value']}
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                      <Bar 
                        dataKey="value" 
                        name="Value" 
                        fill="hsl(var(--accent))" 
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sources" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Lead Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Percentage']}
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Conversion Rate by Source</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'Website', value: 12 },
                        { name: 'Referral', value: 28 },
                        { name: 'LinkedIn', value: 18 },
                        { name: 'Conference', value: 22 },
                        { name: 'Other', value: 15 }
                      ]}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 70,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis 
                        type="number"
                        tickFormatter={(value) => `${value}%`}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        width={80}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Conversion Rate']}
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                      <Bar 
                        dataKey="value" 
                        name="Conversion Rate" 
                        fill="hsl(var(--chart-3))" 
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={teamPerformance}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 60,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--primary))" />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right" 
                      stroke="hsl(var(--chart-2))"
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                      }}
                    />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="deals" 
                      name="Deals Closed" 
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      yAxisId="right"
                      dataKey="revenue" 
                      name="Revenue Generated" 
                      fill="hsl(var(--chart-2))" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}