import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Phone, Mail, MoreHorizontal } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company: string
  value: number
  status: 'new' | 'contacted' | 'qualified' | 'proposal'
  avatarUrl?: string
}

interface RecentLeadsProps {
  leads: Lead[]
}

const statusColors = {
  'new': 'bg-blue-100 text-blue-800',
  'contacted': 'bg-purple-100 text-purple-800',
  'qualified': 'bg-green-100 text-green-800',
  'proposal': 'bg-amber-100 text-amber-800'
}

const statusLabels = {
  'new': 'New',
  'contacted': 'Contacted',
  'qualified': 'Qualified',
  'proposal': 'Proposal'
}

export function RecentLeads({ leads }: RecentLeadsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-heading">Recent Leads</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={lead.avatarUrl} />
                  <AvatarFallback>{lead.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-medium leading-none">{lead.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{lead.company}</p>
                </div>
              </div>
              
              <Badge className={statusColors[lead.status]} variant="outline">
                {statusLabels[lead.status]}
              </Badge>
              
              <div className="text-sm font-medium">
                ${lead.value.toLocaleString()}
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Phone size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail size={16} />
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
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}