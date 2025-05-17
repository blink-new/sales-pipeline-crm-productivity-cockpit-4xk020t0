import React from 'react'
import { CircleDollarSign, Users, Briefcase, TrendingUp } from 'lucide-react'
import { StatCard } from '@/components/dashboard/StatCard'
import { PipelineStages } from '@/components/dashboard/PipelineStages'
import { RecentLeads } from '@/components/dashboard/RecentLeads'
import { SalesChart } from '@/components/dashboard/SalesChart'

// Mock data
const pipelineStages = [
  { name: 'Lead', count: 145, value: 100, color: 'bg-blue-500' },
  { name: 'Qualified', count: 89, value: 60, color: 'bg-indigo-500' },
  { name: 'Proposal', count: 64, value: 40, color: 'bg-violet-500' },
  { name: 'Negotiation', count: 37, value: 25, color: 'bg-purple-500' },
  { name: 'Closed', count: 28, value: 18, color: 'bg-fuchsia-500' }
]

const recentLeads = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '(555) 123-4567',
    company: 'Acme Corp',
    value: 12500,
    status: 'new' as const,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    phone: '(555) 987-6543',
    company: 'XYZ Industries',
    value: 35000,
    status: 'contacted' as const,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@example.com',
    phone: '(555) 567-8901',
    company: 'Globex Corp',
    value: 48000,
    status: 'qualified' as const,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '(555) 234-5678',
    company: 'Summit Solutions',
    value: 29500,
    status: 'proposal' as const,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format'
  }
]

const salesData = [
  { date: 'Jan', value: 4000 },
  { date: 'Feb', value: 3000 },
  { date: 'Mar', value: 5000 },
  { date: 'Apr', value: 6000 },
  { date: 'May', value: 4000 },
  { date: 'Jun', value: 8000 },
  { date: 'Jul', value: 9000 },
  { date: 'Aug', value: 7000 },
  { date: 'Sep', value: 11000 },
  { date: 'Oct', value: 13000 },
  { date: 'Nov', value: 12000 },
  { date: 'Dec', value: 15000 }
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Revenue"
          value="$487,500"
          icon={<CircleDollarSign size={20} />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard 
          title="Active Leads"
          value="293"
          icon={<Users size={20} />}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard 
          title="Deals Won"
          value="28"
          icon={<Briefcase size={20} />}
          trend={{ value: 3.1, isPositive: true }}
        />
        <StatCard 
          title="Conversion Rate"
          value="18.6%"
          icon={<TrendingUp size={20} />}
          trend={{ value: 1.2, isPositive: false }}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SalesChart data={salesData} />
        <PipelineStages stages={pipelineStages} />
      </div>
      
      <RecentLeads leads={recentLeads} />
    </div>
  )
}