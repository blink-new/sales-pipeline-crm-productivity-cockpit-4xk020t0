import React from 'react'
import { PipelineBoard } from '@/components/pipeline/PipelineBoard'
import { Button } from '@/components/ui/button'
import { 
  Filter, 
  Plus, 
  ChevronsUpDown, 
  Search as SearchIcon 
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'

// Mock data
const pipelineStages = [
  {
    id: 'lead',
    title: 'Lead',
    deals: [
      {
        id: 'deal1',
        title: 'Enterprise CRM Implementation',
        company: 'Acme Corp',
        value: 75000,
        contact: {
          name: 'John Smith',
          avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format'
        },
        stage: 'Lead',
        closingDate: '2023-12-15',
        probability: 20
      },
      {
        id: 'deal2',
        title: 'Data Analytics Platform',
        company: 'TechGrowth Inc',
        value: 48000,
        contact: {
          name: 'Maria Rodriguez',
          avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format'
        },
        stage: 'Lead',
        closingDate: '2023-11-30',
        probability: 15
      },
      {
        id: 'deal3',
        title: 'Cloud Migration Services',
        company: 'Innovative Solutions',
        value: 36000,
        contact: {
          name: 'David Chen',
          avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format'
        },
        stage: 'Lead',
        closingDate: '2023-12-10',
        probability: 25
      }
    ]
  },
  {
    id: 'qualified',
    title: 'Qualified',
    deals: [
      {
        id: 'deal4',
        title: 'SaaS Integration',
        company: 'Global Systems',
        value: 42000,
        contact: {
          name: 'Sarah Johnson',
          avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format'
        },
        stage: 'Qualified',
        closingDate: '2023-11-20',
        probability: 40
      },
      {
        id: 'deal5',
        title: 'Network Security Update',
        company: 'SecureNet Inc',
        value: 60000,
        contact: {
          name: 'Robert Williams',
          avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format'
        },
        stage: 'Qualified',
        closingDate: '2023-12-05',
        probability: 45
      }
    ]
  },
  {
    id: 'proposal',
    title: 'Proposal',
    deals: [
      {
        id: 'deal6',
        title: 'HR Software Implementation',
        company: 'People First Ltd',
        value: 84000,
        contact: {
          name: 'Emily Taylor',
          avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format'
        },
        stage: 'Proposal',
        closingDate: '2023-11-15',
        probability: 65
      },
      {
        id: 'deal7',
        title: 'Customer Portal Redesign',
        company: 'Service Plus',
        value: 38000,
        contact: {
          name: 'Michael Brown',
          avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format'
        },
        stage: 'Proposal',
        closingDate: '2023-11-25',
        probability: 60
      }
    ]
  },
  {
    id: 'negotiation',
    title: 'Negotiation',
    deals: [
      {
        id: 'deal8',
        title: 'ERP System Upgrade',
        company: 'Manufacturing Pro',
        value: 95000,
        contact: {
          name: 'Jennifer Adams',
          avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format'
        },
        stage: 'Negotiation',
        closingDate: '2023-11-10',
        probability: 80
      }
    ]
  },
  {
    id: 'closed',
    title: 'Closed Won',
    deals: [
      {
        id: 'deal9',
        title: 'Mobile App Development',
        company: 'FinTech Solutions',
        value: 68000,
        contact: {
          name: 'Alex Martin',
          avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format'
        },
        stage: 'Closed Won',
        closingDate: '2023-10-30',
        probability: 100
      },
      {
        id: 'deal10',
        title: 'Data Warehouse Migration',
        company: 'Analytics Masters',
        value: 120000,
        contact: {
          name: 'Lisa Wang',
          avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&auto=format'
        },
        stage: 'Closed Won',
        closingDate: '2023-11-01',
        probability: 100
      }
    ]
  }
]

export function Pipeline() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold font-heading">Sales Pipeline</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search deals..."
              className="w-full max-w-xs pl-8 bg-background"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuCheckboxItem checked>
                Show all deals
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                My deals only
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                High value (&gt;$50k)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Closing this month
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Sort by
                <ChevronsUpDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuCheckboxItem checked>
                Value (High to Low)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Value (Low to High)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Closing Date
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Company Name
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="flex items-center gap-1">
            <Plus size={18} />
            New Deal
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <PipelineBoard stages={pipelineStages} />
      </div>
    </div>
  )
}