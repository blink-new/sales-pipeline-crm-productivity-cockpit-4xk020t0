import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  Plus, 
  Search as SearchIcon, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  Phone,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company: string
  title: string
  status: 'new' | 'contacted' | 'qualified' | 'unqualified'
  source: string
  createdAt: string
  lastActivity: string
  avatarUrl?: string
}

// Mock data
const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@acmecorp.com',
    phone: '(555) 123-4567',
    company: 'Acme Corporation',
    title: 'Chief Technology Officer',
    status: 'new',
    source: 'Website',
    createdAt: '2023-11-01',
    lastActivity: '2023-11-02',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@globex.com',
    phone: '(555) 987-6543',
    company: 'Globex Industries',
    title: 'Marketing Director',
    status: 'contacted',
    source: 'LinkedIn',
    createdAt: '2023-10-28',
    lastActivity: '2023-11-03',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@techware.com',
    phone: '(555) 456-7890',
    company: 'TechWare Solutions',
    title: 'CEO',
    status: 'qualified',
    source: 'Referral',
    createdAt: '2023-10-15',
    lastActivity: '2023-11-01',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@innovate.io',
    phone: '(555) 789-0123',
    company: 'Innovate.io',
    title: 'Operations Manager',
    status: 'unqualified',
    source: 'Conference',
    createdAt: '2023-11-02',
    lastActivity: '2023-11-03',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format'
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david@summit.com',
    phone: '(555) 234-5678',
    company: 'Summit Systems',
    title: 'IT Director',
    status: 'new',
    source: 'Advertisement',
    createdAt: '2023-11-03',
    lastActivity: '2023-11-03',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format'
  },
  {
    id: '6',
    name: 'Jennifer Lee',
    email: 'jennifer@nextstep.org',
    phone: '(555) 345-6789',
    company: 'Next Step Foundation',
    title: 'Executive Director',
    status: 'contacted',
    source: 'Webinar',
    createdAt: '2023-10-20',
    lastActivity: '2023-11-01',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&auto=format'
  },
  {
    id: '7',
    name: 'Robert Miller',
    email: 'robert@quickserve.net',
    phone: '(555) 876-5432',
    company: 'QuickServe Networks',
    title: 'Sales Director',
    status: 'qualified',
    source: 'Email Campaign',
    createdAt: '2023-10-25',
    lastActivity: '2023-11-02',
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format'
  }
]

const statusColors = {
  'new': 'bg-blue-100 text-blue-800',
  'contacted': 'bg-purple-100 text-purple-800',
  'qualified': 'bg-green-100 text-green-800',
  'unqualified': 'bg-gray-100 text-gray-800',
}

const statusLabels = {
  'new': 'New',
  'contacted': 'Contacted',
  'qualified': 'Qualified',
  'unqualified': 'Unqualified',
}

export function Leads() {
  const [sortField, setSortField] = React.useState('name')
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')
  
  const toggleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-heading">Leads</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search leads..."
              className="w-full max-w-xs pl-8 bg-background"
            />
          </div>
          
          <Button variant="outline" size="icon">
            <Filter size={18} />
          </Button>
          
          <Button className="flex items-center gap-1">
            <Plus size={18} />
            Add Lead
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Leads</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="contacted">Contacted</TabsTrigger>
          <TabsTrigger value="qualified">Qualified</TabsTrigger>
          <TabsTrigger value="unqualified">Unqualified</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <div 
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => toggleSort('name')}
                    >
                      Lead
                      {sortField === 'name' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>
                    <div 
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => toggleSort('createdAt')}
                    >
                      Created
                      {sortField === 'createdAt' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>
                    <div 
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => toggleSort('lastActivity')}
                    >
                      Last Activity
                      {sortField === 'lastActivity' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={lead.avatarUrl} />
                          <AvatarFallback>{lead.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{lead.name}</p>
                          <p className="text-sm text-muted-foreground">{lead.title}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[lead.status]} variant="outline">
                        {statusLabels[lead.status]}
                      </Badge>
                    </TableCell>
                    <TableCell>{lead.company}</TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>{formatDate(lead.createdAt)}</TableCell>
                    <TableCell>{formatDate(lead.lastActivity)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Phone size={16} />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                            <DropdownMenuItem>Convert to Deal</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        {/* Other tabs would filter the leads by status */}
        <TabsContent value="new" className="mt-6">
          {/* Content for "New" leads filtered from the main table */}
        </TabsContent>
        <TabsContent value="contacted" className="mt-6">
          {/* Content for "Contacted" leads filtered from the main table */}
        </TabsContent>
        <TabsContent value="qualified" className="mt-6">
          {/* Content for "Qualified" leads filtered from the main table */}
        </TabsContent>
        <TabsContent value="unqualified" className="mt-6">
          {/* Content for "Unqualified" leads filtered from the main table */}
        </TabsContent>
      </Tabs>
    </div>
  )
}